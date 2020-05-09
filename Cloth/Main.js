var Cloth;
(function (Cloth) {
    const timeSliceInMS = 1;
    var Vector2D = Vector.Vector2D;
    let offset;
    Cloth.gravity = new Vector2D(0, 0);
    let animation = false;
    window.addEventListener("load", init);
    // window.addEventListener("msousemove", trackMouseMove);
    document.addEventListener("input", handleInput);
    let balls = [];
    // let initialNeighbours: Ball[];
    //let xMouse: number = 0;
    // let yMouse: number = 0;
    let canvas;
    function init(_event) {
        canvas = document.querySelector("canvas");
        Cloth.crc2 = canvas.getContext("2d");
    }
    function trackMouseMove(_event) {
        // console.log(_event.clientX, _event.clientY);
        //xMouse = _event.clientX - canvas.width / 2;
        //yMouse = _event.clientY - canvas.height / 2;
        // vPointer.x = xMouse;
        //vPointer.y = yMouse;
    }
    function drawBackground(_x, _y, _w, _h) {
        Cloth.crc2.beginPath();
        Cloth.crc2.strokeStyle = "rgb(102, 255, 255)";
        Cloth.crc2.fillStyle = "rgb(102, 255, 255)";
        Cloth.crc2.rect(_x, _y, _w, _h);
        Cloth.crc2.stroke();
        Cloth.crc2.fill();
        Cloth.crc2.strokeStyle = "rgb(0,0,0)";
        Cloth.crc2.fillStyle = "rgb(0,0,0)";
    }
    function createBalls(_amountX, _amountY) {
        let tempBall;
        let fixed = false;
        for (let xIndex = 0; xIndex < _amountX; xIndex++) {
            let ballsCol = [];
            for (let yIndex = 0; yIndex < _amountY; yIndex++) {
                if (xIndex == 0 || xIndex == _amountX - 1) {
                    if (yIndex == 0 || yIndex == _amountY - 1) {
                        fixed = true;
                    }
                    else {
                        fixed = false;
                    }
                }
                else {
                    fixed = false;
                }
                tempBall = new Cloth.Ball(xIndex * offset, yIndex * offset, _amountX / canvas.width * (offset * 10), fixed);
                ballsCol.push(tempBall);
                balls.push(ballsCol);
            }
        }
    }
    function setNeighbours() {
        let offsets = [[0, -1], [1, 0], [0, -1], [-1, 0]];
        for (let xIndex = 0; xIndex < balls.length; xIndex++) {
            let ballsCol = [];
            for (let yIndex = 0; yIndex < balls[0].length; yIndex++) {
                let neighbours = [];
                for (let offset of offsets) {
                    try {
                        let neighbour = balls[xIndex + offset[0]][yIndex + offset[1]];
                        neighbours.push(neighbour);
                    }
                    catch (_error) {
                    }
                }
                //console.log("worked" + xIndex + "y: " + yIndex);
                balls[xIndex][yIndex].setNeighbours(neighbours);
            }
        }
    }
    function calculateBalls() {
        for (let xIndex = 0; xIndex < balls.length; xIndex++) {
            for (let yIndex = 0; yIndex < balls[0].length; yIndex++) {
                balls[xIndex][yIndex].calculate();
            }
        }
    }
    function moveBalls() {
        for (let xIndex = 0; xIndex < balls.length; xIndex++) {
            for (let yIndex = 0; yIndex < balls[0].length; yIndex++) {
                balls[xIndex][yIndex].move();
            }
        }
    }
    function drawBalls() {
        for (let xIndex = 0; xIndex < balls.length; xIndex++) {
            for (let yIndex = 0; yIndex < balls[0].length; yIndex++) {
                //  console.log(balls[xIndex][yIndex].position);
                if (balls[xIndex][yIndex] == null) {
                    console.log("doesn't exist");
                }
                balls[xIndex][yIndex].draw();
            }
        }
    }
    function handleInput(_event) {
        let inputs = document.querySelectorAll("input");
        offset = parseFloat(inputs[0].value);
        Cloth.gravity.setXY(0, parseFloat(inputs[2].value));
        balls = [];
        createBalls(30, 30);
        setNeighbours();
        if (_event.target == inputs[1]) {
            animation = inputs[1].checked;
            if (animation)
                animate();
        }
    }
    function animate() {
        console.log("animate");
        drawBackground(0, 0, canvas.width, canvas.height);
        calculateBalls();
        moveBalls();
        drawBalls();
        //drawBalls(10);
        //drawPointer(7);
        if (animation)
            requestAnimationFrame(animate);
    }
    /*
       function drawBall(_radius: number) {
           crc2.beginPath();
           crc2.strokeStyle = "black";
           crc2.fillStyle = "black";
           crc2.arc(vBall.x, vBall.y, _radius, 0 * Math.PI, 2 * Math.PI, null);
           crc2.stroke();
           crc2.fill()
       }
   
      
       function drawBall2(_radius: number) {
           crc2.beginPath();
           crc2.strokeStyle = "red";
           crc2.fillStyle = "red";
           crc2.arc(vBall2.x, vBall2.y, _radius, 0 * Math.PI, 2 * Math.PI, null);
           crc2.stroke();
           crc2.fill()
       }
   
       function drawPointer(_radius: number) {
           crc2.beginPath();
           crc2.strokeStyle = "green";
           crc2.fillStyle = "green";
           crc2.arc(xMouse, yMouse, _radius, 0 * Math.PI, 2 * Math.PI, null);
           crc2.stroke();
           crc2.fill();
       }
   
        function drawPull(_width: number): void {
           crc2.beginPath();
           crc2.strokeStyle = "black";
           crc2.lineWidth = _width;
           crc2.moveTo(vBall.x, vBall.y);
           crc2.lineTo(vPointer.x, vPointer.y);
           crc2.stroke();
       }
       function drawPull2(_width: number): void {
           crc2.beginPath();
           crc2.strokeStyle = "black";
           crc2.lineWidth = _width;
           crc2.moveTo(vBall2.x, vBall2.y);
           crc2.lineTo(vBall.x, vBall.y);
           crc2.stroke();
       }
   */
})(Cloth || (Cloth = {}));
//# sourceMappingURL=Main.js.map