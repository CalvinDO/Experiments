var Wingsuit;
(function (Wingsuit) {
    let crc2;
    const timeSliceInMS = 1;
    const box = document.querySelector('.Box');
    // Initial position
    let position = 0;
    let gravity = 5;
    var Vector2D = Vector.Vector2D;
    window.addEventListener("load", init);
    window.addEventListener("mousemove", trackMouseMove);
    let vPull = new Vector2D(0, 0);
    let vSpeed = new Vector2D(0, 0);
    let vResult = new Vector2D(0, 0);
    let vBall = new Vector2D(0, 0);
    let vPointer = new Vector2D(0, 0);
    let vGravity = new Vector2D(0, gravity);
    let vFriction = new Vector2D(0, 0);
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
    function drawBall(_radius) {
        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.fillStyle = "black";
        crc2.arc(vBall.x, vBall.y, _radius, 0 * Math.PI, 2 * Math.PI, null);
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
        vPointer.x = xMouse;
        vPointer.y = yMouse;
        vPull = vBall.getDiff(vPointer);
        vPull.x *= -1 / 100;
        vPull.y *= -1 / 100;
        vSpeed.add(vGravity);
        vSpeed.add(vPull);
        vFriction.x = vSpeed.x / 50;
        vFriction.y = vSpeed.y / 50;
        vSpeed.subtract(vFriction);
        vBall.add(vSpeed);
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
    function animate() {
        drawBackground(canvas.width / -2, canvas.height / -2, canvas.width, canvas.height);
        drawPointer(25);
        moveBall();
        drawBall(50);
        drawPull(5);
        requestAnimationFrame(animate);
    }
})(Wingsuit || (Wingsuit = {}));
//# sourceMappingURL=Main.js.map