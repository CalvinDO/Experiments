var FibonacciRectSpiral;
(function (FibonacciRectSpiral) {
    let crc2;
    let canvas;
    window.addEventListener("load", init);
    var Vector2D = Vector.Vector2D;
    let fibonacciArray = new Array();
    let xPositionsArray = new Array();
    let yPositionsArray = new Array();
    let vAccelaration = new Vector2D(0, 0);
    let vSpeed = new Vector2D(0, 0);
    let vBall = new Vector2D(-1000, -1000);
    let maxRecursion = 21;
    let startSize = 1;
    let recursionLevel = 0;
    let frame = 0;
    //let vLine: Vector2D = new Vector2D(0, 0);
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
        if (n == 1) {
            return 1;
        }
        if (n == 0) {
            return 0;
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
            vBall.x += 0;
            vBall.y += _fibDigit;
        }
        if (counterFour == 1) {
            vBall.x += _fibDigit * -1;
            vBall.y += 0;
        }
        if (counterFour == 2) {
            vBall.x += 0;
            vBall.y += _fibDigit * -1;
        }
        if (counterFour == 3) {
            vBall.x += _fibDigit;
            vBall.y += 0;
        }
        xPositionsArray[_recursionLevel] = vBall.x;
        yPositionsArray[_recursionLevel] = vBall.y;
        console.log("count4: " + counterFour);
        console.log("_rec" + _recursionLevel);
        console.log("rec" + recursionLevel);
        console.log("_fib" + _fibDigit);
        console.log(vBall.x, vBall.y);
    }
    function createFibArray() {
        for (let i = 0; i < maxRecursion; i++) {
            fibonacciArray[i] = calculateSequence(i);
        }
        console.log(fibonacciArray);
    }
    function drawLine(_fibDigit, _recursionLevel) {
        crc2.beginPath();
        crc2.strokeStyle = "hsla(130, 82%, 42%, 0.47)";
        crc2.fillStyle = "hsla(130, 82%, 42%, 0.47)";
        crc2.lineWidth = startSize * (_fibDigit / 10);
        crc2.moveTo(xPositionsArray[_recursionLevel], yPositionsArray[_recursionLevel]);
        crc2.lineTo(xPositionsArray[_recursionLevel - 1], yPositionsArray[_recursionLevel - 1]);
        crc2.stroke();
    }
    function drawBall(_fibDigit, _recursionLevel) {
        crc2.beginPath();
        crc2.strokeStyle = "hsla(130, 82%, 62%, 0.87)";
        crc2.fillStyle = "hsla(130, 82%, 62%, 0.87)";
        crc2.arc(xPositionsArray[_recursionLevel], yPositionsArray[_recursionLevel], startSize * (_fibDigit / 30), 0 * Math.PI, 2 * Math.PI, null);
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.strokeStyle = "hsla(130, 82%, 42%, 0.47)";
        crc2.fillStyle = "hsla(130, 82%, 42%, 0.47)";
        crc2.rect(xPositionsArray[_recursionLevel] - _fibDigit / 2, yPositionsArray[_recursionLevel] - _fibDigit / 2, _fibDigit * 2, _fibDigit * 2);
        crc2.stroke();
    }
    function animate() {
        recursionLevel++;
        calculatePositions(fibonacciArray[recursionLevel], recursionLevel);
        drawLine(fibonacciArray[recursionLevel], recursionLevel);
        drawBall(fibonacciArray[recursionLevel], recursionLevel);
        console.log(fibonacciArray[recursionLevel]);
        console.log(recursionLevel);
        console.log(counterFour);
        if (recursionLevel < maxRecursion) {
            requestAnimationFrame(animate);
        }
    }
})(FibonacciRectSpiral || (FibonacciRectSpiral = {}));
//# sourceMappingURL=Main.js.map