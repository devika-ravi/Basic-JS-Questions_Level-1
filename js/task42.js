function findGrossSalary(){
    let basicSalary = parseInt(document.getElementById("inputBasicSalary").value.trim());
    
    if (basicSalary === "" || isNaN(basicSalary)) { 
        document.getElementById("result").innerHTML = "Invalid input. Please enter a valid positive number.";
        return;
    } 

    let hra = 0;
    let da = 0;
    let grossSalary = 0;

    if (basicSalary <= 10000) {
        hra += ((8/100) * basicSalary) ;   //8% of basic salary
        da += ((10/100) * basicSalary) ;   //10% of basic salary
        grossSalary += (basicSalary + hra + da)  //Gross Salary = [Basic Salary + HRA + DA]      
    } else if (basicSalary <= 20000) {
        hra += ((16/100) * basicSalary) ;   //16% of basic salary
        da += ((20/100) * basicSalary) ;   //20% of basic salary
        grossSalary += (basicSalary + hra + da)  //Gross Salary = [Basic Salary + HRA + DA]
    } else if (basicSalary > 20000) {
        hra += ((24/100) * basicSalary) ;   //24% of basic salary
        da += ((30/100) * basicSalary) ;   //30% of basic salary
        grossSalary += (basicSalary + hra + da)  //Gross Salary = [Basic Salary + HRA + DA]
    }

    document.getElementById("result").innerHTML = "GROSS SALARY: ₹" + grossSalary;
}