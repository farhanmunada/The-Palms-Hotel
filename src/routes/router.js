const express = require('express');
const { saveBooking } = require('../handlers/bookingHandler');
const { saveContact } = require('../handlers/contactHandler');

const router = express.Router();

router.post('/booking', saveBooking);

router.post('/contact', saveContact);

module.exports = router;
