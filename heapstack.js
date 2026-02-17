let user1= {
    email: string ,
    upi: string 
} = {
    email: "abc@gmail.com",
    upi: "user@ybl"
};

let user2 = user1;

user2.email = "gff@gcf";

console.log(user1.email);
console.log(user2.email);
