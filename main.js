let number = prompt("Enter a Number Between 0 And 1 Million");
let Sum = 0;
if(number > 0 && number <= 1000000) {
for (i = 1; i <= number; i++){
Sum=Sum+i;

}
document.write(`Sum of number up to ${number} is ${Sum}`)
}
else{
    alert("Invalid Number")
}