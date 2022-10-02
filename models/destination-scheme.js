import mongoose from "mongoose";

const destination_schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minLength: [4, "Title needs to be longer than 4 characters"],
  },
  country: {
    type: String,
  },
  location: {
    type: String,
  },
  dateFrom: {
    type: String,
    required: [true, "Pick a starting date"],
  },
  dateTo: {
    type: String,
    required: [true, "Pick a date when you're coming back"],
  },
  description: {
    type: String,
    minLength: [20, `Description needs to be longer than 20 characters`],
  },
});

const Destination = mongoose.model(
  "Destination",
  destination_schema,
  "travel_destinations"
);

export default Destination;
