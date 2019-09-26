namespace Cardioids {
    let crc2: CanvasRenderingContext2D;

    window.addEventListener("load", init);
    document.addEventListener("input", update);

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        crc2.translate(canvas.width / 2, canvas.height / 2);
        // let multiplicationInput: number = parseFloat(prompt("Enter multiplication number"));
        // let resolutionInput: number = parseFloat(prompt("Enter resolution number"));
        update(null);
    }


    function update(_event: Event): void {
        let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        let factor: number = parseFloat(inputs[0].value);
        let lines: number = parseInt(inputs[1].value);
        let width: number = parseInt(inputs[2].value);

        let radius: number = crc2.canvas.width / 3;

        crc2.clearRect(-crc2.canvas.width / 2, -crc2.canvas.height / 2, crc2.canvas.width, crc2.canvas.height);

        drawOuterCircle(radius, lines);

        // crc2.font = radius / 10 + 'px serif';
        // crc2.fillText('Factor:' + multiplicationInput, -radius * 1.4, -radius);
        // crc2.font = radius / 15 + 'px serif';
        // crc2.fillText('Amount of Lines:' + resolutionInput, -radius * 1.4, -radius + radius / 8);

        for (let i: number = 0; i < lines; i++) {
            let startAngle: number = i * 1 / lines * 2 * Math.PI;
            let calcedNumber: number = i * factor;
            let endAngle: number = calcedNumber * 1 / lines * 2 * Math.PI;

            let startX: number = -Math.cos(startAngle) * radius;
            let startY: number = -Math.sin(startAngle) * radius;

            let endX: number = -Math.cos(endAngle) * radius;
            let endY: number = -Math.sin(endAngle) * radius;

            drawLine(startX, startY, endX, endY, i * 1 / lines * 360 , width);
            console.log(startAngle, endAngle, i, calcedNumber, endX, endY, lines, factor);
        }

    }

    function drawOuterCircle(_radius: number, _resolutionInput: number): void {
        crc2.beginPath();
        crc2.strokeStyle = "red";
        crc2.arc(0, 0, _radius, 0 * Math.PI, 2 * Math.PI, null);
        crc2.stroke();



        for (let i: number = 0; i < _resolutionInput; i++) {

            let startAngle: number = i * 1 / _resolutionInput * 2 * Math.PI;
            let startX: number = -10 - Math.cos(startAngle) * _radius * 1.07;
            let startY: number = -Math.sin(startAngle) * _radius * 1.07;

            let dotStartX: number = -Math.cos(startAngle) * _radius;
            let dotStartY: number = -Math.sin(startAngle) * _radius;


            //draw small dots and numbers
            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.arc(dotStartX, dotStartY, crc2.canvas.width/2 / (5 * _resolutionInput), 0, 2 * Math.PI, null);
            crc2.fill();

            if (_resolutionInput <= 30) {
                crc2.font = ' 40px serif';
                crc2.fillText('' + i, startX, startY);
            }
            else if (_resolutionInput <= 200) {
                crc2.font = 1000 / _resolutionInput + 'px serif';
                crc2.fillText('' + i, startX, startY);
            }
        }
    }

    function drawLine(_startX: number, _startY: number, _endX: number, _endY: number, _colorAngle: number, _width: number): void {
        crc2.beginPath();
        crc2.strokeStyle = "HSLA(" + _colorAngle + ",100%,40%, 0.7)";
        crc2.lineWidth = _width;
        crc2.moveTo(_startX, _startY);
        crc2.lineTo(_endX, _endY);
        crc2.stroke();
    }
}