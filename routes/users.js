const express = require ('express')

const userRouter = express.Router()

const userModel = require('../models/users')

//to fetch all users
userRouter.get('/', (req, res)=>{
    userModel.find({}, (err, user) => {
        if (err) {
            res.send(err);
        } else{
            res.json(user);
        }
    })
})

//to get a user by username
userRouter.get('/:username', (req, res)=>{
    const username = req.params.username
    const user = userModel.find(user => user.username == username)

    if (!user) {
        res.status(404).end("This username was not found")
        res.redirect(index.html)
    }

    res.json(user)
})

module.exports = userRouter