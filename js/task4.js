function addition(){
    let fnumber = document.getElementById("fnumber").value;
    let snumber = document.getElementById("snumber").value;
    let tnumber = document.getElementById("tnumber").value;
    
    document.getElementById("sum").innerHTML = "Sum: " + (parseInt(fnumber) + parseInt(snumber) + parseInt(tnumber));
}

function average() {
    let fnumber = document.getElementById("fnumber").value;
    let snumber = document.getElementById("snumber").value;
    let tnumber = document.getElementById("tnumber").value;
    let sum = parseInt(fnumber) + parseInt(snumber) + parseInt(tnumber);

    document.getElementById("average").innerHTML = "Average: " + (sum/3);
}

function reloadPage() {
    location.reload();
}