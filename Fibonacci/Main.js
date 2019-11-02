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
    let maxRecursion = 35;
    let startSize = 2000;
    let recursionLevel = 0;
    let frame = 0;
    let vLine = new Vector2D(0, 0);
    let counterFour = 0;
    function init(_event) {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        crc2.translate(canvas.width / 2, canvas.height / 2);
        drawBackground(canvas.width / -2, canvas.height / -2, canvas.width, canvas.height);
        createFibArray();
        animate();
    }
    function drawBackground(_x, _y, _w, _h) {
        crc2.beginPath();
        crc2.strokeStyle = "hsla(328, 82%, 42%, 1)";
        crc2.fillStyle = "hsla(328, 82%, 42%, 1)";
        crc2.rect(_x, _y, _w, _h);
        crc2.stroke();
        crc2.fill();
    }
    function calculateSequence(n) {
        if (n == 0 || n == 1) {
            return 1;
        }
        else {
            return calculateSequence(n - 1) + calculateSequence(n - 2);
        }
    }
    function calculatePositions(_fibDigit, _recursionLevel) {
        if (counterFour < 4) {
            counterFour++;
        }
        else
            counterFour = 0;
        if (counterFour == 0) {
            vLine.x = 0;
            vLine.y = _fibDigit;
        }
        if (counterFour == 1) {
            vLine.x = _fibDigit * -1;
            vLine.y = 0;
        }
        if (counterFour == 2) {
            vLine.x = 0;
            vLine.y = _fibDigit * -1;
        }
        if (counterFour == 3) {
            vLine.x = _fibDigit;
            vLine.y = 0;
        }
        console.log("count4: " + counterFour);
        console.log("_rec" + _recursionLevel);
        console.log("rec" + recursionLevel);
        console.log("_fib" + _fibDigit);
        console.log(vLine);
        console.log(vBall);
        vBall.getSum(vLine);
    }
    function createFibArray() {
        for (let i = 0; i < maxRecursion; i++) {
            fibonacciArray[i] = calculateSequence(i);
        }
        console.log(fibonacciArray);
    }
    function drawLine(_fibDigit) {
        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.lineWidth = startSize / (_fibDigit);
        crc2.moveTo(vBall.x, vBall.y);
        crc2.lineTo(vLine.x, vLine.y);
        crc2.stroke();
    }
    function drawBall(_fibDigit) {
        crc2.beginPath();
        crc2.strokeStyle = "hsla(130, 82%, 42%, 0.47)";
        crc2.fillStyle = "hsla(130, 82%, 42%, 0.47)";
        crc2.arc(vBall.x, vBall.y, startSize / (_fibDigit * 10), 0 * Math.PI, 2 * Math.PI, null);
        crc2.stroke();
        crc2.fill();
    }
    function animate() {
        recursionLevel++;
        calculatePositions(fibonacciArray[recursionLevel], recursionLevel);
        drawLine(fibonacciArray[recursionLevel]);
        drawBall(fibonacciArray[recursionLevel]);
        console.log(fibonacciArray[recursionLevel]);
        console.log(recursionLevel);
        console.log(counterFour);
        if (recursionLevel < maxRecursion) {
            requestAnimationFrame(animate);
        }
    }
})(Fibonacci || (Fibonacci = {}));
//# sourceMappingURL=Main.js.map