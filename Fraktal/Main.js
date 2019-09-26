var CalvinFraktal;
(function (CalvinFraktal) {
    CalvinFraktal.nRecursionLevelMax = 2;
    let nChildren = 2;
    let calvinsBall = [];
    const timeSliceInMS = 1;
    window.addEventListener("load", init);
    function init(_event) {
        let canvas = document.querySelector("canvas");
        CalvinFraktal.crc2 = canvas.getContext("2d");
        let radius = canvas.width / 5;
        for (let i = 0; i < 30; i++) {
            let ball = new CalvinFraktal.Ball(canvas.width / (i + 2), 1000 + canvas.height / (i + 1), radius - 150 * i, 0, 0);
            //ball.speed.setXY(0, 0);
            ball.draw();
            calvinsBall.push(ball);
            ball.createChildren(nChildren);
        }
        console.log(calvinsBall);
    }
    function drawBackground() {
        CalvinFraktal.crc2.fillStyle = "black";
        CalvinFraktal.crc2.fillRect(0, 0, CalvinFraktal.crc2.canvas.width, CalvinFraktal.crc2.canvas.height);
    }
    /*function animate(): void {
        window.setTimeout(animate, timeSliceInMS);
        for (let i: number = 0; i < calvinsBall.length; i++) {
            let ball: Ball = calvinsBall[i];
            ball.move();
            ball.draw();
        }


    } */
})(CalvinFraktal || (CalvinFraktal = {}));
//# sourceMappingURL=Main.js.map