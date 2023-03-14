// index.js -> bundle.js
var QRCode = require("qrcode");
var canvas = document.getElementById("canvas");

const link = "https://joelaravena.com";

QRCode.toCanvas(canvas, link, function (error) {
  if (error) console.error(error);
  console.log("success!");
});
