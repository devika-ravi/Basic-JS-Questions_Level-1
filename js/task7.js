function areaOfCircle(){
    let radius = document.getElementById("radiusOfCircle").value;
    const pi = Math.PI;

    if (isNaN(radius)) {
        document.getElementById("area").innerHTML = "NaN i.e, This is not a number. <br> Enter a valid number as radius!";
    } else {
        document.getElementById("area").innerHTML = "Area of circle with radius " + radius + " is (A = π r²): " +  (pi*radius*radius) ;
    }
}