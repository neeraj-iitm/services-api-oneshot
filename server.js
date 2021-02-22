require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
//mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true , useUnifiedTopology: true }); 
mongoose.connect(uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    }).then(res=>{
            console.log("DB Connected!")
    }).catch(err => {
      console.log(Error, err.message);
    })

const connection = mongoose.connection;
const collegesRouter = require("./routes/colleges");
app.use("/colleges", collegesRouter);
const studentsRouter = require("./routes/students");
app.use("/students", studentsRouter);
app.listen(process.env.PORT, () => console.log('server has started at port '+process.env.PORT));
