const lyrics = "Tumi bondu kala  pakhi ami jano ki . bosonto kale tomay khuje dekhini.";
const parts = lyrics.split(' ');
const sentences = lyrics.split('.')
const chars = lyrics.split('')
console.log(chars);

const partial = lyrics.slice(5,10)
const partial2 =  lyrics.substring(5,10)
console.log(partial2);

const line =[
    'Tumi bondu kala ',
    'pakhi ami jano ki',
    'bosonto kale tomay khuje dekhini.',
]
const join = line.join(';')
console.log(join)