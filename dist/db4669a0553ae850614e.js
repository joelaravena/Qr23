var QRCode=require("qrcode"),canvas=document.getElementById("canvas");QRCode.toCanvas(canvas,"sample text",(function(e){e&&console.error(e),console.log("success!")}));