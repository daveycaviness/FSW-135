const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const PORT = 9000

app.use(express.json())
app.use(morgan("dev"))
mongoose.connect('mongodb://localhost:27017/inventorydb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to the database")
)

app.use("/inventory", require("./routes/inventoryRouter.js"))
app.listen(PORT, () =>{
    console.log("Server 9000 is Active.")
})