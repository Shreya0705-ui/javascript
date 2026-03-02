const JsUser = {
    username: "Shreya",
    welcomeMessage: function(){
        console.log(`${this.username} welcome to our website`);
        // console.log(this) ------------only gives context like if using shreya then what is being done in back and if using sam then 
    }
}


JsUser.welcomeMessage();
JsUser.username = "sam"
JsUser.welcomeMessage();

// console.log(this); -----------gives {} as empty coz no global scope 


//  -------------functions using this gives undefined -------------
function chai(){
     let username = "Shreya"
    console.log(this.username);
    
}

chai()


//  -------------this is allowed here by arrow ------------

const chai2 = () => {
   let  username = "shreya"
    console.log(this);
    
}

chai2()


// ---------------------------------basic arror function--------------------

const addTwo = (num1 , num2) => {
    return num1 + num2 
}

console.log(addTwo (3, 4));

// ---------------------implicit where do not write return when using () ---------------

const addThree = (num1 , num2 )=> (num1+ num2)
console.log(addThree(3,4));

//   ---------using objects with arrow function ------------
const AddNum = (num1 , num2 ) => ({username: "Shreya "});
console.log(AddNum());


