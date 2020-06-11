var UXD;
(function (UXD) {
    var V2 = Vector.Vector2D;
    let crc2;
    let canvas;
    let img;
    let body;
    let imgData;
    let pixelData;
    let pixel;
    let x;
    let y;
    let cosC;
    let phi1 = 0;
    let theta0 = 0;
    let inputPhi;
    let inputTheta;
    //window.addEventListener("load", init);
    function init(_event) {
        body = document.querySelector("body");
        generateImage();
        generateCanvas();
        drawAndLoadImage();
        //drawTestDot();
        console.log(calcFromSpherical(toRad(inputPhi), toRad(inputTheta)));
        console.log(toRad(inputTheta));
    }
    function generateCanvas() {
        canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        crc2 = canvas.getContext("2d");
        pixelData = crc2.createImageData(1, 1);
        pixel = pixelData.data;
        body.append(canvas);
    }
    function generateImage() {
        img = document.createElement("img");
        img.setAttribute("src", "testEquirectangular.jpg");
        img.setAttribute("alt", "test");
    }
    function drawAndLoadImage() {
        crc2.drawImage(img, 0, 0);
        imgData = crc2.getImageData(0, 0, img.width, img.height).data;
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        for (let index = 0; index < imgData.length; index += 4) {
            drawPixel((index / 4) % img.width, (index / 4) / img.width, imgData[index], imgData[index + 1], imgData[index + 2], imgData[index + 3]);
        }
    }
    function drawPixel(_x, _y, _r, _g, _b, _a) {
        pixel[0] = _r;
        pixel[1] = _g;
        pixel[2] = _b;
        pixel[3] = _a;
        crc2.putImageData(pixelData, _x, _y);
    }
    function drawTestDot() {
        crc2.beginPath();
        crc2.fillStyle = "blue";
        crc2.strokeStyle = "red";
        crc2.arc(100, 100, 30, 0 * Math.PI, 2 * Math.PI, null);
        crc2.stroke();
        crc2.fill();
    }
    function calcFromSpherical(_phi, _theta) {
        cosC = Math.sin(phi1) * Math.sin(_phi) + Math.cos(phi1) * Math.cos(_phi) * Math.cos(_theta - theta0);
        x = (Math.cos(_phi) * Math.sin(_theta - theta0)) / cosC;
        y = (Math.cos(phi1) * Math.sin(_phi) - Math.sin(phi1) * Math.cos(_phi) * Math.cos(_theta - theta0)) / cosC;
        return new V2(x, y);
    }
    function toRad(_angleDeg) {
        return _angleDeg * (Math.PI / 180);
    }
})(UXD || (UXD = {}));
//# sourceMappingURL=Main.js.map