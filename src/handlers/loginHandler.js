const bcrypt = require("bcrypt");
const db = require("../config/db");
const loginHandler = async (req, res) => {
    const { email, password } = req.body;

    try {
        const query = "SELECT * FROM db_user WHERE email = ?";
        console.log("Querying email:", email);
        db.query(query, [email], async (err, results) => {
            if (err) {
                console.error("Database error during email check:", err);
                return res.status(500).json({ success: false, message: "Database error" });
            }

            console.log("Query results:", results);

            if (results.length === 0) {
                return res.status(400).json({ success: false, message: "Email not found" });
            }

            const user = results[0];

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(400).json({ success: false, message: "Invalid password" });
            }

            res.status(200).json({ success: true, message: "Login successful" });
        });
    } catch (error) {
        console.error("Server error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

module.exports = loginHandler;
