const express = require('express');
const router = express.Router();
const db = require('../firebaseService');

router.post('/submitForm', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        await db.collection('data').add({ name, email, message });
        res.status(200).send("Form Submitted Successfully");
    } catch (err) {
        console.log("Error in submitting form");
        res.status(500).send("Server Error");
    }
});

module.exports = router;