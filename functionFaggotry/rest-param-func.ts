// when you have no idea how many args will come in 


function myFunction(...args: number[]) {
    console.log(args);
}


const alleleCounts = [2, 3, 1, 4];

const totalAlleles = alleleCounts.reduce((sum, count) => sum + count, 0);

console.log(totalAlleles); // 10


