// let array = [1, 2, 3, 4, 5, 6, 6, 7, 10]
// let maxValue = Math.max(...array)
// console.log(maxValue)

// function findVal() {
//     let flag = false;
//     let nums = [1, 2, 3, 4, 5, 6, 6, 7, 10];
//     for (let i = 0; i <= nums.length; i++) {
//         if (10 / nums[i] == 1) {
//             flag = true
//         }
//     }
//     return flag;
// }
// let result = findVal()
// console.log(result)


// [n]

let data = [1, 2, 3, 4, 5, 6, 6, 7, 10]

const findTarget = (target) => {
    let ans = false
    for (let i = 0; i < data.length; i++) {
        if (data[i] == target) {
            ans = true
        }
    }

    return ans
}


let target = 6;

let result = findTarget(target)

if (target) {
    console.log("Yes")
} else {
    console.log("No")

}