const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes= require('../routes/routes')



const mongo = process.env.DATABASE_URL
require('dotenv').config();

app.use(express.json());



app.use('/api',routes)
// connection
mongoose.connect(mongo);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected');
})


app.get('/', (req, res) => {
  res.send("Hello");
});

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});