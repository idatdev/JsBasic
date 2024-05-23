let number = [1,3,5,7,9];
let string = `I'mLAD`;
let txt = "";
function myFunction(value, index, array){
    txt += value + "\n";
}
// for (let i = 0;i < number.length; i++) {
//     console.log(number[i])
// }
// number.forEach(myFunction);
// console.log(`${txt}`);
// for (let i of number){
//     txt += i +"\n";
// }
// console.log(txt);
for (let i of string){
    txt += i +"\n";
}
console.log(txt);