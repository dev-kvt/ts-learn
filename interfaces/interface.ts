interface Person {
    name : string ;
    age : number ;
    isStudent?: boolean; //optional property 
    greet(): void;
}

// an interface defines the structure of an object 
// think of it a a blueprint - it says what properties an object must 
// have and their types .
const student1 : Person =  {
    name : "hhshssh",
    age : 23,
    isStudent : true ,
    greet() {
        console.log(`Hello , my name is ${this.name}`);
console.log(student1);
student1.greet();
}
};

console.log(student);






