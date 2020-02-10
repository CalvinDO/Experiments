var FraktalAnimation;
(function (FraktalAnimation) {
    let childrenAmount;
    let radius;
    let backgroundColor = "";
    let frame = 0;
    window.addEventListener("load", init);
    document.addEventListener("input", update);
    function init(_event) {
        let canvas = document.querySelector("canvas");
        FraktalAnimation.crc2 = canvas.getContext("2d");
        drawBackground();
        FraktalAnimation.crc2.translate(canvas.width / 2, canvas.height / 2);
        update(null);
    }
    function update(_event) {
        let inputs = document.querySelectorAll("input");
        childrenAmount = parseInt(inputs[0].value);
        radius = parseFloat(inputs[1].value);
        FraktalAnimation.sizeFactor = parseFloat(inputs[2].value);
        FraktalAnimation.gradientFactor = parseFloat(inputs[3].value);
        FraktalAnimation.internGradientFactor = parseFloat(inputs[4].value);
        FraktalAnimation.maxRecursionLevel = parseInt(inputs[5].value);
        backgroundColor = inputs[6].value;
        FraktalAnimation.crc2.clearRect(-FraktalAnimation.crc2.canvas.width, -FraktalAnimation.crc2.canvas.height, FraktalAnimation.crc2.canvas.width, FraktalAnimation.crc2.canvas.height);
        drawBackground();
        let ball = new FraktalAnimation.Ball(0, 0, radius, 0, 0);
        ball.draw();
        ball.createChildren(childrenAmount);
        if (inputs[7].checked) {
            animate();
        }
    }
    function drawBackground() {
        FraktalAnimation.crc2.fillStyle = backgroundColor;
        FraktalAnimation.crc2.fillRect(-FraktalAnimation.crc2.canvas.width, -FraktalAnimation.crc2.canvas.height, FraktalAnimation.crc2.canvas.width * 2, FraktalAnimation.crc2.canvas.height * 2);
    }
    function animate() {
        frame++;
        FraktalAnimation.gradientFactor =
            FraktalAnimation.crc2.clearRect(-FraktalAnimation.crc2.canvas.width, -FraktalAnimation.crc2.canvas.height, FraktalAnimation.crc2.canvas.width, FraktalAnimation.crc2.canvas.height);
        drawBackground();
        let ball = new FraktalAnimation.Ball(0, 0, radius, 0, 0);
        ball.draw();
        ball.createChildren(childrenAmount);
        requestAnimationFrame(animate);
    }
})(FraktalAnimation || (FraktalAnimation = {}));
//# sourceMappingURL=Main.js.map