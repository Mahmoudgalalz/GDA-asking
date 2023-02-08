const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes= require('../../routes/routes')
const cors=require('cors')


const mongo = 'mongodb+srv://krokeen:krokeen@dynamiccv.fklb5.mongodb.net/GDA'
require('dotenv').config();


app.use(express.json());
app.use(
  cors({
    origin: true,
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.options(
  '*',
  cors({
    origin: true,
    optionsSuccessStatus: 200,
    credentials: true,
  })
);


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
    res.redirect('https://http.dog/204.jpg')
});

// starting the server
app.listen(8080, () => {
  console.log('listening on port 8080');
});
