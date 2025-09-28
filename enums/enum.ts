// enums allow you to define a set of named constants
/* useful when you hava a limited set of values
*/

enum Population {
    European = "European",
    African = "African",
    Asian = "Asian"
}

let pop: Population = Population.European;

// Later in code
function calculateFST(pop: Population) {
    console.log(`Calculating FST for ${pop}`);
}

calculateFST(Population.African); // ✅ works
//calculateFST("Antarctica");       // ❌ TS error, can’t do this
