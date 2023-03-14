// index.js -> bundle.js
var QRCode = require("qrcode");
var canvas = document.getElementById("canvas");

QRCode.toCanvas(
  canvas,
  "https://docs.google.com/document/d/1wzgNH7CdqeNx1NqMzBcnj1mDkEP3qg3ZRsTfybgrw-c/edit",
  function (error) {
    if (error) console.error(error);
    console.log("success!");
  }
);
