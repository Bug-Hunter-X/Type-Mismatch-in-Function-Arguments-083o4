function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return add(a, b);
  } else {
    console.error("Invalid input: Both parameters must be numbers.");
    return 0; // Or throw an error
  }
}

let result1 = addSafe(5, 3); // Correct usage
let result2 = addSafe("hello", 5); // Safe usage with error handling
let result3 = addSafe(5, "world"); //Safe usage with error handling