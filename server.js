const express = require("express");
const cors = require("cors");
const db = require("./db/db");
const query = require("./db/query");
const app = express();

app.use(cors());

const port = process.env.PORT || 8000;

app.get("/api/products", (req, res) => {
  db.all(query.SELECTALL, (error, data) => {
    if (error) {
      console.table(error.message);
    }
    res.json(data);
  });
});

app.get("/api/categories", (req, res) => {
  db.all(query.SELECTCAT, (error, data) => {
    if (error) {
      console.table(error.message);
    }
    res.json(data);
  });
});

app.get("/api/menClothing", (req, res) => {
  db.all(query.SELECTMEN, [2], (error, data) => {
    if (error) {
      console.table(error.message);
    }
    res.json(data);
  });
});

app.get("/api/womenClothing", (req, res) => {
  db.all(query.SELECTWOMEN, [3], (error, data) => {
    if (error) {
      console.table(error.message);
    }
    res.json(data);
  });
});

app.get("/api/electronics/phones", (req, res) => {
  db.all(query.SELECTPHONES, [1], (error, data) => {
    if (error) {
      console.table(error.message);
    }
    res.json(data);
  });
});

app.get("/api/electronics/headPhones", (req, res) => {
  db.all(query.SELECTHEADP, [1], (error, data) => {
    if (error) {
      console.table(error.message);
    }
    res.json(data);
  });
});

app.get("/api/electronics/smartWatches", (req, res) => {
  db.all(query.SELECTSMARTW, [1], (error, data) => {
    if (error) {
      console.table(error.message);
    }
    res.json(data);
  });
});

app.get("/api/electronics/laptops", (req, res) => {
  db.all(query.SELECTLAPTOPS, [1], (error, data) => {
    if (error) {
      console.table(error.message);
    }
    res.json(data);
  });
});

app.get("/api/accesories/watches", (req, res) => {
  db.all(query.SELECTWATCHES, [4], (error, data) => {
    if (error) {
      console.table(error.message);
    }
    res.json(data);
  });
});

app.listen(port, () => {
  console.log(`server listening on port http://localhost:${port}`);
});
