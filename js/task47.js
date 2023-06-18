function findVolume(){
    let radius = parseInt(document.getElementById("inputRadius").value.trim());
    const pi = Math.PI;

    let volumeElement = document.getElementById("volume");

    if (radius === "" || isNaN(radius) || radius < 0) { 
        volumeElement.innerHTML = "Invalid input. Please enter a valid positive number.";
        return;
    } 

    volumeElement.innerHTML = "Volume of the Sphere:" + ((4/3) * pi * (radius ** 3));
}

function findSurfaceArea(){
    let radius = parseInt(document.getElementById("inputRadius").value.trim());
    const pi = Math.PI;

    let surfaceAreaElement = document.getElementById("surfaceArea");

    if (radius === "" || isNaN(radius) || radius < 0) { 
        surfaceAreaElement.innerHTML = "Invalid input. Please enter a valid positive number.";
        return;
    } 

    surfaceAreaElement.innerHTML = "Surface Area of the Sphere:" + (4 * pi * (radius ** 2));
}

function findRadiusOfSphere(){
    let surfaceArea = parseInt(document.getElementById("inputSurfaceArea").value.trim());
    const pi = Math.PI;

    let radiusFromSurfaceAreaElement = document.getElementById("radiusFromSurfaceArea");

   if (surfaceArea === "" || isNaN(surfaceArea) || surfaceArea < 0) { 
        radiusFromSurfaceAreaElement.innerHTML = "Invalid input. Please enter a valid positive number.";
        return;
    } 

    let beforeSquareRooting = (surfaceArea / (4 * pi));
    radiusFromSurfaceAreaElement.innerHTML = "Radius of the Sphere:" + (Math.sqrt(beforeSquareRooting).toFixed(2));
}