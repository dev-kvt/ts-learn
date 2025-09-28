// implementing the classes 
class Person {
    name : string ;
    age : number ;

    constructor( name : string , age : number ){
        this.name = name ;
        this.age = age ;
    }
    greet(): void {
        console.log(`Hello , my name is ${this.name}`);
    }
}


const p1 = new Person("Divyansh" , 23 );
p1.greet(); // hello my name is sanguinius 


