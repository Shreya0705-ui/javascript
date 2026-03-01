//  ------------------singleton object----------------------

const tinderUser1 = new Object()
console.log(tinderUser1);

// --------------Non singleton object ---------------

const tinderUser = {}
tinderUser.id = 123
tinderUser.name = "Shreya"
console.log(tinderUser);


// --------------------nested object --------------------

const RegularUser = {
    email: "Gangwarshreya76776@gmail.com",
    fullname : {
        userfullname : {
            firstname: "Shreya",
            lastname: "Gangwar"
        }
    }
}

// // ---------- using fullname? so that if API response come we don't have to use if else directly it can check from here
 console.log(RegularUser.fullname?.userfullname.firstname); 
 
// -------------make 2 objects into one object ------------
 const obj1 = { 1: "abc" , 2: " bcg"}
 const obj2 = {3: " khj" , 4: " uys"}



const obj3_way1 = { obj1 , obj2}
console.log(obj3_way1);



const obj3_way2 = Object.assign({}, obj1 , obj2)
console.log(obj3_way2);


const obj3_way3 = {...obj1, ...obj2}
console.log(obj3_way3);




// ----------------------object methods -----------------------


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggenIn'));



// -----------------------object destruction -----------------

const course= {
    coursename: "js in hindi",
    price: " 999",
    courseProff : "Aryan Sir"
}


// not use course.courseProff everytime destructure it always by using{}

const {courseProff: Proff} = course

// ------------can give name  on our own ---------
console.log(Proff);



