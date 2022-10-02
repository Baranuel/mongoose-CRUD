import mongoose, { get } from "mongoose";
import Destination from "../models/destination-scheme.js";

import express from "express";
import cors from "cors";
import {
  getDestinations,
  createDestination,
  updateDestination,
  getDestinationById,
} from "../controllers/DestinationController.js";

const uri =
  "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.ohvc7rg.mongodb.net/mongoose_travel_destinations";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

mongoose.connect(uri);

app.get("/", getDestinations);

app.post("/", createDestination);

app.put("/destination/:id", updateDestination);
app.get("/destination/:id", getDestinationById);

app.listen(port, () => {
  console.log("running");
});
//     const home = new Destination({
//         title:"Bratislava"
//     })

//    await home.save((err, doc) => {
//     if (err) return console.log(err);
//     console.log("successful insert into the db")
//    })
