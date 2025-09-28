let age : number = 25 ;// integer 
//text 
let Username : string = "divyansh singh ";
// boolean 
let isHuman : boolean = false ;
//null -> no value 
let nothing :null = null ;
//undefined 
let x : undefined;
//any -< turns off type checking ( use sparingly )
let anything : any = 5 ; // In TypeScript, the any type is a special type that allows a variable to hold values of any data type, effectively bypassing the language's type-checking system.

let value : unknown = 5 ;
// safer version of any , must be checked 


// void 
function log (): void {
    new Error();

}// function that returns nothing 

function error(): never {
    throw new Error();
}
// function that never returns anything 


