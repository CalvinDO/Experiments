namespace UXD {
    import V2 = Vector.Vector2D;

    let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let img: HTMLImageElement;
    let body: HTMLBodyElement;

    let imgData: Uint8ClampedArray;

    let pixelData: ImageData;
    let pixel: Uint8ClampedArray;

    let x: number;
    let y: number;
    let cosC: number;

    let phi1: number = 0;
    let theta0: number = 0;

    let inputPhi: number;
    let inputTheta: number;


    window.addEventListener("load", init);

    function init(_event: Event): void {
        body = document.querySelector("body");

        generateImage();
        generateCanvas();

        drawAndLoadImage();
        //drawTestDot();
        console.log(canvas);
    }

    function generateCanvas(): void {
        canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        crc2 = canvas.getContext("2d");

        pixelData = crc2.createImageData(1, 1);
        pixel = pixelData.data;
        body.append(canvas);
    }

    function generateImage(): void {
        img = document.createElement("img");
        img.setAttribute("src", "testEquirectangular.jpg");
        img.setAttribute("alt", "test");
    }

    function drawAndLoadImage(): void {
        crc2.drawImage(img, 0, 0);
        imgData = crc2.getImageData(0, 0, img.width, img.height).data;
        //crc2.clearRect(0, 0, canvas.width, canvas.height);

        let xPos: number;
        let yPos: number;
        console.log(imgData);
        for (let index: number = 0; index < imgData.length / 1000; index += 4) {
            xPos = (index / 4) % img.width;
            yPos = (index / 4) / img.width;
            drawPixel(xPos, yPos, imgData[index], imgData[index + 1], imgData[index + 2], imgData[index + 3]);
        }
    }

    function drawPixel(_x: number, _y: number, _r: number, _g: number, _b: number, _a: number): void {
        pixel[0] = _r;
        pixel[1] = _g;
        pixel[2] = _b;
        pixel[3] = _a;
        crc2.putImageData(pixelData, _x, _y);
    }

    function drawTestDot(): void {
        crc2.beginPath();
        crc2.fillStyle = "blue";
        crc2.strokeStyle = "red";
        crc2.arc(100, 100, 30, 0 * Math.PI, 2 * Math.PI, null);
        crc2.stroke();
        crc2.fill();
    }


    function calcFromSpherical(_phi: number, _theta: number): V2 {
        cosC = Math.sin(phi1) * Math.sin(_phi) + Math.cos(phi1) * Math.cos(_phi) * Math.cos(_theta - theta0);

        x = (Math.cos(_phi) * Math.sin(_theta - theta0)) / cosC;
        y = (Math.cos(phi1) * Math.sin(_phi) - Math.sin(phi1) * Math.cos(_phi) * Math.cos(_theta - theta0)) / cosC;

        return new V2(x, y);
    }

    function toRad(_angleDeg: number): number {
        return _angleDeg * (Math.PI / 180);
    }
}