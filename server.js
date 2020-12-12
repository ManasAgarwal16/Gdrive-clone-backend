const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const connectDB = require('./config/db');
connectDB();
//template engine
app.set('views', path.join(__dirname,'/views'));
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.json());

//Routes
app.use('/api/files',require('./routes/files')) //upload url
app.use('/files',require('./routes/show'));//download page url
app.use('/files/download',require('./routes/download'));//downlod url

app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`);
})