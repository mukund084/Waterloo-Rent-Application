import express from "express";
import data from "../../data";
const router = express.Router();

router.get("/api/v1/funding_competition", (req, res) =>
  res.json(data.funding_competition)
);

router.get("/api/v1/funding_competition/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let funding_competition = data.funding_competition;
  let response = funding_competition.find(
    (funding_competition) => funding_competition.id === id
  );
  if (!response) {
    res.status(404).json({ message: `Residence with ID: ${id} doesn't exist` });
  }
  res.json(response).status(200);
});

export default router;
