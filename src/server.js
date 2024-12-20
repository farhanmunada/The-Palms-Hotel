const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookingRoutes = require('./routes/router');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use('/', bookingRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
