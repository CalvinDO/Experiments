namespace SortingAlgorithms {
    window.addEventListener("load", init);

    let amount: number = 360;
    let randomFactor: number = 1;

    let unsorted: number[];

    let accesses: number = 0;
    let sortingComplete: boolean;

    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;

    let currentFrame: number = 0;

    let sortIndex: number = 0;
    let insertSubtractIndex: number = 1;
    let initialCompare: number;

    let radius: number = 400;

    let speed: number = 1;

    let lastFirstIndex: number;
    let lastSecondIndex: number;

    function init(_event: Event): void {
        selectTags();
        unsorted = [];

        for (let index: number = 0; index < amount; index++) {
            let randomNumber: number = (amount * randomFactor * Math.random());
            unsorted.push(randomNumber);
        }
        animate();
    }

    function selectTags(): void {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        crc2.translate(canvas.width / 2, canvas.height / 2);
    }


    function isSorted(_input: number[]): boolean {
        for (let checkIndex: number = 0; checkIndex < _input.length; checkIndex++) {
            if (_input[checkIndex] > _input[checkIndex + 1]) {
                return false;
            }
        }
        return true;
    }

    function swap(_firstIndex: number, _secondIndex: number, _inputArray: number[]): void {
        let temp: number = _inputArray[_firstIndex];
        _inputArray[_firstIndex] = _inputArray[_secondIndex];
        _inputArray[_secondIndex] = temp;
        accesses++;
        lastFirstIndex = _firstIndex;
        lastSecondIndex = _secondIndex;
    }

    function bubbleSortSingle(_index: number) {
        if (unsorted[_index] > unsorted[_index + 1]) {
            swap(_index, _index + 1, unsorted);
        }
    }

    function animateBubbleSort(): void {
        sortIndex += 1;
        if (sortIndex >= unsorted.length) {
            sortIndex = 0;
        }
        bubbleSortSingle(sortIndex);

        if (isSorted(unsorted)) {
            sortingComplete = true;
        }
    }

    function animateImprovedBubbleSort(): void {
        sortIndex += speed;
        if (sortIndex >= unsorted.length || sortIndex <= 0) {
            speed *= -1;
        }
        bubbleSortSingle(sortIndex);

        if (isSorted(unsorted)) {
            sortingComplete = true;
        }
    }

    function insertionSortSingle(): void {
        let insertIndex: number = sortIndex - insertSubtractIndex;
        if (insertIndex < 0) {
            insertIndex = 0;
        }
        if (initialCompare < unsorted[insertIndex]) {
            swap(insertIndex, insertIndex + 1, unsorted);
            insertSubtractIndex++;
        } else {
            sortIndex++;
            initialCompare = unsorted[sortIndex];
            insertSubtractIndex = 1;
        }
    }
    function animateInsertionSort(): void {
        if (sortIndex == 0) {
            initialCompare = unsorted[sortIndex];
        }
        insertionSortSingle();

        if (isSorted(unsorted)) {
            sortingComplete = true;
        }
    }

    function drawCurrentArray(_values: number[]): void {
        for (let index: number = 0; index < _values.length; index++) {
            let currentRadiant: number = index * (Math.PI / 180);
            let currentAngle: number = _values[index];
            let newX: number = radius * Math.sin(currentRadiant);
            let newY: number = radius * Math.cos(currentRadiant);
            crc2.beginPath();
            crc2.lineWidth = 2;
            crc2.strokeStyle = "hsl(" + currentAngle + ",100%, 50%, 1)";
            crc2.moveTo(0, 0);
            crc2.lineTo(newX, newY);
            crc2.stroke();
        }
    }
    function drawPointer(): void {
        let currentRadiant: number = sortIndex * (Math.PI / 180);
        let newX: number = radius * Math.sin(currentRadiant);
        let newY: number = radius * Math.cos(currentRadiant);
        crc2.beginPath();
        crc2.lineWidth = 5;
        crc2.strokeStyle = "red";
        crc2.moveTo(0, 0);
        crc2.lineTo(newX, newY);
        crc2.stroke();
    }
    function drawSwitch(_first: number, _second: number): void {
        let currentRadiant: number = _first * (Math.PI / 180);
        let newX: number = radius * Math.sin(currentRadiant);
        let newY: number = radius * Math.cos(currentRadiant);
        let currentAngle: number = unsorted[_first];
        crc2.beginPath();
        crc2.lineWidth = 3;
        crc2.strokeStyle = "hsl(" + currentAngle + ",100%, 50%, 1)";
        crc2.moveTo(0, 0);
        crc2.lineTo(newX, newY);
        crc2.stroke();

        let currentRadiant2: number = _second * (Math.PI / 180);
        let newX2: number = radius * Math.sin(currentRadiant2);
        let newY2: number = radius * Math.cos(currentRadiant2);
        crc2.beginPath();
        crc2.lineWidth = 3;
        crc2.strokeStyle = "hsl(" + currentAngle + ",100%, 50%, 1)"; "hsl(" + currentAngle + ",100%, 80%, 1)";
        crc2.moveTo(0, 0);
        crc2.lineTo(newX2, newY2);
        crc2.stroke();
    }

    function arrayToString(_input: number[]): string {
        let output: string = "";

        for (let index: number = 0; index < _input.length; index++) {
            let extraString: string = (index == sortIndex ? "(  " : "");
            let extraString2: string = (index == sortIndex ? " ) " : "");
            output += extraString + _input[index] + " " + extraString2;
        }
        return output;
    }
    function drawBackground(): void {
        crc2.fillStyle = "black";
        crc2.fillRect(-crc2.canvas.width, -crc2.canvas.height, crc2.canvas.width * 2, crc2.canvas.height * 2);
    }

    function animate(): void {
        currentFrame++;

        if (!sortingComplete) {
            for (let index: number = 0; index < 100; index++) {
                animateInsertionSort();
            }
            drawBackground();
            drawCurrentArray(unsorted);
            drawPointer();

            drawSwitch(lastFirstIndex, lastSecondIndex);
        } else {
            alert(accesses);
            alert(currentFrame);
        }
        requestAnimationFrame(animate);
    }
}