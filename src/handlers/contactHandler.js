const db = require('../config/db');

const saveContact = (req, res) => {
    const { name, email, message } = req.body;
    const query = 'INSERT INTO contact (name, email, message) VALUES (?, ?, ?)';
    db.query(query, [name, email, message], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Error saving contact message.');
            return;
        }
        res.status(200).send('Contact message saved successfully.');
    });
};

module.exports = { saveContact };
