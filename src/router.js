const express = require('express')
const PageController = require('./controllers/PageController')
const PersonsController = require('./controllers/PersonsController')

const router = express.Router()

// Controllers
const pageController = new PageController()
const personsController = new PersonsController()

// Routes
router.get('/', pageController.renderHome)

router.get('/persons', personsController.renderPersons)

router.get('*', pageController.renderNotFound)

module.exports = router
