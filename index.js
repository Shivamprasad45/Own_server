const express = require('express');
const app = express();

const PORT= 3000;



app.use("/",(req,res)=>{
    res.send("Hello world");
})




app.listen(PORT,()=>{
console.log(`PORT is running on https://localhost:${PORT}`)

})
