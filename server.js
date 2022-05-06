const express = require("express");
const cors = require("cors")
const app = express()

var corsOptions;

app.use(cors(corsOptions));

// Bind application-level middleware to an instance of the app object by using the app.use() and app.METHOD() functions, where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.
app.use(express.json());
