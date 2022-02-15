//=============================================================================
// Basic Config
//=============================================================================
const express = require('express')
// instantiate express
const app = express()
require('dotenv').config()

app.set('port', process.env.PORT || 8005)
const cors = require('cors')
app.use(cors())

//=============================================================================
// Middleware
//=============================================================================

// `express.json` parses application/json request data and
//  adds it to the request object as request.body
app.use(express.json())

// `express.urlencoded` parses x-ww-form-urlencoded request data and
//  adds it to the request object as request.body
app.use(express.urlencoded({ extended: true }))
// in middleware

//=============================================================================
// ROUTES
//=============================================================================
// Redirect

app.get('/', (req, res) => {
  res.redirect('/todo')
})


/* START CONTROLLERS HERE */

const toDoController = require('./controllers/toDoController')
app.use('/todo/', toDoController)

/* END CONTROLLERS HERE */
//=============================================================================
// START SERVER
//=============================================================================

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`)
})
