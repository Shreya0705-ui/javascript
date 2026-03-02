  var c = 300
  
  
  if(true){
    let a = 10
    const b = 20 
    var  c = 30
  } 

//   console.log(a);
//   console.log(b);
//   console.log(c);
  
// ------------------ global scope and block scope ---------------------
  let a1 = 400
  if(true){
    let a1 = 0
    const b1 = 10
  }

  console.log(a1);
  

//   -----------------Nested scope------------------
 

function one(){
    const username = "Shreya"
    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website); gives error as scope of this is not allowed outside the brackets 
    two()
}
one()

// --------------Understanding Scope in if loop ----------------
if(true){
    const username = "shreya"
    if( username == "shreya"){
        const website = " BK"
        console.log(username + website )
    }
    // ERROR if i try to access website here
}
// ERROR if try to accces username here outside the scope


// ------------------------- Interesting --------------------------

addOne(5)
function addOne(num1){
    return num1 + 1
}



//  this will give error as when you access it before decalaration see this in hosting

// const addTwo = function(num2){
//     return num2 + 2
// }
// console.log(addTwo());