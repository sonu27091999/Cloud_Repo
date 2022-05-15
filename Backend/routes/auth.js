const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

//Create a User using POST ""/api/auth/createuser. No login required
router.get('/', (req,res)=>{
    let obj={
        name:"sonu",
        age: 23
    }
    res.json(obj);
}
)

module.exports = router;