import express from "express";
import data from "../../data";
const router = express.Router();

router.get("/api/v1/starting_launch", (req, res) =>
  res.json(data.starting_launch)
);

router.get("/api/v1/starting_launch/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let starting_launch = data.starting_launch;
  let response = starting_launch.find(
    (starting_launch) => starting_launch.id === id
  );
  if (!response) {
    res.status(404).json({ message: `Residence with ID: ${id} doesn't exist` });
  }
  res.json(response).status(200);
});

export default router;
