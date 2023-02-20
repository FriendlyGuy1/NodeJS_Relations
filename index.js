require('dotenv').config();
const connectDB = require('./config/db');
const express = require('express');

connectDB();
const app = express();

app.use(express.json());

const CreateUser = require("./controllers/userController")

app.use('/api/ads', require("./routes/adRoutes"))
app.post("/api/users", CreateUser)


app.listen(process.env.PORT, ()=> {
    console.log(`Server is running on PORT ${process.env.PORT}`)
});





