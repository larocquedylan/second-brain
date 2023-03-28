let employee: {
  name: string;
  readonly id: number; // readonly means the value can't be changed
  age?: number; // key?: type; means the key is optional
} = {
  name: 'John',
  id: 1,
};
// employee.id = 2; // this will throw an error because the id is readonly

// So we, we can use the readonly keyword to make the object immutable
// const employee2: {
//   readonly name: string;
//   readonly id: number;
//   workAnniversay: (data : Date) => void;
// } = {
//   name: 'John',
//   id: 1,
// }; // this is makes typescript update because workAnniversary doesn't have a value in the initial object

const employee2: {
  readonly name: string;
  readonly id: number;
  workAnniversay: (data: Date) => void;
} = {
  name: 'John',
  id: 1,
  workAnniversay: (date: Date) => {
    console.log(date);
  },
};

// This code is incredibly unreadable...

// TPYE ALIAS
//  allows us to create a new type and assign it to a variable

type Employee = {
  readonly name: string;
  readonly id: number;
  workAnniversay: (data: Date) => void;
};

const employee3: Employee = {
  name: 'John',
  id: 1,
  workAnniversay: (date: Date) => {
    console.log(date);
  },
};

// UNION
// we can also use type aliases to create a union type

type Employee2 =
  | {
      readonly name: string;
      readonly id: number;
      workAnniversay: (data: Date) => void;
    }
  | string;

const employee4: Employee2 = {
  name: 'John',
  id: 1,
  workAnniversay: (date: Date) => {
    console.log(date);
  },
};

function numOrStr(value: number | string) {
  if (typeof value === 'number') {
    return value.toFixed(2);
  } else {
    return value.trim();
  }
}

// INTERSECTION TYPE
// we can also use type aliases to create an intersection type

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

// using an itnersection type we can combine types
type DraggableResizable = Draggable & Resizable;

let UIElement: DraggableResizable = {
  drag: () => void {},
  resize: () => void {},
};

// LITERAL TYPES
// we can also use type aliases to create a literal type

type Quantity = string | number;
let quantitiy: Quantity = 'John';
quantitiy = 1;

// Otional Properties
// we can also use type aliases to create an optional property
type Customer = {
  birthdate: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthdate: new Date() };
}
let customer = getCustomer(0);
// if (customer !== null  && customer !== undefined) {
// we can make this more concise by using the optional chaining operator

// console.log(customer?.birthdate);
console.log(customer?.birthdate?.toDateString());

// we can access the array elements using the optional chaining operator
// let array?.[index: number];;

// we can also use type aliases to create a nullable type

type Nullable<T> = T | null;
