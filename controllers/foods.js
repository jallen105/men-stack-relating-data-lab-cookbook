const express = require('express')
const router = express.Router()

const User = require('../models/user.js')

router.get('/', (req, res) => {
    res.render('foods/index.ejs')
})

router.get('/new', (req, res) => {
    res.render('foods/new.ejs')
})

router.post('/', async(req, res) => {
    const currentUser = await User.findById(req.session.user._id)
    currentUser.pantry.push(req.body)
    await currentUser.save()
    res.redirect(`/users/${currentUser._id}/foods`)
})

module.exports = router