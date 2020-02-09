namespace CalvinFraktal {
    import V2 = Vector.Vector2D;
    export let crc2: CanvasRenderingContext2D;
    export const nRecursionLevelMax: number = 6;
    export const gradientFactor: number = 20;
    export const internGradientFactor: number = 100;
    let nChildren: number = 5;

    window.addEventListener("load", init);

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        drawBackground();
        crc2.translate(canvas.width / 2, canvas.height / 2);
        let radius: number = canvas.width / 5;
        let ball: Ball = new Ball(0, 0, radius, 0, 100);
        ball.draw();
        ball.createChildren(nChildren);

    }

    function drawBackground(): void {
        crc2.fillStyle = "orange";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
}