import express from "express";

const app = express();

app.post("/hdfcWebhook", (req, res) => {
    
    const paymentInformation = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    };
    // Update balance in db, add txn
})