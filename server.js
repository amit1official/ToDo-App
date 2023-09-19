const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const router = require('./routes/TodoRoutes');
const cors = require('cors')

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors())


mongoose
.connect(process.env.MONGODB_URL)
.then(()=>{console.log("Mongodb is Connected....");})
.catch((err)=>{console.log(err);})

app.use(router);


app.listen(port,()=>{
    console.log(`Server is listening at port: ${port}`);
})