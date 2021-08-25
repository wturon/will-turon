const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;

app.use(cors());

app.get("/boards", (req, res) => {
  res.status(200).send({
    mileage: 100000,
    name: "Boosted Board",
  });
});

app.listen(PORT, () =>
  console.log(`We're live on port http://localhost:${PORT}`)
);
