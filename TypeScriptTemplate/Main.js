var Gravity;
(function (Gravity) {
    let crc2;
    window.addEventListener("load", init);
    function init(_event) {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        crc2.translate(canvas.width / 2, canvas.height / 2);
    }
    function drawFixed(_radius) {
        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.fillStyle = "black";
        crc2.arc(0, 0, _radius, 0 * Math.PI, 2 * Math.PI, null);
        crc2.stroke();
        crc2.fill();
    }
    function drawBackground(_x, _y, _w, _h) {
        crc2.beginPath();
        let colorAngle = 10;
        crc2.strokeStyle = "rgb(102, 255, 255)";
        crc2.fillStyle = "rgb(102, 255, 255)";
        crc2.rect(_x, _y, _w, _h);
        crc2.stroke();
        crc2.fill();
        crc2.fillStyle;
    }
    function animate() {
        drawBackground(canvas.width / -2, canvas.height / -2, canvas.width, canvas.height);
        requestAnimationFrame(animate);
    }
})(Gravity || (Gravity = {}));
//# sourceMappingURL=Main.js.map