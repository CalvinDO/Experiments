namespace CalvinFraktal {
    import V2 = Vector.Vector2D;
    export let crc2: CanvasRenderingContext2D;

    let childrenAmount: number;
    let radius: number;
    export let sizeFactor: number;
    export let gradientFactor: number;
    export let internGradientFactor: number;
    export let maxRecursionLevel: number;

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
        sizeFactor= parseFloat(inputs[2].value);
        gradientFactor = parseFloat(inputs[3].value);
        internGradientFactor = parseFloat(inputs[4].value);
        maxRecursionLevel = parseInt(inputs[5].value);

        crc2.clearRect(-crc2.canvas.width, -crc2.canvas.height, crc2.canvas.width, crc2.canvas.height);
        drawBackground();

        let ball: Ball = new Ball(0, 0, radius, 0, 100);
        ball.draw();
        ball.createChildren(childrenAmount);
    }


    function drawBackground(): void {
        crc2.fillStyle = "orange";
        crc2.fillRect(-crc2.canvas.width, -crc2.canvas.height, crc2.canvas.width, crc2.canvas.height);
    }
}