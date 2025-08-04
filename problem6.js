/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here


var currentSalary = startingSalary;
for (let i = 1; i <= experience; i++){
    const persentret = 5/ 100
    const incrimentPersent = currentSalary * persentret
    const incrimentSalay = currentSalary + incrimentPersent

    currentSalary = incrimentSalay;
}

console.log(currentSalary.toFixed(2))