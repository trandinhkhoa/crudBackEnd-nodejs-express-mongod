const express = require("express");
const cors = require("cors")
const app = express()

let corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// Bind application-level middleware to an instance of the app object by using the app.use() and app.METHOD() functions, where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "HELLO WORLD"});
})

// include routes ( what does that means ???)
require("./app/routes/tutorial.routes")(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('Server listening on ', PORT);
});

// database
const db = require("./app/models")
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  })