namespace Wingsuit {
    let crc2: CanvasRenderingContext2D;

    const timeSliceInMS: number = 1;
    const box = document.querySelector('.Box');
    // Initial position
    let position = 0;
    let gravity = 5;

    import Vector2D = Vector.Vector2D;


    window.addEventListener("load", init);
    window.addEventListener("mousemove", trackMouseMove);


    let vPull: Vector2D = new Vector2D(0, 0);
    let vSpeed: Vector2D = new Vector2D(0, 0);
    let vResult: Vector2D = new Vector2D(0, 0);
    let vBall: Vector2D = new Vector2D(0, 0);
    let vPointer: Vector2D = new Vector2D(0, 0);
    let vGravity: Vector2D = new Vector2D(0, gravity);
    let vFriction: Vector2D = new Vector2D(0, 0);



    let xMouse: number = 0;
    let yMouse: number = 0;


    let i: number = 0;
    let canvas: HTMLCanvasElement;




    function init(_event: Event): void {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        crc2.translate(canvas.width / 2, canvas.height / 2);

        animate();
    }

    function trackMouseMove(_event: MouseEvent): void {
        // console.log(_event.clientX, _event.clientY);
        xMouse = _event.clientX - canvas.width / 2;
        yMouse = _event.clientY - canvas.height / 2;
    }


    function drawBackground(_x: number, _y: number, _w: number, _h: number) {
        crc2.beginPath();

        let colorAngle: number = 10;
        crc2.strokeStyle = "rgb(102, 255, 255)";
        crc2.fillStyle = "rgb(102, 255, 255)";
        crc2.rect(_x, _y, _w, _h)
        crc2.stroke();
        crc2.fill()
        crc2.fillStyle
    }

    function drawBall(_radius: number) {
        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.fillStyle = "black";
        crc2.arc(vBall.x, vBall.y, _radius, 0 * Math.PI, 2 * Math.PI, null);
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

    function moveBall() {

        vPointer.x = xMouse;
        vPointer.y = yMouse;

        vPull = vBall.getDiff(vPointer);
        vPull.x *= -1 / 100;
        vPull.y *= -1 / 100;

        vSpeed.add(vGravity);
        vSpeed.add(vPull);
        
        vFriction.x= vSpeed.x/50;
        vFriction.y= vSpeed.y/50;
        
        vSpeed.subtract(vFriction);

        vBall.add(vSpeed);

        console.log(vPointer, vPull, vSpeed, vBall, vFriction);
    }




    function drawPull(_width: number): void {
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
}