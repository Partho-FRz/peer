const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors())

const home = require('./router/home');

// const config = require('config');

//mongoDB
const uri = 'mongodb+srv://peer1:SAcvVMfNTUpukBp8@peer1.moav8pl.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri).then(()=>{
  console.log('mongodb atlas connected');
}).catch(err =>{
  console.log(err.message);
});


app.use('/', home);


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`listening on port ${port}`));