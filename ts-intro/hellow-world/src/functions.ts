// Function declaration
// make sure to annotate the paramter types and the return type
function calculateTax(income: number) {
  return income * 0.2;
} // this fails to show the return type

function calculateTax1(income: number): number {
  return income * 0.2;
} // this shows the return type

// you can return :void if there is no return type
function calculateTax3(income: number): void {
  income * 0.2;
} // this shows the return type

// be sure to turn on
// "noImplicitReturns": true,
// "noImplicitParameter": true,
// to get the compiler to check for implicit returns and implicit parameters cos the compiler will throw an error if you don't annotate the return type and the parameter types

// "noUnusedLocals": true,
