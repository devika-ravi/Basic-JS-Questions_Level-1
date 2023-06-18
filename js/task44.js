function findVolume(){
    let length = parseInt(document.getElementById("inputNumber").value.trim());
    let volumeElement = document.getElementById("volume");

    if (length === "" || isNaN(length) || length < 0) { 
        volumeElement.innerHTML = "Invalid input. Please enter a valid positive number.";
        return;
    } 

    volumeElement.innerHTML = "Volume of the Cube:" + (6 * (length ** 2) );
}

function findSurfaceArea(){
    let length = parseInt(document.getElementById("inputNumber").value.trim());
    let surfaceAreaElement = document.getElementById("surfaceArea");
    if (length === "" || isNaN(length) || length < 0) { 
        surfaceAreaElement.innerHTML = "Invalid input. Please enter a valid positive number.";
        return;
    } 

    surfaceAreaElement.innerHTML = "Surface Area of the Cube:" + (length ** 3);
}

function findLateralSurfaceArea(){
    let length = parseInt(document.getElementById("inputNumber").value.trim());
    let lateralSurfaceAreaElement = document.getElementById("lateralSurfaceArea");
    if (length === "" || isNaN(length) || length < 0) { 
        lateralSurfaceAreaElement.innerHTML = "Invalid input. Please enter a valid positive number.";
        return;
    } 
    lateralSurfaceAreaElement.innerHTML = "Lateral Surface Area of the Cube:" + (4 * (length ** 2) );
}