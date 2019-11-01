var Fibonacci;
(function (Fibonacci) {
    let crc2;
    let canvas;
    window.addEventListener("load", init);
    var Vector2D = Vector.Vector2D;
    let fibonacciArray = new Array();
    let vAccelaration = new Vector2D(0, 0);
    let vSpeed = new Vector2D(0, 0);
    let vBall = new Vector2D(0, 0);
    let maxRecursion = 30;
    function init(_event) {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        crc2.translate(canvas.width / 2, canvas.height / 2);
        drawBackground();
        animate();
        createFibArray();
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
    function createFibArray() {
        for (let i = 0; i < maxRecursion; i++) {
            fibonacciArray[i] = calculateSequence(i);
        }
        console.log(fibonacciArray);
    }
    function moveBall() {
    }
    function drawBall(fibDigit) {
        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.lineWidth = 2;
        crc2.moveTo(vBall.x, vBall.y);
        crc2.lineTo(0, 0);
        crc2.stroke();
    }
    function animate() {
        moveBall();
        //drawBall();
        requestAnimationFrame(animate);
    }
})(Fibonacci || (Fibonacci = {}));
//# sourceMappingURL=Main.js.map