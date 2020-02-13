var Wingsuit;
(function (Wingsuit) {
    let crc2;
    const timeSliceInMS = 1;
    // Initial position
    let position = 0;
    let gravity = 3;
    let gravity2 = 3;
    var Vector2D = Vector.Vector2D;
    window.addEventListener("load", init);
    window.addEventListener("mousemove", trackMouseMove);
    let vPull = new Vector2D(0, 0);
    let vPull2 = new Vector2D(0, 0);
    let vPull3 = new Vector2D(0, 0);
    let vSpeed = new Vector2D(0, 0);
    let vSpeed2 = new Vector2D(0, 0);
    //let vResult: Vector2D = new Vector2D(0, 0);
    let vBall = new Vector2D(0, 0);
    let vBall2 = new Vector2D(0, 0);
    let vPointer = new Vector2D(0, 0);
    let vGravity = new Vector2D(0, gravity);
    let vGravity2 = new Vector2D(0, gravity);
    let vFriction = new Vector2D(0, 0);
    let vFriction2 = new Vector2D(0, 0);
    let xMouse = 0;
    let yMouse = 0;
    let i = 0;
    let canvas;
    function init(_event) {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        crc2.translate(canvas.width / 2, canvas.height / 2);
        animate();
    }
    function trackMouseMove(_event) {
        // console.log(_event.clientX, _event.clientY);
        xMouse = _event.clientX - canvas.width / 2;
        yMouse = _event.clientY - canvas.height / 2;
        vPointer.x = xMouse;
        vPointer.y = yMouse;
    }
    function drawBackground(_x, _y, _w, _h) {
        crc2.beginPath();
        crc2.strokeStyle = "rgb(102, 255, 255)";
        crc2.fillStyle = "rgb(102, 255, 255)";
        crc2.rect(_x, _y, _w, _h);
        crc2.stroke();
        crc2.fill();
    }
    function drawBall(_radius) {
        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.fillStyle = "black";
        crc2.arc(vBall.x, vBall.y, _radius, 0 * Math.PI, 2 * Math.PI, null);
        crc2.stroke();
        crc2.fill();
    }
    function drawBall2(_radius) {
        crc2.beginPath();
        crc2.strokeStyle = "red";
        crc2.fillStyle = "red";
        crc2.arc(vBall2.x, vBall2.y, _radius, 0 * Math.PI, 2 * Math.PI, null);
        crc2.stroke();
        crc2.fill();
    }
    function drawPointer(_radius) {
        crc2.beginPath();
        crc2.strokeStyle = "green";
        crc2.fillStyle = "green";
        crc2.arc(xMouse, yMouse, _radius, 0 * Math.PI, 2 * Math.PI, null);
        crc2.stroke();
        crc2.fill();
    }
    function moveBall() {
        vPull = vBall.getDiff(vPointer);
        vPull.x *= -1 / 100;
        vPull.y *= -1 / 100;
        vPull2 = vBall2.getDiff(vBall);
        vPull2.x *= -1 / 100;
        vPull2.y *= -1 / 100;
        vPull3.x = vPull2.x / -1;
        vPull3.y = vPull2.y / -1;
        vSpeed.add(vGravity);
        vSpeed.add(vPull);
        vSpeed.add(vPull3);
        vSpeed2.add(vGravity2);
        vSpeed2.add(vPull2);
        vFriction.x = vSpeed.x / 50;
        vFriction.y = vSpeed.y / 50;
        vFriction2.x = vSpeed2.x / 50;
        vFriction2.y = vSpeed2.y / 50;
        vSpeed.subtract(vFriction);
        vSpeed2.subtract(vFriction2);
        vBall.add(vSpeed);
        vBall2.add(vSpeed2);
        console.log(vPointer, vPull, vSpeed, vBall, vFriction);
    }
    function drawPull(_width) {
        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.lineWidth = _width;
        crc2.moveTo(vBall.x, vBall.y);
        crc2.lineTo(vPointer.x, vPointer.y);
        crc2.stroke();
    }
    function drawPull2(_width) {
        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.lineWidth = _width;
        crc2.moveTo(vBall2.x, vBall2.y);
        crc2.lineTo(vBall.x, vBall.y);
        crc2.stroke();
    }
    function animate() {
        drawBackground(-canvas.width, -canvas.height, canvas.width, canvas.height);
        drawPointer(25);
        moveBall();
        drawBall(50);
        drawBall2(40);
        drawPull(5);
        drawPull2(5);
        requestAnimationFrame(animate);
    }
})(Wingsuit || (Wingsuit = {}));
//# sourceMappingURL=Main.js.map