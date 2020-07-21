num = window.prompt("Enter a number");
let arr = [];
for (i = 1; i <= num; i++){
    arr.push(i);
}
console.log(`your array is: ${arr}`);
let odd = arr.filter(el => el%2!=0).map(el => el**3);
console.log(` the odd cubes are: ${odd}`);