function revearsString(text) {
    let revars = '';
    for(i =text.length-1; i>=0; i--){
        let elemet = text[i]
        revars=revars+elemet
    }
    return revars
}

const myString = "i am a good boy";
const send =  revearsString(myString);
console.log(send)