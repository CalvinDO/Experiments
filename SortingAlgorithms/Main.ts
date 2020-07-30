namespace SortingAlgorithms {
    window.addEventListener("load", init);

    let amount: number = 20;
    let randomFactor: number = 1;

    let unsorted: number[];
    let currentArray: number[];

    let accesses: number = 0;
    let sortingComplete: boolean;

    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;

    let currentFrame: number = 0;

    let sortIndex: number = 0;

    function init(_event: Event): void {
        selectTags();
        unsorted = [];

        for (let index: number = 0; index < amount; index++) {
            let randomNumber: number = +(amount * randomFactor * Math.random()).toFixed(0);
            unsorted.push(randomNumber);
        }
        animate();
    }

    function selectTags(): void {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
    }

    function bubbleSortSingle(_index: number) {
        if (unsorted[_index] > unsorted[_index + 1]) {
            let temp: number = unsorted[_index + 1];
            unsorted[_index + 1] = unsorted[_index];
            unsorted[sortIndex] = temp;
            accesses++;
        }

    }
    function isSorted(_input: number[]): boolean {
        for (let checkIndex: number = 0; checkIndex < _input.length; checkIndex++) {
            if (_input[checkIndex] > _input[checkIndex + 1]) {
                return false;
            }
        }
        return true;
    }

    function animateBubbleSort(): void {
        sortIndex++;
        if (sortIndex >= unsorted.length) {
            sortIndex = 0;
        }
        bubbleSortSingle(sortIndex);

        if (isSorted(unsorted)) {
            sortingComplete = true;
        }
        console.log(arrayToString(unsorted));
    }

    function arrayToString(_input: number[]): string {
        let output: string = "";

        for (let index: number = 0; index < _input.length; index++) {
            output += _input[index] + "; ";
        }
        return output;
    }
    function drawBackground(): void {
        crc2.fillStyle = "darkred";
        crc2.fillRect(-crc2.canvas.width, -crc2.canvas.height, crc2.canvas.width * 2, crc2.canvas.height * 2);
    }

    function animate(): void {
        currentFrame++;

        drawBackground();

        if (!sortingComplete && currentFrame % 2 == 0) {
            animateBubbleSort();
        }
        requestAnimationFrame(animate);
    }
}