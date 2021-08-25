const app = require("express")();
const PORT = 8080;

app.listen(PORT, () =>
  console.log(`We're live on port http://localhost:${PORT}`)
);
