let names = ["max", "min"];
// names.push("random"); valid
// names.push(3); not valid

let numbers = [2, 4];
// numbers.push(3); valid
// numbers.push("random"); not valid

let mix = [2, "random"];
// mix.push(3); valid
// mix.push("random"); valid
// mix.push(true); invalid

// mix = ""; invalid
// mix = []; valid

let ninja = {
  name: "mario",
  age: 20,
};

// ninja.name = "random"; valid
// ninja.name = 3; invalid

// ninja.new = 3; cant add new items. initial sturcture matters
