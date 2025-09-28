// union type allows a value to be one of several types


let value : string | number ;

function printID(id: number | string) {
    console.log("ID:", id);
}

printID(123);
printID("ABC123");
// printID(true); // ❌ Not allowed


// intersection types 

type A = { a: number };
type B = { b: string };
type C = A & B; // must have a and b

// combining types 

type Population = { name: string };
type Stats = { fstValue: number };

type PopulationStats = Population & Stats;

const pop: PopulationStats = {
    name: "European",
    fstValue: 0.12
};

