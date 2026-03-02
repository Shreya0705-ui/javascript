function sayMyname(){
    console.log("Hello");
}

sayMyname()

// ------------------with storing the values in variable --------

function AddNum(num1 , num2){
  let result = num1 + num2
  return result
    
}



console.log(AddNum(2 , 3));

// ----------------solving undefined value  -------------

function logInUser(username){
    if(username == undefined){
        console.log("Please enter valid")
        return 
    }
     return `${username} just loggen in `
}

console.log(logInUser("Shreya Gangwar"));
console.log(logInUser()); 

//  ---------------to pass multiple arguments -------------

function Calc(...num1){
    return num1;
}

console.log(Calc(200, 300 , 500));


// ------------pass objects inside functions------------

const user = {
    username: "Shreya",
    price: 200
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}


handleObject(user);


// ----------pass value  by making the object while calling the function--------------

// handleObject({
//     username : "Shreya",
//     price : 200
// }) 


// -------------------passing array in function ------------
const myNeyArray = [ 100 , 200 , 300]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNeyArray));
console.log(returnSecondValue([100, 200 , 300]));

