/* generics lets you write resuable , type-safe code with losing 
 flexibilty , think of them like variables for types */



 // its  one the most powerful and industry used typecript features
 // problem without generic

 function identity(value: any): any {
    return value;
}

const num = identity(42);  // ❌ returns any, TS doesn't know it's a number


// fix using generic
function identity<T>(value: T): T {
    return value;
}

const num = identity<number>(42); // num is type number
const word = identity<string>("gene"); // word is type string

