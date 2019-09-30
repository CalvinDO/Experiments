namespace Wingsuit {
    let crc2: CanvasRenderingContext2D;

    const timeSliceInMS: number = 1;

    import Vector2D = Vector.Vector2D;

    window.addEventListener("load", init);

    //p = pull, s = speed, r= result

    let pVector: Vector2D = new Vector2D(0);
    let sVector: Vector2D = new Vector2D(1, 2);
    let rVector: Vector2D = new Vector2D(1, 2);



    let i: number = 0;
    i = i + 1;


    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        crc2.translate(canvas.width / 2, canvas.height / 2);
    }


    function animate(): void {
        window.setTimeout(animate, timeSliceInMS);

    }


}