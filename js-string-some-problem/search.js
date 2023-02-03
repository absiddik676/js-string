const lyrics = "Tumi bondu kala  pakhi ami jano ki . bosonto kale tomay khuje dekhini";
const doseExist = lyrics.includes("pokhi");
console.log(doseExist)
console.log(lyrics.indexOf("kala"))
if(lyrics.indexOf("bondu") !== -1){
    console.log("dos exits")
}
else{
    console.log("can not find anything")
}