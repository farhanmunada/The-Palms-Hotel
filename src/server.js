const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const bookingRoutes = require('./routes/router');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use('/api', bookingRoutes);

app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
