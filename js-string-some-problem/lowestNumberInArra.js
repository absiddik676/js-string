function getLowestNumber(array) {
    let lowestNumber = array[0]
    for(i=0; i<array.length; i++){
        let index = i;
        const element = array[i]
        if(element<lowestNumber){
            lowestNumber = element
        }        
    }
    return lowestNumber;
}
const numbers = [125,121,1222,100,152,142,174];
const number = getLowestNumber(numbers);
console.log(number)