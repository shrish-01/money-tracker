import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import Transaction from "./models/Transaction.js";
const app = express();

app.use(express.json());
app.use(cors({
  credentials: 'true',
  origin: 'http://localhost:5173',
}));

mongoose.connect('mongodb://localhost:27017/money-tracker');

app.get("/api/test", (req, res) => {
  res.json("test ok");
});

app.post("/api/transaction", async (req, res) => {
  try {
    const {name, price, description, datetime} = req.body;
    const transaction = await Transaction.create({name, price, description, datetime});
    res.json(transaction);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    res.status(500).json({ error: "Internal server error" });
  }
  // res.json(req.body);
});

app.get('/api/transactions', async (req, res) => {
  const transactions = await Transaction.find();
  res.json(transactions);
});

app.listen(4000);
