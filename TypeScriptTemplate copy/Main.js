var Template;
(function (Template) {
    let crc2;
    window.addEventListener("load", init);
    function init(_event) {
        // wenn mit Canvas gearbeitet werden soll
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        // wenn der Ursprung des Koordinatensystems in der Mitte liegen soll
        crc2.translate(canvas.width / 2, canvas.height / 2);
    }
})(Template || (Template = {}));
//# sourceMappingURL=Main.js.map