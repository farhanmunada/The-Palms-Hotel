const db = require('../config/db');

const getUsers = (req, res) => {
    const query = 'SELECT id, username, email, password FROM db_user'; // Include the password field
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.status(500).json({ error: 'Failed to fetch users' });
        } else {
            res.json(results);
        }
    });
};

const deleteUser = (req, res) => {
    const userId = req.params.id;
    const query = 'DELETE FROM db_user WHERE id = ?';
    db.query(query, [userId], (err, results) => {
        if (err) {
            console.error('Error deleting user:', err);
            res.status(500).json({ error: 'Failed to delete user' });
        } else {
            res.json({ message: 'User deleted successfully' });
        }
    });
};

const addUser = (req, res) => {
    const { username, email, password } = req.body;
    const query = 'INSERT INTO db_user (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, password], (err, results) => {
        if (err) {
            console.error('Error adding user:', err);
            res.status(500).json({ error: 'Failed to add user' });
        } else {
            res.json({ id: results.insertId, username, email, password });
        }
    });
};

// Menangani request untuk mengambil data user berdasarkan ID
const getUser = (req, res) => {
    const userId = req.params.id;
    const query = 'SELECT id, username, email, password FROM db_user WHERE id = ?';
    db.query(query, [userId], (err, results) => {
        if (err) {
            console.error('Error fetching user:', err);
            res.status(500).json({ error: 'Failed to fetch user' });
        } else if (results.length === 0) {  // Jika user tidak ditemukan
            res.status(404).json({ error: 'User not found' });
        } else {
            res.json(results[0]);  // Mengembalikan data user pertama
        }
    });
};


// Menangani request untuk memperbarui data user
const updateUser = (req, res) => {
    const userId = req.params.id;
    const { username, email, password } = req.body;
    const query = 'UPDATE db_user SET username = ?, email = ?, password = ? WHERE id = ?';
    db.query(query, [username, email, password, userId], (err, results) => {
        if (err) {
            console.error('Error updating user:', err);
            res.status(500).json({ error: 'Failed to update user' });
        } else {
            res.json({ id: userId, username, email, password });
        }
    });
};

module.exports = { getUsers, deleteUser, addUser, updateUser, getUser };
