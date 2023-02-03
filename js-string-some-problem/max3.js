// const jim = 870;
// const dela =  98;
// const chinku = 770;
// if (jim>dela && jim>chinku) {
//     console.log("jim gate tha cake ")
// }
// else if(dela> chinku){
//     console.log("dela get tha cake");
// }
// else{
//     console.log("cinku gate the cake");
// }
// console.log(Math.max(jim,dela,chinku));

// function getLargeNumber(jim,dela,chinku) {
//     if (jim>dela && jim>chinku) {
//        return("jim gate tha cake ")
//     }
//     else if(dela> chinku){
//         return("dela get tha cake");
//     }
//     else{
//         return("cinku gate the cake");
//     }
// }
// const jim = 80;
// const dela =  98;
// const chinku = 770;
// const getNumber = getLargeNumber(jim,dela,chinku)
// console.log(getNumber)
function getLargeNumber(num1,num2,num3) {
    const lagest = Math.max(num1,num2,num3)
    return lagest;
}
const jim = 80;
const dela =  98;
const chinku = 770;
const getNumber = getLargeNumber(jim,dela,chinku)
console.log(getNumber)