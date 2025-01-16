// registerHandler.js

const bcrypt = require("bcrypt");
const db = require("../config/db"); // Asumsi ini adalah koneksi ke database

const registerHandler = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Cek apakah username sudah ada di database
        const checkUserQuery = "SELECT * FROM db_user WHERE username = ?";
        db.query(checkUserQuery, [username], async (err, results) => {
            if (err) {
                console.error("Database error during user check:", err); // Add logging
                return res.status(500).json({ success: false, message: "Database error" });
            }

            if (results.length > 0) {
                return res.status(400).json({ success: false, message: "Username already exists" });
            }

            // Hash password menggunakan bcrypt
            const hashedPassword = await bcrypt.hash(password, 10);

            // Simpan pengguna baru ke database
            const insertUserQuery = "INSERT INTO db_user (username, email, password) VALUES (?, ?, ?)";
            db.query(insertUserQuery, [username, email, hashedPassword], (err, result) => {
                if (err) {
                    console.error("Database error during user insertion:", err); // Add logging
                    return res.status(500).json({ success: false, message: "Error saving user" });
                }

                res.status(201).json({ success: true, message: "Registration successful" });
            });
        });
    } catch (error) {
        console.error("Server error:", error); // Add logging
        res.status(500).json({ success: false, message: "Server error" });
    }
};

module.exports = registerHandler;
