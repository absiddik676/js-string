function word(text) {
    const word = text.split(' ')
    const revars = []

    for(i = word.length-1; i>=0;i--){
        let elemet = word[i] 
        revars.push(elemet)
    }
    return revars;
}


const myString = "i am a good boy";
const send =  word(myString);
console.log(send)