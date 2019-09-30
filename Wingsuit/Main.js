var Wingsuit;
(function (Wingsuit) {
    let crc2;
    const timeSliceInMS = 1;
    var Vector2D = Vector.Vector2D;
    window.addEventListener("load", init);
    //p = pull, s = speed, r= result
    let pVector = new Vector2D(0);
    let sVector = new Vector2D(1, 2);
    let rVector = new Vector2D(1, 2);
    let i = 0;
    i = i + 1;
    function init(_event) {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        crc2.translate(canvas.width / 2, canvas.height / 2);
    }
    function animate() {
        window.setTimeout(animate, timeSliceInMS);
    }
})(Wingsuit || (Wingsuit = {}));
//# sourceMappingURL=Main.js.map