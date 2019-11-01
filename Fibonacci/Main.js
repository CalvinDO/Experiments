var Fibonacci;
(function (Fibonacci) {
    let crc2;
    let canvas;
    window.addEventListener("load", init);
    function init(_event) {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        crc2.translate(canvas.width / 2, canvas.height / 2);
        drawBackground();
        console.log(calculateSequence(9));
    }
    function drawBackground() {
        crc2.fillStyle = "black";
        crc2.fillRect(0, 0, 500, 222);
    }
    function calculateSequence(n) {
        if (n == 0 || n == 1) {
            return 1;
        }
        else {
            return calculateSequence(n - 1) + calculateSequence(n - 2);
        }
    }
})(Fibonacci || (Fibonacci = {}));
//# sourceMappingURL=Main.js.map