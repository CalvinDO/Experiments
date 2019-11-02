namespace Fibonacci {
    let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    window.addEventListener("load", init);


    import Vector2D = Vector.Vector2D;

    let fibonacciArray = new Array();
    let vAccelaration: Vector2D = new Vector2D(0, 0);
    let vSpeed: Vector2D = new Vector2D(0, 0);
    let vBall: Vector2D = new Vector2D(0, 0);
    let maxRecursion: number = 35;
    let startSize: number = 2000;
    let recursionLevel: number = 0;
    let frame: number = 0;

    let vLine: Vector2D = new Vector2D(0, 0);
    let counterFour: number = 0;


    function init(_event: Event): void {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        crc2.translate(canvas.width / 2, canvas.height / 2);
        drawBackground(canvas.width / -2, canvas.height / -2, canvas.width, canvas.height);
        createFibArray();
        animate();
    }


    function drawBackground(_x: number, _y: number, _w: number, _h: number) {
        crc2.beginPath();
        crc2.strokeStyle = "hsla(328, 82%, 42%, 1)";
        crc2.fillStyle = "hsla(328, 82%, 42%, 1)";
        crc2.rect(_x, _y, _w, _h)
        crc2.stroke();
        crc2.fill()
    }


    function calculateSequence(n): number {
        if (n == 0 || n == 1) {
            return 1;
        } else {
            return calculateSequence(n - 1) + calculateSequence(n - 2);
        }
    }

    function calculatePositions(_fibDigit: number, _recursionLevel: number) {

        if (counterFour < 4) {
            counterFour++;
        } else counterFour = 0;



        if (counterFour == 0) {
            vLine.x = 0;
            vLine.y = _fibDigit;
        }
        if (counterFour == 1) {
            vLine.x = _fibDigit *-1 ;
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

    function drawLine(_fibDigit: number) {
        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.lineWidth = startSize / (_fibDigit);
        crc2.moveTo(vBall.x, vBall.y);
        crc2.lineTo(vLine.x, vLine.y);
        crc2.stroke();
    }


    function drawBall(_fibDigit: number) {
        crc2.beginPath();
        crc2.strokeStyle = "hsla(130, 82%, 42%, 0.47)";
        crc2.fillStyle = "hsla(130, 82%, 42%, 0.47)";
        crc2.arc(vBall.x, vBall.y, startSize / (_fibDigit*10), 0 * Math.PI, 2 * Math.PI, null);
        crc2.stroke();
        crc2.fill()
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
}