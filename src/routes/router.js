const express = require('express');
const { saveBooking } = require('../handlers/bookingHandler');
const { saveContact } = require('../handlers/contactHandler');
const customerRoutes = require('./customerRoutes');
const contactRoutes = require('./contactRoutes');

const router = express.Router();

router.post('/booking', saveBooking);
router.post('/contact', saveContact);
router.use('/customers', customerRoutes);
router.use('/contacts', contactRoutes);

module.exports = router;
