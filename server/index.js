const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const TodoItemRoute = require('./routes/todoItems')
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

mongoose.connect(process.env.DB_CONNECT)
    .then(() => console.log("database connected"))
    .catch(err => console.log(err));

app.use('/', TodoItemRoute)


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));