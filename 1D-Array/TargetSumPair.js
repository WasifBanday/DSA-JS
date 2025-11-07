// Find the total number of pairs in the Array whose sum is equal to the given value 'x'  ?

let array = [2, 3, 4, 5, 6, 7, 8, 9]
    // let pair = 0

// for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length - 1; j++) {

//         if (array[i] + array[j] == 6) {
//             pair = pair + 1;
//         }
//     }

// }
// console.log(pair)

function TargetSum(x) {
    let pair = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length - 1; j++) {

            if (array[i] + array[j] == x) {
                pair = pair + 1;
            }
        }

    }
    return pair
}
let result1 = TargetSum(7)
let result2 = TargetSum(9)
console.log(result1)
console.log(result2)