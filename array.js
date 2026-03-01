const myArr = [ 0 , 1, 2, 3, 4, 5]

const myArr2 = new Array(1,2,3,4)
console.log(myArr2[1]);


console.log(myArr2.length);


// -------- Array methods------- //

myArr.push(10)
console.log(myArr)
console.log(myArr.length);

 myArr.pop()
 console.log(myArr);
 console.log(myArr.length);


 myArr.unshift(9)
 console.log(myArr);
 

 myArr.shift()
 console.log(myArr);


console.log(myArr.includes(5));
console.log(myArr.indexOf(9));

const newArr = myArr.join()

console.log(myArr);
console.log(newArr);



// --------slice , split------------ //

console.log("A" , myArr);
const myn1 = myArr.slice(1 , 3)
console.log(myn1);



console.log("B" , myArr);
const myn2 = myArr.splice(1 , 3)
console.log(myn2);

console.log(myArr);


// ------nested array , concat array -----//

const friends = ["Shreya " ," Garima " , " Shreya1" , "Garima2"]
const course  = ["Computer" , " Science"]

friends.push(course)
console.log(friends);

console.log(friends[4][1]);


// const allInfo = friends.concat(course);
// console.log(allInfo);
 

// --------spread operator -----//

const allInfo = [...friends, ...course]
console.log(allInfo);


// ---------single array from nested array---------

const another_array = [ 1 , 2 , 4 ,[ 3 , 3 ] , 3 ,6 , 7 , [7 , 0 , 8]] 
const real_one_array = another_array.flat(Infinity)

console.log(real_one_array);

// --------- convert   into array------------

console.log(Array.isArray("Shreya"));
console.log(Array.from("Shreya"));
console.log(Array.from({name : "Shreya"}));


// --------make new array from set of elements----

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2, score3))

