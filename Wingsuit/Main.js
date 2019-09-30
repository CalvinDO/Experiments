var Wingsuit;
(function (Wingsuit) {
    let crc2;
    const timeSliceInMS = 1;
    const box = document.querySelector('.Box');
    // Initial position
    let position = 0;
    var Vector2D = Vector.Vector2D;
    window.addEventListener("load", init);
    //p = pull, s = speed, r= result
    let pVector = new Vector2D(0, 0);
    let sVector = new Vector2D(0, 0);
    let rVector = new Vector2D(0, 0);
    let i = 0;
    function init(_event) {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        crc2.translate(canvas.width / 2, canvas.height / 2);
        animate();
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
            crc2.arc(0, 0, _radius, 0 * Math.PI, 2 * Math.PI, null);
            crc2.stroke();
            crc2.fill();
        }
        /*function drawPointer(_radius: number){
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
            position += 1;
            box.style.transform = `translateX(${position}px)`;
            // Start next frame
            requestAnimationFrame(animate);
        }
    }
})(Wingsuit || (Wingsuit = {}));
//# sourceMappingURL=Main.js.map