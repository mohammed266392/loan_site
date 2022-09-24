const express = require('express');

const mainController = require('./controller/mainController');

const router = express.Router();

router.get('/', mainController.homePage);
router.get('/home2', mainController.homePagev2);
router.get('/mobile-home', mainController.homeMobilePage);



module.exports = router;