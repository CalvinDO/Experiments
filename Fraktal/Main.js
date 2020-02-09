var CalvinFraktal;
(function (CalvinFraktal) {
    CalvinFraktal.nRecursionLevelMax = 6;
    CalvinFraktal.gradientFactor = 20;
    CalvinFraktal.internGradientFactor = 100;
    let nChildren = 5;
    window.addEventListener("load", init);
    function init(_event) {
        let canvas = document.querySelector("canvas");
        CalvinFraktal.crc2 = canvas.getContext("2d");
        drawBackground();
        CalvinFraktal.crc2.translate(canvas.width / 2, canvas.height / 2);
        let radius = canvas.width / 5;
        let ball = new CalvinFraktal.Ball(0, 0, radius, 0, 100);
        ball.draw();
        ball.createChildren(nChildren);
    }
    function drawBackground() {
        CalvinFraktal.crc2.fillStyle = "orange";
        CalvinFraktal.crc2.fillRect(0, 0, CalvinFraktal.crc2.canvas.width, CalvinFraktal.crc2.canvas.height);
    }
})(CalvinFraktal || (CalvinFraktal = {}));
//# sourceMappingURL=Main.js.map