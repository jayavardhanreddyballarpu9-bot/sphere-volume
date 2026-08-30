function calculateVolume() {

    let radius = document.getElementById("radius").value;

    if (radius === "" || radius <= 0) {
        alert("Please enter a valid radius.");
        return;
    }

    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    document.getElementById("volume").value = volume.toFixed(2);
}