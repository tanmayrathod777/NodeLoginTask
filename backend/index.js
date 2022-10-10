const express = require("express");
const cors=require('cors');
const app = express();

//Middleware
var corsOptions = {
  origin: '*',
}

app.use(cors(corsOptions));

app.use(express.json())       //for POST data
app.use('/api/user',require('./Routes/userRoutes'));
app.use('/api/product',require('./Routes/productRoutes'));

app.listen(5050, (req,res) => {
  console.log("Server running at 5050");
});
