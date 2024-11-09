const express = require("express");
const cors = require("cors");
const db = require("./db/db");
const query = require("./db/query");
const app = express();

app.use(cors());

const port = process.env.PORT || 8000;

app.get("/api/products", (req, res) => {
  const LIMIT = req.query.limit || 36;
  const OFFSET = req.query.offset || 0;
  db.all(query.SELECTFILTERED, [LIMIT], [OFFSET], (error, data) => {
    if (error) {
      console.table(error.message);
    }
    res.json(data);
  });
});

app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id
  db.all(query.SELECTBYID, [productId], (error, data) => {
    if (error) {
      console.table(error.message);
    }
    res.json(data);
  });
});

app.get("/api/products/type/:type", (req, res) => {
  const productType = req.params.type
  db.all(query.SELECTBYTYPE, [productType], (error, data) => {
    if (error) {
      console.table(error.message);
    }
    else if (data.length !== 0){
      res.json(data);
    }
    else{
      res.json("There's no such type")
    }
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

app.get("/api/brands", (req, res) => {
  db.all(query.SELECTBRANDS, (error, data) => {
    if (error) {
      console.table(error.message);
    }
    res.json(data);
  });
});

app.get("/api/products/search/:search", (req, res) => {
  const productSearch = `%${req.params.search}%`
  db.all(query.SELECTLIKE, [productSearch], (error, data) => {
    if (error) {
      console.table(error.message);
    }
    res.json(data);
  });
});



app.listen(port, () => {
  console.log(`server listening on port http://localhost:${port}`);
});
