const express = require("express");
const app = express();
const ejsLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(ejsLayouts);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(4000, function() {
  console.log("======================");
  console.log("LISTENING ON PORT " + 4000);
  console.log("======================");
});

app.get(
  "/",
  ("/",
  (req, res) => {
    res.render("index", { message: "Welcome to Pizza Express!" });
  })
);

app.get(
  "/cat",
  ("/",
  (req, res) => {
    var type = req.params.type;
    res.render("cat", { type: req.params.type });
  })
);

app.get(
  "/order/:amount/:size",
  ("/",
  (req, res) => {
    var amount = req.params.amount;
    var size = req.params.size;
    res.render("order", {
      amount: req.params.amount,
      size: req.params.size
    });
  })
);

app.get("/:catch", function(req, res) {
  res.send("404 Page Not Found. Bummer!");
});
