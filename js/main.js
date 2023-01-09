import {
  bitwiseIndex,
  clockwiseCipher,
  countChocolates,
  getObject,
  knightsJump,
  join,
  letter_combinations,
  maxDistance,
  movingParticles,
  nicoCipher,
  numToEng,
  polybius,
  condiCipher,
  expressFactors,
  fiscalCode,
  numGrid,
  freqCount,
  hexLattice,
  tapCode,
  bishop,
} from "./expert.js";

console.log(letter_combinations("532"));
console.log(numToEng(15));
console.clear();
console.log(join(["oven", "envier", "erase", "serious"]));
console.log(polybius("you dont win friends with salad"));
console.log(bitwiseIndex([-31, -7, -13, -7, -9, -13]));
console.clear();
console.log(
  getObject({
    0: { age: 18, name: "john", marks: "400" },
    1: { age: 17, name: "julie", marks: "400" },
    2: { age: 16, name: "Robin", marks: "200" },
    3: { age: 16, name: "Bella", marks: "300" },
    4: { age: 16, name: "john", marks: "250" },
    5: { age: 15, name: "julie", marks: "250" },
  })
);
console.log(countChocolates("I got -68$ from my mom ", "2$"));
console.log(nicoCipher("iloveher", "612345"));
console.log(movingParticles([-1, 3, -1, 2]));
console.log(maxDistance("000010000001001"));
console.log(clockwiseCipher("Edabit is amazing"));
console.log(knightsJump("E2"));
console.clear();
console.log(condiCipher("mubashir", "airforce", 6));
console.log(expressFactors(60));
console.log(
  fiscalCode({
    name: "Mickey",
    surname: "Mouse",
    gender: "M",
    dob: "16/1/1928",
  })
);
console.log(
  numGrid([
    ["-", "-", "-", "#", "#"],
    ["-", "#", "-", "-", "-"],
    ["-", "-", "#", "-", "-"],
    ["-", "#", "#", "-", "-"],
    ["-", "-", "-", "-", "-"],
  ])
);
console.log(freqCount([1, [2], 1, [[2]], 1, [[[2]]], 1, [[[[2]]]]], 2));
console.log(hexLattice(37));
console.log(tapCode(".... ... ... ..... . ..... ... ... .... ...."));
console.clear();
console.log(bishop("a1", "b4", 2));
