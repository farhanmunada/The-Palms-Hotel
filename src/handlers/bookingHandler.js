const db = require('../config/db');

const saveBooking = (req, res) => {
    const { name, email, phone, checkin, checkout, roomtype } = req.body;
    const query = 'INSERT INTO customer (full_name, email, phone_number, cek_in, cek_out, room_type) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [name, email, phone, checkin, checkout, roomtype], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).json({ error: 'Error saving booking.' }); // Changed to JSON response
            return;
        }
        res.status(200).json({ message: 'Booking saved successfully.' }); // Changed to JSON response
    });
};

module.exports = { saveBooking };
