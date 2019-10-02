namespace Gravity {
    let crc2: CanvasRenderingContext2D;

    import Vector2D = Vector.Vector2D;
    let canvas: HTMLCanvasElement;
    const timeSliceInMS: number = 1;


    window.addEventListener("load", init);



    function init(_event: Event): void {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        crc2.translate(canvas.width / 2, canvas.height / 2);

        animate();
    }

    drawBackground(canvas.width / -2, canvas.height / -2, canvas.width, canvas.height);

    function drawFixed(_radius: number) {
        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.fillStyle = "black";
        crc2.arc(0, 0, _radius, 0 * Math.PI, 2 * Math.PI, null);
        crc2.stroke();
        crc2.fill();
    }

    function drawBackground(_x: number, _y: number, _w: number, _h: number) {
        crc2.beginPath();
        crc2.strokeStyle = "rgb(102, 255, 255)";
        crc2.fillStyle = "rgb(102, 255, 255)";
        crc2.rect(_x, _y, _w, _h);
        crc2.stroke();
        crc2.fill();
    }

    function animate() {

        drawBackground(canvas.width / -2, canvas.height / -2, canvas.width, canvas.height);
        drawFixed(50);
        requestAnimationFrame(animate);
    }

}