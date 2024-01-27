const express = require("express");
const paymentRoutes = express.Router();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

paymentRoutes.use(express.json());

// Post route for Creating Payment Intent

paymentRoutes.post('/api/v1/create_intent', async (req, res) => {
    const { amount, currency } = req.body;
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: parseInt(amount) * 100,
            currency: currency,
            automatic_payment_methods: {
              enabled: true,
            },

        });
        res.status(200).json(paymentIntent);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Post route for Create Refund

paymentRoutes.post('/api/v1/capture_intent/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const intent = await stripe.paymentIntents.capture(id);
        res.status(200).json(intent);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Post route for Create Refund

paymentRoutes.post('/api/v1/create_refund/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const refund = await stripe.refunds.create({
            payment_intent: id,
        });
        res.status(200).json(refund);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get Route for getting list of payment intents

paymentRoutes.get('/api/v1/get_intents', async (req, res) => {
    try {
        const intents = await stripe.paymentIntents.list();
        res.status(200).json(intents.data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = { paymentRoutes };
