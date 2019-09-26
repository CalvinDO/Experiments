var Wingsuit;
(function (Wingsuit) {
    let crc2;
    var Vector2D = Vector.Vector2D;
    window.addEventListener("load", init);
    function init(_event) {
        // wenn mit Canvas gearbeitet werden soll
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        // wenn der Ursprung des Koordinatensystems in der Mitte liegen soll
        crc2.translate(canvas.width / 2, canvas.height / 2);
        let vector = new Vector2D(0, 0);
        console.log(vector);
    }
})(Wingsuit || (Wingsuit = {}));
//# sourceMappingURL=Main.js.map