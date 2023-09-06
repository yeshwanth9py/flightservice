const express = require("express");
require("dotenv").config()


const setupandstartserver = async ()=>{
    const app = express();
    const PORT = process.env.PORT
    app.listen(PORT, ()=>{
        console.log(`server started at port ${PORT}`);
        // console.log(process.env.PORT);
    })
}

setupandstartserver()