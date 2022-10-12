import mongoose, { get } from "mongoose";
import Destination from "../models/destination-scheme.js";
import cors from "cors";
import express from "express";
import {
  getDestinations,
  createDestination,
  updateDestination,
  getDestinationById,
  deleteDestination,
} from "../controllers/DestinationController.js";
import { createUser, getUser } from "../controllers/UsersController.js";
import { validateToken } from "../jwt.js";

const uri =
  "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.ohvc7rg.mongodb.net/mongoose_travel_destinations";

const app = express();
const port = 5500;

app.use(express.json());
app.use(cors());

mongoose.connect(uri);

app.get("/", getDestinations);

app.post("/", createDestination);

app.post("/auth/signup", createUser);
app.post("/auth/login", getUser);

app.put("/destination/:id", updateDestination);
app.get("/destination/:id", getDestinationById);

app.delete("/destination/delete/:id", validateToken, deleteDestination);

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
