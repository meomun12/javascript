// // "use strict";
// // let hasDriversLicense = false;
// // const passTest = true;

// // if (passTest) hasDriversLicense = true;
// // if (hasDriversLicense) console.log("I can drive ");
// //  const interface = 'Audio';
// //  const private = 534;

// //function: ham
// // function logger() {
// //   console.log("my name is john ");
// // }
// // //cach goi ham/ chay ham / khai bao
// // logger();
// // function fruitProcessor(apples, oranges) {
// //   console.log(apples, oranges);
// //   const juice = `juice with ${apples} apples and ${oranges} orange`;
// //   return juice;
// // }
// // fruitProcessor(5, 0);
// // const appOrangeJuice = fruitProcessor(2, 4);
// // console.log(appOrangeJuice);
// // function calcAge1(birthYeah) {
// //   const age = 2023 - birthYeah;
// //   return age;
// // }
// // const age1 = calcAge1(1994);
// // console.log(age1);
// // const calcAge2 = function (birthYeah) {
// //   return 2023 - birthYeah;
// // };
// // const age2 = calcAge2(1994);
// // console.log(age1, age2);
// // //Arrow function
// // const calcAge3 = (birthYeah) => 2023 - birthYeah;
// // //coding challenge
// // const calcTip = function (bill) {
// //   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// // };
// // const bills = [125, 555, 44];

// // const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// // const totals = bills + tips;
// // console.log(totals);
// // console.log(bills, tips);
// // Array
// // const JonasArray = [
// //   "Jonas",
// //   "Smith",
// //   2023 - 1994,
// //   "teacher",
// //   ["John", "Maria", "Steven"],
// // ];
// // const jonas = {
// //   firstName: "Jonas",
// //   lastName: "Smith",
// //   age: 2023 - 1994,
// //   job: "teacher",
// //   friends: ["John", "Maria", "Steven"],
// // };
// // console.log(jonas);
// // console.log(jonas.lastName);
// // console.log(jonas.firstName);
// // console.log(jonas.friends);
// // console.log(jonas.age);
// // const nameKey = "Name";
// // console.log(jonas["first" + nameKey]);
// // console.log(jonas["last" + nameKey]);

// // const interestedIn = prompt(
// //   "what do you want to know about jonas ? choose between firstname, lastname , age , job and friends "
// // );
// // console.log(jonas[interestedIn]);
// // if (jonas[interestedIn]) {
// //   console.log(jonas[interestedIn]);
// // } else {
// //   console.log(
// //     "Wrong Request! Choose between firstName, lastName,age,job,and friends"
// //   );
// // }
// // jonas.location = "England";
// // jonas["twitter"] = "@jonassmith";
// // console.log(jonas);
// // //challenge code
// // console.log(
// //   `${jonas.firstName} has ${jonas.friends.length}, and his best friend is call ${jonas.friends[0]}`
// // );
// const jonas2 = {
//   firstName: "Jonas",
//   lastName: "Smith",
//   age: 2023 - 1994,
//   birthYeah: 1994,
//   job: "teacher",
//   friends: ["John", "Maria", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function (birthYeah) {
//     console.log(this);
//     return 2023 - this.birthYeah;
//   },
// };
// console.log(jonas2.calcAge());
// // console.log(jonas["calcAge"](1994));
// console.log("lifting weights repetition 1");
// console.log("lifting weights repetition 2");
// console.log("lifting weights repetition 3");
// console.log("lifting weights repetition 4");
// console.log("lifting weights repetition 5");
// console.log("lifting weights repetition 6");
// console.log("lifting weights repetition 7");
// console.log("lifting weights repetition 8");
// console.log("lifting weights repetition 9");
// console.log("lifting weights repetition 10");
//cau lenh for loop keeps runing while condition is true
for (let rep = 5; rep <= 20; rep++) {
  console.log(`lifting weights repetition ${rep}`);
}
const jonas = [
  "jonas",
  "smith",
  2023 - 1994,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
// console.log(jonas[0]);
// console.log(jonas[1]);
// ...
// console.log(jonas[4]);
// console.log(jonas[5]) does not exist
for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i]);

  //filling types array
  // types[i] = typeof jonas[i];
  // types.push(typeof jonas[i]);
}
// console.log(types);
const years = [1991, 2007, 1969, 2023];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}
console.log(ages);

//continue and break
console.log("---ONLY STRINGS---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

console.log("---bREAK WITH NUMBER---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}
console.log("");
const fruits = [apple, orange, grapes];
