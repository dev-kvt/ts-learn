// funcs with parameters

//optional parameters

function greet( name : string , title? : string ): string {
    return title? `hello ${title} ${name}` : `Hello ${name}`;


}

console.log(greet("Divyansh"));
console.log(greet("Divyansh" , "Mr"));

// Default parameter
function multiply(a: number, b: number = 2): number {
    return a * b;
}

console.log(multiply(5));   // 10 (uses default b=2)
console.log(multiply(5, 3));// 15
