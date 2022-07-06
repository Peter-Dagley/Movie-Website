const express = require('express')
const mongoose = require('mongoose')

const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors({origin:true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json())
app.use(express.static('script'));

const uri = 'mongodb://localhost:27017/qacinemas';
let opts = { useNewUrlParser: true }

// Routes
const bookingRouter = require("./routes/bookingRoutes");
const locationRouter = require("./routes/locationRoutes");
const movieRouter = require("./routes/movieRoutes");
const priceRouter = require("./routes/priceModels");
const repliesRouter = require("./routes/repliesModels");

app.use("/", bookingRouter);
app.use("/", locationRouter);
app.use("/", movieRouter);
app.use("/", priceRouter);
app.use("/", repliesRouter);

mongoose.connect
(uri, opts,
    function (error) 
    {
        if (error) 
        {
            console.log("Errors: " + error)
        } 
        else 
        {
            console.log("connection ready")
        }
    }
);

const myserver = app.listen(4000, () =>
    console.log("Server started on", myserver.address().port)
);

module.exports = myserver;