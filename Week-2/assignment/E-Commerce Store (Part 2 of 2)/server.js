const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const PORT = 9000

app.use(express.json())
app.use(morgan("dev"))
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/InventorySchema'); console.log("Connected to MongoDB")
}


app.use("/inventory", require("./routes/inventoryRouter.js"))
app.listen(PORT, () =>{
    console.log("Server 9000 is Active.")
})