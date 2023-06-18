function cubeOfNumber(){
    let number = parseInt(document.getElementById("aNumber").value);
    
    document.getElementById("cube").innerHTML = "Cube of " + number + " is : " +  (number*number*number) ;
}