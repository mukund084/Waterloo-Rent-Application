import express from "express";
import residences from "./routes/residences";
import prices from "./routes/prices";
import rooms from "./routes/rooms";
import bathrooms from "./routes/bathrooms";
import smoking from "./routes/smoking";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

const app = express();
const PORT = process.env.PORT || 3001;

app.use (express.json());
app.use ("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/v1", residences);
app.use("/api/v1", prices);
app.use("/api/v1", rooms);
app.use("/api/v1", bathrooms);
app.use("/api/v1", smoking);

app.listen(PORT, ()=> {
    console.log(`Server listening on port: ${PORT}`);
});

