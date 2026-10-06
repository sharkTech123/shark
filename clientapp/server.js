const express = require("express");
const path = require("path");
const prerender = require("prerender-node");
const app = express();

prerender.set("prerenderToken", "1GUqcwJ5AHPJmlN0w5q5");

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  try {
    prerender(req, res, next);
  } catch (err) {
    console.error("Prerender middleware error:", err);
    next();
  }
});

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
