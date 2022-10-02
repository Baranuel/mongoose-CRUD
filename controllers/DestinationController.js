import Destination from "../models/destination-scheme.js";
import { createError } from "../client/scripts/server-errors.js";

export const getDestinations = async (req, res) => {
  try {
    // const payload = req.body;
    // const destination = new Destination(payload);
    // await destination.save();
    const destinations = await Destination.find().lean();
    res.send(destinations);
  } catch (err) {
    console.log(err);
  }
};

export const createDestination = async (req, res) => {
  const payload = req.body;
  try {
    const destination = new Destination(payload);
    await destination.save();
    res.send(destination);
  } catch (err) {
    if (err.name === "ValidationError") {
      let errName = err.name;
      let errors = createError(err);
      res.status(400);
      res.send({ reason: errName, errors });
    }
  }
};

export const updateDestination = async (req, res) => {
  const payload = req.body;
  const id = req.params.id;
  try {
    let doc = await Destination.findOneAndUpdate({ _id: id }, payload, {
      new: true,
      runValidators: true,
    });
    await doc.save();
    res.send(doc);
  } catch (err) {
    if (err.name === "ValidationError") {
      const destination = await Destination.findOne({
        _id: `${req.params.id}`,
      });
      let errName = err.name;
      let errors = createError(err);
      res.status(400);
      res.send({ reason: errName, errors, payload });
    }
  }
};

export const getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findOne({
      _id: `${req.params.id}`,
    }).lean();
    res.send(destination);
  } catch (err) {
    console.log(err);
  }
};
