namespace UXD {
    window.addEventListener("load", init);
    import maps = google.maps;

    let map: google.maps.Map;
    let panorama: google.maps.StreetViewPanorama;

    function init(_event: Event): void {
        var astorPlace: maps.LatLngLiteral = { lat: 40.729884, lng: -73.990988 };
        map = new google.maps.Map(document.getElementById("map"), {
            center: astorPlace,
            zoom: 8,
            streetViewControl: false
        });

        panorama = map.getStreetView();
        panorama.setPosition(astorPlace);
        panorama.setPov(/** @type {google.maps.StreetViewPov} */({
            heading: 265,
            pitch: 0
        }));
    }

    function toggleStreetView(): void {
        let toggle: boolean = panorama.getVisible();

        if (!toggle) {
            panorama.setVisible(true);
        } else {
            panorama.setVisible(false);
        }
    }
}