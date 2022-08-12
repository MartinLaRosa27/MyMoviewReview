const express = require("express");
const router = express.Router();
const Reviews = require("./models/Review.js");

module.exports = () => {
  router.get("/api", async (req, res) => {
    const review = await Reviews.findAll();
    res.send(review);
  });

  router.post("/add-review", async (req, res) => {
    const { nombre, descripcion } = req.body;
    await Reviews.create({
      nombre: nombre,
      descripcion: descripcion,
    });
  });

  return router;
};
