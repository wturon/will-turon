const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;

// app.use(express.json());
app.use(cors());

app.get("/boards", (req, res) => {
  res.status(200).send({
    mileage: 100000,
    name: "Boosted Board",
  });
});

// app.post("/tshirt/:id", (req, res) => {
//   const { id } = req.params;
//   const { logo } = req.body;

//   if (!logo) {
//     res.status(418).send({ message: "Oh no!" });
//   }

//   res.status(200).send({ message: "success!" });
// });

app.listen(PORT, () =>
  console.log(`We're live on port http://localhost:${PORT}`)
);
