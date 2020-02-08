namespace CalvinFraktal {
    import V2 = Vector.Vector2D;
    export let crc2: CanvasRenderingContext2D;
    export const nRecursionLevelMax: number = 2;
    let nChildren: number = 2;
    let calvinsBall: Ball[] = [];

    window.addEventListener("load", init);

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");  

        let radius: number = canvas.width / 5;

        let ball: Ball = new Ball(canvas.width / 2, canvas.height / 2, radius, 0, 0);
        for (let i: number = 0; i < 3; i++) {
            ball.draw();
            calvinsBall.push(ball);
            ball.createChildren(nChildren);
        }
        console.log(calvinsBall);
    }

    function drawBackground(): void {
        crc2.fillStyle = "black";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
}