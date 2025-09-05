const express = require('express')
const router = express.Router()

const User = require('../models/user.js')

router.get('/', async (req, res) => {
    const allUsers = await User.find({})
    res.render('users/index.ejs', {
        users: allUsers
    })
})

router.get('/:userId', async (req, res) => {
    const currentUser = await User.findById(req.params.userId)
    res.render('users/show.ejs', {
        user: currentUser
    })
})

module.exports = router