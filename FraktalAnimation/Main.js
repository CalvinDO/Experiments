var FraktalAnimation;
(function (FraktalAnimation) {
    let childrenAmount;
    let radius;
    let startRadius;
    let backgroundColor = "";
    let zoomSpeed;
    let zoomDepth;
    let spreadFactor;
    FraktalAnimation.currentSpread = 0;
    let frame = 0;
    let zoomIn = true;
    let rotationSpeed;
    FraktalAnimation.rotationAngle = 0;
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
        startRadius = radius;
        FraktalAnimation.sizeFactor = parseFloat(inputs[2].value);
        FraktalAnimation.gradientFactor = parseFloat(inputs[3].value);
        FraktalAnimation.internGradientFactor = parseFloat(inputs[4].value);
        FraktalAnimation.maxRecursionLevel = parseInt(inputs[5].value);
        backgroundColor = inputs[6].value;
        zoomSpeed = parseInt(inputs[8].value);
        zoomDepth = parseInt(inputs[9].value);
        rotationSpeed = parseFloat(inputs[10].value);
        spreadFactor = parseFloat(inputs[11].value);
        FraktalAnimation.currentSpread = spreadFactor;
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
        console.log("" + Math.random() * 3581321);
        frame++;
        radius = startRadius + zoomDepth + Math.sin(frame / zoomSpeed * 2 * Math.PI) * zoomDepth;
        FraktalAnimation.rotationAngle = -Math.sin(frame / zoomSpeed * 2 * Math.PI) * rotationSpeed / 20;
        FraktalAnimation.gradientFactor = Math.cos(frame / zoomSpeed * 2 * Math.PI) * 10;
        FraktalAnimation.internGradientFactor = Math.sin(frame / zoomSpeed * 2 * Math.PI) * 20;
        FraktalAnimation.currentSpread = -Math.cos(frame / zoomSpeed / 10 * 2 * Math.PI) * 8;
        FraktalAnimation.crc2.clearRect(-FraktalAnimation.crc2.canvas.width, -FraktalAnimation.crc2.canvas.height, FraktalAnimation.crc2.canvas.width, FraktalAnimation.crc2.canvas.height);
        drawBackground();
        let ball = new FraktalAnimation.Ball(0, 0, radius, 0, 0);
        ball.draw();
        ball.createChildren(childrenAmount);
        requestAnimationFrame(animate);
    }
})(FraktalAnimation || (FraktalAnimation = {}));
//# sourceMappingURL=Main.js.map