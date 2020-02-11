namespace FraktalAnimation {
    import V2 = Vector.Vector2D;
    export let crc2: CanvasRenderingContext2D;

    let childrenAmount: number;
    let radius: number;
    let startRadius: number;
    export let sizeFactor: number;
    export let gradientFactor: number;
    export let internGradientFactor: number;
    export let maxRecursionLevel: number;
    let backgroundColor: string = "";
    let zoomSpeed: number;
    let zoomDepth: number;
    let spreadFactor: number;
    export let currentSpread: number = 0;

    let frame: number = 0;
    let zoomIn: boolean = true;
    let rotationSpeed: number;
    export let rotationAngle: number = 0;

    window.addEventListener("load", init);
    document.addEventListener("input", update);

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        drawBackground();
        crc2.translate(canvas.width / 2, canvas.height / 2);
        update(null);

        
    }

    function update(_event: Event): void {
        let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");

        childrenAmount = parseInt(inputs[0].value);
        radius = parseFloat(inputs[1].value);
        startRadius = radius;

        sizeFactor = parseFloat(inputs[2].value);
        gradientFactor = parseFloat(inputs[3].value);
        internGradientFactor = parseFloat(inputs[4].value);
        maxRecursionLevel = parseInt(inputs[5].value);
        backgroundColor = inputs[6].value;
        zoomSpeed = parseInt(inputs[8].value);
        zoomDepth = parseInt(inputs[9].value);
        rotationSpeed = parseFloat(inputs[10].value);
        spreadFactor = parseFloat(inputs[11].value);
        currentSpread = spreadFactor;
        crc2.clearRect(-crc2.canvas.width, -crc2.canvas.height, crc2.canvas.width, crc2.canvas.height);
        drawBackground();

        let ball: Ball = new Ball(0, 0, radius, 0, 0);
        ball.draw();
        ball.createChildren(childrenAmount);

        if (inputs[7].checked) {
            animate();
        }
    }


    function drawBackground(): void {
        crc2.fillStyle = backgroundColor;
        crc2.fillRect(-crc2.canvas.width, -crc2.canvas.height, crc2.canvas.width * 2, crc2.canvas.height * 2);
    }

    function animate() {
        console.log("" + Math.random() * 3581321);
        frame++;
        radius = startRadius + zoomDepth + Math.sin(frame / zoomSpeed * 2 * Math.PI) * zoomDepth;
        rotationAngle = -Math.sin(frame / zoomSpeed * 2 * Math.PI) * rotationSpeed / 20;
        gradientFactor = Math.cos(frame / zoomSpeed * 2 * Math.PI) * 10;
        internGradientFactor = Math.sin(frame / zoomSpeed * 2 * Math.PI) * 20;
        currentSpread = -Math.cos(frame / zoomSpeed / 10 * 2 * Math.PI) * 8;


        crc2.clearRect(-crc2.canvas.width, -crc2.canvas.height, crc2.canvas.width, crc2.canvas.height);
        drawBackground();

        let ball: Ball = new Ball(0, 0, radius, 0, 0);
        ball.draw();
        ball.createChildren(childrenAmount);

        requestAnimationFrame(animate);
    }


}