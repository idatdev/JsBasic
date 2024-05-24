// While loof
let flag = false;
let i = 0;
while(!flag){
    console.log(`Check value i: `,i);
    i++;
    if(i===5){
        flag = true;
    }
}
let arrayTop4 = ['MU','CS','ManCT','Liver'];
let text = "";
let j = 0;
while(j<arrayTop4.length){
    text += arrayTop4[j] + "\n";
    j++;
}
console.log(text);