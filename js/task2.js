function addition() {
    let fnumber = document.getElementById("fnumber").value;
    let snumber = document.getElementById("snumber").value;

    document.getElementById("sum").innerHTML = "Sum: " + (parseInt(fnumber) + parseInt(snumber)) ;
}