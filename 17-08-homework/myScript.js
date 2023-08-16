// 1. Without. Напишите функцию, возвращает новый массив без предоставленных значений. Используйте примитивные типы.

// const data = [1,2,3,4,5,6,7,8,9,10];
//
// const withuot = (array, ...args) => {
//     const result = array.filter(item => !args.includes(item));
//     return result;
// }
//
// console.log(withuot(data, 1,3,5,7,9));


// ---------------------------------------------------------------------------------------------------------------------


// 2. Unique. Напишите функцию, которая убирает повторяющиеся значения.

// const data = [1, 2, 4, 13, 2, 5, 4, 1, 5, 3, "", 22, 4, 7, 34, 2, "", 3, 5];
//
// const unique = (array) => {
//     let result = array.filter((item, index) => array.indexOf(item) === index);
//     return result;
//
// }
//
// console.log(unique(data));


// ---------------------------------------------------------------------------------------------------------------------


// 3. IsEqual. Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.

// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4];
// const arr3 = [1, 2, 3, 5];
// const arr4 = [1, 2, 3, 4, 5];
//
// const isEqual = (firstArray, secondArray) => {
//     if (firstArray.length !== secondArray.length) {
//         return false;
//     }
//     for (let i = 0; i < firstArray.length; i++) {
//         if (firstArray[i] !== secondArray[i]) {
//             return false;
//         }
//     }
//     return true;
// }
//
// console.log(isEqual(arr1, arr2));
// console.log(isEqual(arr1, arr3));
// console.log(isEqual(arr1, arr4));


// ---------------------------------------------------------------------------------------------------------------------

// 4. Chunk. Напишите функцию, которая разделяет массив на части
//    заданного размера.

// const data = [1, 2, 3, 4, 5, 6, 7];
//
// const chunk = (array, size) => {
//     const subArray = [];
//     for (let i = 0; i < Math.ceil(array.length / size); i++) {
//         subArray[i] = array.slice((i * size), (i * size) + size);
//     }
//     return subArray;
// }
//
// console.log(chunk(data, 2));
// console.log(chunk(data, 3));


// ---------------------------------------------------------------------------------------------------------------------


//  5. Intersection. Напишите функцию, которая создаст массив из уникальных значений,
//     которые есть в каждом из предоставленных массивов. Используйте примитивные типы данных.

// const arr1 = [1, 2];
// const arr2 = [2, 3];
// const arr3 = ['a', 'b'];
// const arr4 = ['b', 'c'];
// const arr5 = ['b', 'e', 'c'];
// const arr6 = ['b', 'b', 'e'];
// const arr7 = ['b', 'c', 'e'];
// const arr8 = ['b', 'e', 'c'];
//
// const intersection = (...arrays) => {
//     let result = arrays[0].filter(item => arrays[1].includes(item));
//     if (arrays.length > 2) {
//         intersection(result, ...arrays.slice(2));
//     }
//     return result.filter((item, index) => result.indexOf(item) === index);
// }


// console.log(intersection(arr1, arr2));
// console.log(intersection(arr3, arr4, arr5));
// console.log(intersection(arr6, arr7, arr8));