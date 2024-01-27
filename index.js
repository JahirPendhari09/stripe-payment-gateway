const express = require('express');
require("dotenv").config();
const bodyParser = require('body-parser');
const { paymentRoutes } = require('./Routes/payment.routes');

const app = express();

app.use(bodyParser.json());

app.use(paymentRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running`);
});
