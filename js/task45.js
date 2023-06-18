function findVolume(){
    let length = parseInt(document.getElementById("inputLength").value.trim());
    let width = parseInt(document.getElementById("inputWidth").value.trim());
    let height = parseInt(document.getElementById("inputHeight").value.trim());

    let volumeElement = document.getElementById("volume");

    if (length === "" || isNaN(length) || length < 0 || width === "" || isNaN(width) || width < 0 || height === "" || isNaN(height) || height < 0) { 
        volumeElement.innerHTML = "Invalid input. Please enter a valid positive number.";
        return;
    } 

    volumeElement.innerHTML = "Volume of the Cuboid:" + (length * width * height);
}

function findSurfaceArea(){
    let length = parseInt(document.getElementById("inputLength").value.trim());
    let width = parseInt(document.getElementById("inputWidth").value.trim());
    let height = parseInt(document.getElementById("inputHeight").value.trim());

    let surfaceAreaElement = document.getElementById("surfaceArea");

    if (length === "" || isNaN(length) || length < 0 || width === "" || isNaN(width) || width < 0 || height === "" || isNaN(height) || height < 0) { 
        surfaceAreaElement.innerHTML = "Invalid input. Please enter a valid positive number.";
        return;
    } 

    surfaceAreaElement.innerHTML = "Surface Area of the Cuboid:" + ((2 * length * width) + (2 * length * height) +(2 * width * height));
}

function findLateralSurfaceArea(){
    let length = parseInt(document.getElementById("inputLength").value.trim());
    let width = parseInt(document.getElementById("inputWidth").value.trim());
    let height = parseInt(document.getElementById("inputHeight").value.trim());

    let lateralSurfaceAreaElement = document.getElementById("lateralSurfaceArea");

    if (length === "" || isNaN(length) || length < 0 || width === "" || isNaN(width) || width < 0 || height === "" || isNaN(height) || height < 0) { 
    lateralSurfaceAreaElement.innerHTML = "Invalid input. Please enter a valid positive number.";
        return;
    } 
    lateralSurfaceAreaElement.innerHTML = "Lateral Surface Area of the Cuboid:" + (2 * height * (length + width));
}