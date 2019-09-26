namespace CalvinFraktal {
    import V2 = Vector.Vector2D;
    export let crc2: CanvasRenderingContext2D;
    export const nRecursionLevelMax: number = 2;
    let nChildren: number = 2;
    let calvinsBall: Ball[] = [];
    const timeSliceInMS: number = 1;

    window.addEventListener("load", init);


 
    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");  

        let radius: number = canvas.width / 5;


        for (let i: number = 0; i < 30; i++) {
            let ball: Ball = new Ball(canvas.width / (i+2), 1000+canvas.height / (i+1), radius-150*i, 0, 0);
            //ball.speed.setXY(0, 0);
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
    

    /*function animate(): void {
        window.setTimeout(animate, timeSliceInMS);
        for (let i: number = 0; i < calvinsBall.length; i++) {
            let ball: Ball = calvinsBall[i];
            ball.move();
            ball.draw();
        }


    } */

}