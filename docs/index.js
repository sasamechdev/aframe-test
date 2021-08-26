window.addEventListener("wheel", event => {
    const delta = Math.sign(event.wheelDelta);
    var mycam = document.getElementById("camera").getAttribute("camera");
    var finalZoom = document.getElementById("camera").getAttribute("camera").zoom + delta * 0.15;
    if (finalZoom < 1) {
        finalZoom = 1;
    }
    if (finalZoom > 5) {
        finalZoom = 5;
    }
    mycam.zoom = finalZoom;
    document.getElementById("camera").setAttribute("camera", mycam);
});