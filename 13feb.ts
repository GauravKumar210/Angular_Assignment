
//Implement the concept of Namespaces and Module with an examples(13 Feb).
namespace MathUtilities {
    export function add(a: number, b: number): number {
      return a + b;
    }
  
    export function subtract(a: number, b: number): number {
      return a - b;
    }
  }
console.log(MathUtilities.add(5, 3));      
console.log(MathUtilities.subtract(10, 4));