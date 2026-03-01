const JsUser1 = {
    name: "Shreya" , 
    "location": "Uttrakhand",
    age: 20 , 
    email: "gangwarshreya0705@gmail.com",
    isLoggenin: false 
}


 console.log(JsUser1.email);

// ----------------------If accessing it using brackets then only by  using ""
 console.log(JsUser1["age"]);


// --------------------to access location which is written in string the only method is by using dot
 console.log(JsUser1.location);

//------------------------ Use data type symbol-------------------------
const mySym = Symbol("key1")

const JsUser = {
    name: "Shreya" , 
    "location": "Uttrakhand",
    age: 20 , 
    email: "gangwarshreya0705@gmail.com",
    isLoggedin: false ,
    [mySym]: "mykey1"
}

console.log(JsUser[mySym]);


// -------------Do not allow to change the value of any object--------------
Object.freeze(JsUser1)
JsUser1.email = "gangwarshreya755@gmail.com"
console.log(JsUser1) 


// ---------how to make a function for any object ----------

JsUser.greeting = function(){
    console.log("Hello");
}
console.log(JsUser.greeting());



JsUser.greeting2 = function(){
   console.log(`JsUser.greeting2 ${this.name}`);
}
 console.log(JsUser.greeting2());