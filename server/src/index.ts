import express from "express";
import { items } from "./data.js";

const app = express();
const PORT = 3001;

app.get("/api/items", (req, res) => {
  const search =
    typeof req.query.search === "string" ? req.query.search.trim().toLowerCase() : "";
  const result = search
    ? items.filter((i) => i.name.toLowerCase().includes(search))
    : items;

  // Broad queries hit more rows, so they take longer to resolve
  const latency = Math.max(100, 900 - search.length * 200);
  setTimeout(() => res.json(result), latency);
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
