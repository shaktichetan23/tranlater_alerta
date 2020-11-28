const express = require("express");
const { default: Axios } = require("axios");
const router = express.Router();
const axios = require("axios");
router.post("/", (req, res) => {
  let data = req.body;

  let event = data.event.eventName;
  let severity = data.event.severity;
  let resource = data.kubernetes.host;
  let text = data.event.message;
  let service = data.kubernetes.namespace_name;

  let payload = {
    resource: resource,
    event: event,
    severity: severity.toLowerCase(),
    environment: "Development",
    service: [service],
  };

  console.log(payload);
  //   console.log(data.new_server);
  // data.resource = data.new_server;
  // delete data.new_server;
  // console.log("here");
  // console.log(data.log);
  const header = {
    "Content-Type": "application/json",
  };

  axios({
    url: "http://localhost:8080/alert",
    method: "post",
    header: header,
    data: payload,
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
