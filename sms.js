var unirest = require("unirest");

var req = unirest("GET", "https://www.fast2sms.com/dev/bulkV2");

req.query({
    "authorization": "YETIxzkKGglWS4FVhcMray3PBi2Xu8j9fHqQO7C6AJedbZvURpNfl0bAa9YBWvFCOswcL4rd8tQk1HjG",
    "variables_values": "5599",
    "route": "otp",
    "numbers": "9629479948,9629720646,7777777777"
  });

req.headers({
  "cache-control": "no-cache"
});


req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});