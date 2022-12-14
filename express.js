const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;



app.use(express.json());

// STEP 2: Create a GET api that returns query param, path param and return both values with info as json

app.get("/users/:id", (req, res) => {
  res.send({
    id: req.params.id,
    path: "/users/" + req.params.id,
  });
});

// STEP 3: Create a POST api which acccepts a JSON data. Return an array of data.

app.post("/data", (req, res) => {
  const { name, age } = req.body;
  res.send([name, age]);
});

// STEP 1: Create an express server
app.listen(port, () => {
  console.log(`Ready listening on ${port}`);
});
