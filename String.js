const GameName = new String ('hitesh')

console.log(GameName [2]);
console.log(GameName._proto_);
console.log(GameName.length);
console.log(GameName.toUpperCase());
console.log(GameName.charAt(4));
console.log(GameName.indexOf('s'));


const newString  = GameName.substring(0, 4)
console.log(newString);


const AnotherString = GameName.slice(-8 , 4)
console.log(AnotherString);


const newStringOne = "              hitesh      "
console.log(newStringOne);

 console.log(newStringOne.trim());



 const url ="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20' , '-'));


console.log(url.includes('sundar'))


console.log(GameName.split('-'));
