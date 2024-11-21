const express= require('express');
const bodtParser = require("body-parser");
const authRoutes = require("./routes/auth");
const cors = require('cors');
const app= express();
app.use(bodtParser.json());
app.use(cors());
app.use('/auth',authRoutes);
app.use(cors({ origin: 'http://localhost:3002' }));


const PORT = 3002;
app.listen(PORT,()=>{
    console.log(`server is running from ${PORT}`);
})