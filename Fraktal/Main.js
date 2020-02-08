var CalvinFraktal;
(function (CalvinFraktal) {
    CalvinFraktal.nRecursionLevelMax = 2;
    let nChildren = 2;
    let calvinsBall = [];
    window.addEventListener("load", init);
    function init(_event) {
        let canvas = document.querySelector("canvas");
        CalvinFraktal.crc2 = canvas.getContext("2d");
        let radius = canvas.width / 5;
        let ball = new CalvinFraktal.Ball(canvas.width / 2, canvas.height / 2, radius, 0, 0);
        for (let i = 0; i < 3; i++) {
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
})(CalvinFraktal || (CalvinFraktal = {}));
//# sourceMappingURL=Main.js.map