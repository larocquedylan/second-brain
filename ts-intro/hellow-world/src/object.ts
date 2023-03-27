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

// so typescript has a type alias feature that allows us to create a new type and assign it to a variable

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
