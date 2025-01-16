const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const bookingRoutes = require('./routes/router');
const registerRoute = require('./routes/registerRoute');
const loginRoute = require('./routes/loginRoute');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use('/api', bookingRoutes);

app.use("/api", registerRoute);
app.use("/api/auth", loginRoute);
app.use('/api/users', userRoutes);

app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
