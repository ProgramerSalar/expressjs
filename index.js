const express = require("express");

const bodyParser = require("body-parser");
const router = require("./userRoute");
const path = require("path");

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(router);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

// app.get("/api", (req, res) => {
//   res.json({
//     name: "manish",
//     email: "sample@example.com",
//     password: "password",
//   });
// });

// app.post("/api/v1/login", (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const password = req.body.password;

//   res.json({
//     success: true,
//     // name: name,
//     // email: email,
//     // password: password,
//   });
// });

app.listen(port, () => {
  console.log("server is started");
});
