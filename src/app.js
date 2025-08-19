const express = require("express");

const apireniec = require("./routes/reniec.routes");
const apisunat = require("./routes/sunat.routes");
const apisunatavanz = require("./routes/sunatavanz.routes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use(apireniec);
app.use(apisunat);
app.use(apisunatavanz);

module.exports = app;
