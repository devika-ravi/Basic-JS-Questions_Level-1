function findVolume(){
    let radius = parseInt(document.getElementById("inputRadius").value.trim());
    let height = parseInt(document.getElementById("inputHeight").value.trim());
    const pi = Math.PI;

    let volumeElement = document.getElementById("volume");

    if (radius === "" || isNaN(radius) || radius < 0 || height === "" || isNaN(height) || height < 0) { 
        volumeElement.innerHTML = "Invalid input. Please enter a valid positive number.";
        return;
    } 

    volumeElement.innerHTML = "Volume of the Cone:" + (1/3 * (pi * (radius ** 2) *height));
}

function findSurfaceArea(){
    let length = parseInt(document.getElementById("inputLength").value.trim());
    let radius = parseInt(document.getElementById("inputRadius").value.trim());
    const pi = Math.PI;

    let surfaceAreaElement = document.getElementById("surfaceArea");

    if (length === "" || isNaN(length) || length < 0 || radius === "" || isNaN(radius) || radius < 0) { 
        surfaceAreaElement.innerHTML = "Invalid input. Please enter a valid positive number.";
        return;
    } 

    surfaceAreaElement.innerHTML = "Surface Area of the Cone:" + ((pi * radius * length) + (pi * (radius ** 2)));
}

function findCurvedSurfaceArea(){
    let length = parseInt(document.getElementById("inputLength").value.trim());
    let radius = parseInt(document.getElementById("inputRadius").value.trim());
    const pi = Math.PI;

    let curvedSurfaceAreaElement = document.getElementById("curvedSurfaceArea");

   if (length === "" || isNaN(length) || length < 0 || radius === "" || isNaN(radius) || radius < 0) { 
        curvedSurfaceAreaElement.innerHTML = "Invalid input. Please enter a valid positive number.";
        return;
    } 
    curvedSurfaceAreaElement.innerHTML = "Curved Surface Area of the Cone:" + (pi * radius * length);
}