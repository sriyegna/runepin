const router = require("express").Router();
const Pins = require("../model/Pins");

router.get("/allStock", async (req, res) => {
  try {
    const lengths = [16, 24, 40, 48, 72, 96, 144, 292];
    const result = {};
    for (let i = 0; i < lengths.length; i++) {
      const response = await Pins.findOne({ length: lengths[i] });
      result[lengths[i]] = response.pins.length;
    }
    return res.status(200).send(result);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Error getting stocks." });
  }
});

router.get("stock", async (req, res) => {
  try {
    const days = req.days;
    const response = await Pins.findOne({ length: days });
    return res.status(200).send({ stock: response.pins.length });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Error getting stock." });
  }
});

module.exports = router;
