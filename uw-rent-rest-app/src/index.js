import express from "express";
import getting_started from "./routes/getting_started";
import early_stage from "./routes/early_stage";
import build_test from "./routes/build_test";
import starting_launch from "./routes/starting_launch";
import funding_competition from "./routes/funding_competition";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";
import data from "../data";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/v1", getting_started);
app.use("/api/v2", getting_started);
app.use("/api/v1", early_stage);
app.use("/api/v2", early_stage);
app.use("/api/v1", build_test);
app.use("/api/v2", build_test);
app.use("/api/v1", starting_launch);
app.use("/api/v2", starting_launch);
app.use("/api/v1", funding_competition);
app.use("/api/v2", funding_competition);

app.get("/", (req, res) => {
  res.send("test");
});

app.get("/api/v1/getting_started", (req, res) => {
  res.json(data.getting_started).status(200);
});

app.get("/api/v1/getting_started/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let getting_started = data.getting_started;
  let response = getting_started.find(
    (getting_started) => getting_started.id === id
  );
  if (!response) {
    res.status(404).json({ message: `Residence with ID: ${id} doesn't exist` });
  }
  res.json(response).status(200);
});

app.get("/api/v2/getting_started/:address", (req, res) => {
  let address = req.params.address;
  let getting_started = data.getting_started;
  let response = getting_started.find(
    (getting_started) => getting_started.address === address
  );
  if (!response) {
    res
      .status(404)
      .json({ message: `Residence with address: ${address} doesn't exist` });
  }
  res.json(response).status(200);
});

app.get("/api/v1/early_stage", (req, res) => res.json(data.early_stage));

app.get("/api/v2/early_stage", (req, res) => res.json(data.early_stage));

app.get("/api/v1/early_stage/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let early_stage = data.early_stage;
  let response = early_stage.find((early_stage) => early_stage.id === id);
  if (!response) {
    res.status(404).json({ message: `Residence with ID: ${id} doesn't exist` });
  }
  res.json(response).status(200);
});

app.get("/api/v2/early_stage/:rent", (req, res) => {
  let rent = parseFloat(req.params.rent);
  let early_stage = data.early_stage;
  let response = early_stage.find((early_stage) => early_stage.rent === rent);
  if (!response) {
    res
      .status(404)
      .json({ message: `Residence with price: ${rent} doesn't exist` });
  }
  res.json(response).status(200);
});

app.get("/api/v1/build_test", (req, res) => res.json(data.build_test));

app.get("/api/v2/build_test", (req, res) => res.json(data.build_test));

app.get("/api/v1/build_test/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let build_test = data.build_test;
  let response = build_test.find((build_test) => build_test.id === id);
  if (!response) {
    res.status(404).json({ message: `Residence with ID: ${id} doesn't exist` });
  }
  res.json(response).status(200);
});
app.get("/api/v2/build_test/:build_test", (req, res) => {
  let build_test = parseInt(req.params.build_test);
  let room = data.build_test;
  let response = room.find((room) => room.build_test === build_test);
  if (!response) {
    res
      .status(404)
      .json({ message: `Residence with ID: ${build_test} doesn't exist` });
  }
  res.json(response).status(200);
});

app.get("/api/v1/starting_launch", (req, res) =>
  res.json(data.starting_launch)
);

app.get("/api/v2/starting_launch", (req, res) =>
  res.json(data.starting_launch)
);

app.get("/api/v1/starting_launch/:id", (req, res) => {
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

app.get("/api/v2/starting_launch/:baths", (req, res) => {
  let baths = parseInt(req.params.baths);
  let starting_launch = data.starting_launch;
  let response = starting_launch.find(
    (starting_launch) => starting_launch.baths === baths
  );
  if (!response) {
    res.status(404).json({
      message: `Residence with number of starting_launch: ${baths} doesn't exist`,
    });
  }
  res.json(response).status(200);
});

app.get("/api/v1/funding_competition", (req, res) =>
  res.json(data.funding_competition)
);

app.get("/api/v2/funding_competition", (req, res) =>
  res.json(data.funding_competition)
);

app.get("/api/v1/funding_competition/:id", (req, res) => {
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

app.get("/api/v2/funding_competition/:indication", (req, res) => {
  let indication = req.params.indication;
  let funding_competition = data.funding_competition;
  let response = funding_competition.find(
    (funding_competition) => funding_competition.indication === indication
  );
  if (!response) {
    res.status(404).json({
      message: `Residence with Indication: ${indication} doesn't exist`,
    });
  }
  res.json(response).status(200);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
