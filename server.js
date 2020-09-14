const express = require("express");
const app = express();
const forwarder = require("./forwarder");
app.use(express.json());

app.use("/", forwarder);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server started on port ${port}`));
