//Berilgan ob'ekt ichidagi barcha son qiymatlarni ikki baravar oshiring.
function doubleValues(obj) {
    // Code here
 }
 
 // Test case
 const obj = {
     a: 1,
     b: {
         c: 2,
         d: {
             e: 3
         }
     }
 };
 console.log(doubleValues(obj)); 
 // Output: { a: 2, b: { c: 4, d: { e: 6 } } }