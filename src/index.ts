import express from "express";

const app = express();
const port = Number(process.env.PORT) || 3000;

app.get("/", (_req, res) => {
  res.json({ message: "Hello from Express" });
});

app.get("/health", (_req, res) => {
  res.send("ok");
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
