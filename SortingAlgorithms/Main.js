var SortingAlgorithms;
(function (SortingAlgorithms) {
    window.addEventListener("load", init);
    let amount = 20;
    let randomFactor = 1;
    let unsorted;
    let currentArray;
    let accesses = 0;
    let sortingComplete;
    let canvas;
    let crc2;
    let currentFrame = 0;
    let sortIndex = 0;
    function init(_event) {
        selectTags();
        unsorted = [];
        for (let index = 0; index < amount; index++) {
            let randomNumber = +(amount * randomFactor * Math.random()).toFixed(0);
            unsorted.push(randomNumber);
        }
        animate();
    }
    function selectTags() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
    }
    function bubbleSortSingle(_index) {
        if (unsorted[_index] > unsorted[_index + 1]) {
            let temp = unsorted[_index + 1];
            unsorted[_index + 1] = unsorted[_index];
            unsorted[sortIndex] = temp;
            accesses++;
        }
    }
    function isSorted(_input) {
        for (let checkIndex = 0; checkIndex < _input.length; checkIndex++) {
            if (_input[checkIndex] > _input[checkIndex + 1]) {
                return false;
            }
        }
        return true;
    }
    function animateBubbleSort() {
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
    function arrayToString(_input) {
        let output = "";
        for (let index = 0; index < _input.length; index++) {
            output += _input[index] + "; ";
        }
        return output;
    }
    function drawBackground() {
        crc2.fillStyle = "darkred";
        crc2.fillRect(-crc2.canvas.width, -crc2.canvas.height, crc2.canvas.width * 2, crc2.canvas.height * 2);
    }
    function animate() {
        currentFrame++;
        drawBackground();
        if (!sortingComplete && currentFrame % 2 == 0) {
            animateBubbleSort();
        }
        requestAnimationFrame(animate);
    }
})(SortingAlgorithms || (SortingAlgorithms = {}));
//# sourceMappingURL=Main.js.map