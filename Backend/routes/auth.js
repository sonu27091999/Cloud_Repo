const express = require('express');
const User=require('../models/User');
const router = express.Router();

//Create a User using POST ""/api/auth/. Doesn't rquire Auth
router.post('/', (req, res) => {
    console.log(req.body);
    const user=User(req.body);
    user.save();
    // res.json('hello');
    res.json(req.body);
})

module.exports = router;