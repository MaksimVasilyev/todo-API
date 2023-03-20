const dotenv = require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());
const toDoRouter = require('./routes/toDoRouter');

dbConnect().catch((err) => console.log(err));

async function dbConnect() {
  await mongoose.connect(process.env.DB_CONNECT);
  console.log('DB connected');
}

app.use('/', toDoRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log("Server started");
  });
