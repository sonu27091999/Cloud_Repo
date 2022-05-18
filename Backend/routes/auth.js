const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET='Sonuisagood$boy'; 

//Create a User using POST ""/api/auth/createuser. No login required
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 5 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 character').isLength({ min: 5 }),
], async (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Checks whether the user with this email exists already
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exists" });
        }
        const salt=await bcrypt.genSalt(10);
        secPass=await bcrypt.hash(req.body.password,salt);
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
        })

        const data={
            user:{
                id:user.id
            }
        }

        const authToken=jwt.sign(data,JWT_SECRET);
        console.log(authToken);
        res.json({authToken});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server error occured");
    }
})


//Authenticate a User using POST ""/api/auth/login. No login required
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password can not be blank').exists()
], async (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {email,password}=req.body;
    try {
        let user = await User.findOne({ email});
        if (!user) {
            return res.status(400).json({ error: "please try with correct login crendentials." });
        }
        const passwordCompare=await bcrypt.compare(password,user.password);
        if(!passwordCompare)
            return res.status(400).json({ error: "please try with correct login crendentials." });
        const data={
            user:{
                id:user.id
            }
        }
        const authToken=jwt.sign(data,JWT_SECRET);
        res.json({authToken});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server error occured");
    }
})
module.exports = router;

