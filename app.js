const express = require('express')
const app = express()
const mustache = require('mustache-express')
const bodyParser = require('body-parser')
// const passport = require('passport')
// const BasicStrategy = require('passport-http').BasicStrategy
const mongoose = require('mongoose')
const homepageRoutes = require('./routes/homepage')
// const registrationRoutes = require('./routes/register')
// const activitiesRoutes = require('./routes/activity')
const User = require('./models/User')

app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.set('layout', 'layout')
mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost:27017/flipcards')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))

// passport.use(new BasicStrategy(
//   function (username, password, done) {
//     User.findOne({username: username, password: password})
//     .then(function (user) {
//       if (user) {
//         done(null, user)
//       } else {
//         done(null, false)
//       }
//     })
//   }
// ))

app.use(homepageRoutes)
// app.use(registrationRoutes)
// app.use(passport.authenticate('basic', {session: false}))
// app.use(activitiesRoutes)

app.listen(3000, function () {
  console.log('Flipcards launched!')
})
