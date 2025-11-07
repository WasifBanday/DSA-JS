// Find the total number of pairs in the Array whose sum is equal to the given value 'x'  ?

let array = [2, 3, 4, 5, 6, 7, 8, 9]
    // for (let i = 0; i < array.length; i++) {
    //     for (let j = i + 1; j < array.length - 1; j++) {

//         if (array[i] + array[j] == 6) {
//             count = count + 1;
//         }
//     }

// }
// console.log(count)

function TargetSum(x) {
    let count = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length - 1; j++) {

            if (array[i] + array[j] == x) {
                count = count + 1;
            }
        }

    }
    return count
}
let result1 = TargetSum(7)
let result2 = TargetSum(9)
console.log(result1)
console.log(result2)