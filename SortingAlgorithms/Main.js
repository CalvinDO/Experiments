var SortingAlgorithms;
(function (SortingAlgorithms) {
    window.addEventListener("load", init);
    let amount = 360;
    let randomFactor = 1;
    let unsorted;
    let accesses = 0;
    let sortingComplete;
    let canvas;
    let crc2;
    let currentFrame = 0;
    let sortIndex = 0;
    let insertSubtractIndex = 1;
    let initialCompare;
    let radius = 400;
    let speed = 1;
    let lastFirstIndex;
    let lastSecondIndex;
    function init(_event) {
        selectTags();
        unsorted = [];
        for (let index = 0; index < amount; index++) {
            let randomNumber = (amount * randomFactor * Math.random());
            unsorted.push(randomNumber);
        }
        animate();
    }
    function selectTags() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        crc2.translate(canvas.width / 2, canvas.height / 2);
    }
    function isSorted(_input) {
        for (let checkIndex = 0; checkIndex < _input.length; checkIndex++) {
            if (_input[checkIndex] > _input[checkIndex + 1]) {
                return false;
            }
        }
        return true;
    }
    function swap(_firstIndex, _secondIndex, _inputArray) {
        let temp = _inputArray[_firstIndex];
        _inputArray[_firstIndex] = _inputArray[_secondIndex];
        _inputArray[_secondIndex] = temp;
        accesses++;
        lastFirstIndex = _firstIndex;
        lastSecondIndex = _secondIndex;
    }
    function bubbleSortSingle(_index) {
        if (unsorted[_index] > unsorted[_index + 1]) {
            swap(_index, _index + 1, unsorted);
        }
    }
    function animateBubbleSort() {
        sortIndex += 1;
        if (sortIndex >= unsorted.length) {
            sortIndex = 0;
        }
        bubbleSortSingle(sortIndex);
        if (isSorted(unsorted)) {
            sortingComplete = true;
        }
    }
    function animateImprovedBubbleSort() {
        sortIndex += speed;
        if (sortIndex >= unsorted.length || sortIndex <= 0) {
            speed *= -1;
        }
        bubbleSortSingle(sortIndex);
        if (isSorted(unsorted)) {
            sortingComplete = true;
        }
    }
    function insertionSortSingle() {
        let insertIndex = sortIndex - insertSubtractIndex;
        if (insertIndex < 0) {
            insertIndex = 0;
        }
        if (initialCompare < unsorted[insertIndex]) {
            swap(insertIndex, insertIndex + 1, unsorted);
            insertSubtractIndex++;
        }
        else {
            sortIndex++;
            initialCompare = unsorted[sortIndex];
            insertSubtractIndex = 1;
        }
    }
    function animateInsertionSort() {
        if (sortIndex == 0) {
            initialCompare = unsorted[sortIndex];
        }
        insertionSortSingle();
        if (isSorted(unsorted)) {
            sortingComplete = true;
        }
    }
    function drawCurrentArray(_values) {
        for (let index = 0; index < _values.length; index++) {
            let currentRadiant = index * (Math.PI / 180);
            let currentAngle = _values[index];
            let newX = radius * Math.sin(currentRadiant);
            let newY = radius * Math.cos(currentRadiant);
            crc2.beginPath();
            crc2.lineWidth = 2;
            crc2.strokeStyle = "hsl(" + currentAngle + ",100%, 50%, 1)";
            crc2.moveTo(0, 0);
            crc2.lineTo(newX, newY);
            crc2.stroke();
        }
    }
    function drawPointer() {
        let currentRadiant = sortIndex * (Math.PI / 180);
        let newX = radius * Math.sin(currentRadiant);
        let newY = radius * Math.cos(currentRadiant);
        crc2.beginPath();
        crc2.lineWidth = 5;
        crc2.strokeStyle = "red";
        crc2.moveTo(0, 0);
        crc2.lineTo(newX, newY);
        crc2.stroke();
    }
    function drawSwitch(_first, _second) {
        let currentRadiant = _first * (Math.PI / 180);
        let newX = radius * Math.sin(currentRadiant);
        let newY = radius * Math.cos(currentRadiant);
        let currentAngle = unsorted[_first];
        crc2.beginPath();
        crc2.lineWidth = 3;
        crc2.strokeStyle = "hsl(" + currentAngle + ",100%, 50%, 1)";
        crc2.moveTo(0, 0);
        crc2.lineTo(newX, newY);
        crc2.stroke();
        let currentRadiant2 = _second * (Math.PI / 180);
        let newX2 = radius * Math.sin(currentRadiant2);
        let newY2 = radius * Math.cos(currentRadiant2);
        crc2.beginPath();
        crc2.lineWidth = 3;
        crc2.strokeStyle = "hsl(" + currentAngle + ",100%, 50%, 1)";
        "hsl(" + currentAngle + ",100%, 80%, 1)";
        crc2.moveTo(0, 0);
        crc2.lineTo(newX2, newY2);
        crc2.stroke();
    }
    function arrayToString(_input) {
        let output = "";
        for (let index = 0; index < _input.length; index++) {
            let extraString = (index == sortIndex ? "(  " : "");
            let extraString2 = (index == sortIndex ? " ) " : "");
            output += extraString + _input[index] + " " + extraString2;
        }
        return output;
    }
    function drawBackground() {
        crc2.fillStyle = "black";
        crc2.fillRect(-crc2.canvas.width, -crc2.canvas.height, crc2.canvas.width * 2, crc2.canvas.height * 2);
    }
    function animate() {
        currentFrame++;
        if (!sortingComplete) {
            for (let index = 0; index < 100; index++) {
                animateInsertionSort();
            }
            drawBackground();
            drawCurrentArray(unsorted);
            drawPointer();
            drawSwitch(lastFirstIndex, lastSecondIndex);
        }
        else {
            alert(accesses);
            alert(currentFrame);
        }
        requestAnimationFrame(animate);
    }
})(SortingAlgorithms || (SortingAlgorithms = {}));
//# sourceMappingURL=Main.js.map