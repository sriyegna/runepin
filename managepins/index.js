const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Pins = require("./model/Pins");
dotenv.config();

const createPins = async () => {
  const lengths = [16, 24, 40, 48, 72, 96, 144, 292];

  for (let i = 0; i < lengths.length; i++) {
    const pin = new Pins({
      length: lengths[i],
      pins: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    });
    await pin.save();
  }
};

const addPin = async (length, pin) => {
  await Pins.updateOne(
    { length },
    {
      $push: { pins: pin },
    }
  );
};

const app = async () => {
  await mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Connected to DB")
  );

  await addPin(16, 20);
};

app();
