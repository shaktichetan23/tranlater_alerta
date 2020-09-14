const express = require("express");
const { default: Axios } = require("axios");
const router = express.Router();
const axios = require("axios");
router.post("/", (req, res) => {
  let data = req.body;
  //   console.log(data.new_server);
  // data.resource = data.new_server;
  // delete data.new_server;
  console.log("Here \n"+data);
  const header = {
    "Content-Type": "application/json",
  };

  axios({
    url: "http://localhost:8080/alert",
    method: "post",
    header: header,
    data: req.body,
  })
    .then((result) => {
      // console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
