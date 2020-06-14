namespace UXD {
    //window.addEventListener("load", init);

    let panorama: google.maps.StreetViewPanorama;

    function init(_event: Event): void {
        panorama = new google.maps.StreetViewPanorama(
            document.getElementById("map"), { pano: "reception", visible: true });
        panorama.registerPanoProvider(getCustomPanorama);
    }
    // Return a pano image given the panoID.
    function getCustomPanoramaTileUrl(): string {
        return "equiTileFakeInverted.jpg";
    }

    // Construct the appropriate StreetViewPanoramaData given
    // the passed pano IDs.
    function getCustomPanorama(pano: string): google.maps.StreetViewPanoramaData {
        if (pano === "reception") {
            return {
                location: {
                    pano: "reception",
                    description: "Google Sydney - Reception"
                },
                links: [],
                // The text for the copyright control.
                copyright: "Imagery (c) 2010 Google",
                // The definition of the tiles for this panorama.
                tiles: {
                    tileSize: new google.maps.Size(1024, 512),
                    worldSize: new google.maps.Size(2048, 1024),
                    // The heading in degrees at the origin of the panorama
                    // tile set.
                    centerHeading: 105,
                    getTileUrl: getCustomPanoramaTileUrl
                }
            };
        }
    }
}