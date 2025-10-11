import express from "express";
import solarUnitRouter from "./api/solar-unit.js";


const server = express();

/** Middleware for parsing JSON request bodies */
server.use(express.json());


server.use("/api/solar-units", solarUnitRouter);

//test root endpoint
server.get("/api", (req, res) => {
  res.status(200).json({ message: "Hello from the backend!" });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
