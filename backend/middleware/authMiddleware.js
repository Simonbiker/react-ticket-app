const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async(request, response, next) => {
    let token
    if(request.headers.authorization && request.headers.authorization.startsWith('Bearer')){
        try {
            //Get token from header
            //Formatted Bearer token splitting it into a array so Bearer is first and then the token. 
            token = request.headers.authorization.split(' ')[1] // the one is a token
            //Verify
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            // Get user from token
            request.user = await User.findById(decoded.id).select('-password')
            next()
        } catch (error) {
            console.log(error)
            response.status(401)
            throw new Error('Not Authorsied ')
        }
    }

    if(!token){
        response.status(401)
        throw new Error('Not Authorsied ')
    }
}) 

module.exports = {protect}