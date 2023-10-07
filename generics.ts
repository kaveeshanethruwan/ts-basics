// GENERICS type - 1

const addUID = (obj: object) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: "yoshi", age: 40 });

// above returned { name, age, uid}
// but cant access docOne.name and docOne.age
// because addUID accept obj and it doesn't know what are the properties.
// solution is use generics. add a generic type to capture the
// incoming object types.

const genericAddUID = <T>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let genericDocOne = genericAddUID({ name: "yoshi", age: 40 });
// possible to add genericDocOne.name, genericDocOne.age,
// genericDocOne.uid

let genericDocOneWithString = genericAddUID("random");
// problem with generic is not checking the type, whatever providing its accepting.

// lets specify arg type
const genericAddUIDWithType = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

// lets specify how would be the object with its keys
const genericAddUIDWithTypeSpecifiedObject = <T extends { name: string }>(
  obj: T
) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

// arg must have name, including additional will also work
let genericDocOneWithTypeSpecifiedObject = genericAddUIDWithTypeSpecifiedObject(
  { name: "yoshi", age: 40 }
);

// GENERICS type - 2

// with interfaces
interface Resource {
  uid: number;
  resourceName: string;
  data: object;
}

// this will only accept object, if you try to set string it will not allowed
const docThree: Resource = {
  uid: 1,
  resourceName: "person",
  data: { name: "shaun" },
};

// lets make that as a dynamic. what ever pass interface should accept
interface DynamicResource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docFour: DynamicResource<string[]> = {
  uid: 1,
  resourceName: "shoppingList",
  data: ["bread", "milk"],
};

console.log(docThree, docFour);

// Generics allow to use reusable block of codes
// which can be use deferent types.
