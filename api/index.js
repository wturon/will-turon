const routes = require("./routes/index.js");

const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/images", routes.images);

app.listen(PORT, () =>
  console.log(`We're live on port http://localhost:${PORT}`)
);
