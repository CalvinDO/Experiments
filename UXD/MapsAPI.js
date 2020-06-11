var UXD;
(function (UXD) {
    window.addEventListener("load", init);
    let map;
    let panorama;
    function init(_event) {
        var astorPlace = { lat: 40.729884, lng: -73.990988 };
        map = new google.maps.Map(document.getElementById("map"), {
            center: astorPlace,
            zoom: 8,
            streetViewControl: false
        });
        panorama = map.getStreetView();
        panorama.setPosition(astorPlace);
        panorama.setPov(/** @type {google.maps.StreetViewPov} */ ({
            heading: 265,
            pitch: 0
        }));
    }
    function toggleStreetView() {
        let toggle = panorama.getVisible();
        if (!toggle) {
            panorama.setVisible(true);
        }
        else {
            panorama.setVisible(false);
        }
    }
})(UXD || (UXD = {}));
//# sourceMappingURL=MapsAPI.js.map