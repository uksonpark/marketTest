const express = require("express");

const app = express();
const PORT = 80;

const handleListening = () => {
  console.log(`on: http://localhost:${PORT}`);
};
app.use("/static", express.static("./static/"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, handleListening);
