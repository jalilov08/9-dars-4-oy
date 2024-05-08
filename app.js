// import products from "./data.js";

// let cheapProducts = [];
// products.forEach((product) => {
//     if (product.price <= 100) {
//         cheapProducts.push = (product)
//     }
// });

// console.log(cheapProducts);  

//VAZIFA
//1---
// const students = [
//     { name: "Quincy", percent: 96 },
//     { name: "Jason", percent: 84 },
//     { name: "Alexis", percent: 100 },
//     { name: "Sam", percent: 65 },
//     { name: "Katie", percent: 90 },
//     { name: "Anna", percent: 75 },
//   ];
//   let gradeStudents = [];
//   students.forEach((student) => {
//     if (student.percent >= 90) {
//       gradeStudents.push(student);
//     }
//     console.log(gradeStudents);
// });


//2---
// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// const animalLife = animals.reduce((acc, animal) => {
//     acc[animal] = (acc[animal] || 0) + 1;
//     return acc;
// }, {});
// console.log(animalLife);
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(num => num ** 2);
// console.log(squaredNumbers);




//3---
// const inputArray = [1, 2, 3, 4, 5];
// const squaredArray = inputArray.map(num => num ** 2);
// console.log(squaredArray);


//4---
// const numbers = [1, -4, 12, 0, -3, 29, -150];
// const sum = numbers
//     .filter(num => num > 0)
//     .reduce((acc, num) => acc + num, 0);
// console.log(sum);


//7---
// const input = [1, 2, 3, 4, 5];
// const juft = input.filter(num => num % 2 === 0);
// const toq = input.filter(num => num % 2 !== 0);
// console.log(juft);
// console.log(toq);


//8---
// const remove = arr => {
//     return arr.reduce((acc, current) => {
//         if (acc.includes(current)) {
//             acc.push(current);
//         }
//         return acc;
//     }, []);
// };
// const numbers = [1, 2, 3, 4, 1, 5, 2, 6];
// const unique = remove(numbers);
// console.log(unique);

//14---
// const numbers = [1, 2, 3, 4, 5];
// const id5 = numbers.find(num => num === 5);
// if (id5 !== undefined) {
//   console.log("Element nomi yo'q.");
// } else {
//   console.log("Id si 5 bo'lgan element topilmadi.");
// }


//15---
// let products = [
//     {
//       id: 6,
//       name: "Smarthpone",
//       price: 12000,
//       rating: 4.5,
//       discount: 20,
//     },
//     {
//       id: 2,
//       name: "Acer",
//       price: 10000,
//       rating: 4.3,
//       discount: 10,
//     },
//     {
//       id: 1,
//       name: "Mac book",
//       price: 17000,
//       rating: 4.7,
//       discount: 40,
//     },
//     {
//       id: 4,
//       name: "HP",
//       price: 21000,
//       rating: 4.1,
//       discount: 30,
//     },
//     {
//       id: 5,
//       name: "Dell",
//       price: 35000,
//       rating: 4.9,
//       discount: 30,
//     },
//   ];
//   let filtered = products.filter(product => product.id == 4);
//   console.log(filtered);
  

//17---
// function getTruthyFalsy(arr) {
//     const truthy = arr.filter(item => item);
//     const falsy = arr.filter(item => !item); 
//     return {truthy: truthy, falsy: falsy};
// }
// const result = getTruthyFalsy(testArray);
// console.log(result);


//18---
// function get(str) {
//     const words = str.split(' '); 
//     const wordLengths = words.map(word => word.length); 
//     return wordLengths;
// }
// const input = "Men Abdulaziz Programmerman";
// const word = get(input);
// console.log(word);


//19---
// function chec(m) {
//     const word = m.split(' ');
//     const hasEmptySpace = word.some(word => word === ''); 
//     return hasEmptySpace;
// }
// const input = "Men Abdulaziz Programmerman";
// const empty = chec(input);
// console.log(empty);


//21---
// function digitSum(number) {
//     let res = number % 10;
//     let sem = Math.floor(number / 10);
//     if (number > 0) {
//         return res + digitSum(sem);
//     } else {
//         return 0; 
//     }
// }
// console.log(digitSum(123)); 
// console.log(digitSum(987)); 


//25---
// const pupils = [
//     { name: "Elbek", percent: 95 },
//     { name: "Zafar", percent: 78 },
//     { name: "Aziz", percent: 83 },
//     { name: "Jasur", percent: 88 },
//     { name: "Bobur", percent: 66 },
//     { name: "Kamron", percent: 75 },
// ];
// const passed = pupils.reduce((count, pupil) => {
//     if (pupil.percent >= 70) {
//         return count + 1; 
//     } else {
//         return count; 
//     }
// }, 0);
// const failed = pupils.length - passed;
// console.log("O'tganlar:", passed);
// console.log("O'ta olmaganlar:", failed);
