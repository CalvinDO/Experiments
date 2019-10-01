namespace Wingsuit {
    let crc2: CanvasRenderingContext2D;

    const timeSliceInMS: number = 1;
    const box = document.querySelector('.Box');
    // Initial position
    let position = 0;


    import Vector2D = Vector.Vector2D;


    window.addEventListener("load", init);

    //p = pull, s = speed, r= result

    let pVector: Vector2D = new Vector2D(0, 0);
    let sVector: Vector2D = new Vector2D(0, 0);
    let rVector: Vector2D = new Vector2D(0, 0);

    let i: number = 0;


    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        crc2.translate(canvas.width / 2, canvas.height / 2);

        animate();
        drawBackground(canvas.width / -2, canvas.height / -2, canvas.width, canvas.height);
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
        crc2.arc(0, 0, _radius, 0 * Math.PI, 2 * Math.PI, null);
        crc2.stroke();
        crc2.fill()
    }

    /*
    function drawPointer(_radius: number){
        crc2.beginPath();
        crc2.strokeStyle = "green";
        crc2.arc(0, 0, _radius, 0 * Math.PI, 2 * Math.PI, null);
        crc2.stroke( );
        crc2.fill();
    }
   
    function drawPull(_startX: number, _startY: number, _endX: number, _endY: number, _colorAngle: number, _width: number): void {
    crc2.beginPath();
    crc2.strokeStyle = "black";
    crc2.lineWidth = _width;
    crc2.moveTo(_startX, _startY);
    crc2.lineTo(_endX, _endY);
    crc2.stroke();
    }
 
    function moveBall() {
    }
 
    */


    function animate() {

        i += 1;
        console.log(i);

        requestAnimationFrame(animate);
    }
}