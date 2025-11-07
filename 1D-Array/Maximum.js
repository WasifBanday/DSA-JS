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

let data = [1, 2, 3, 4, 5, 6, 6, 7, 10] // 10 billion target ----> constant value ==== constant time 

const findTarget = (target) => {
        let ans = false // 1
        for (let i = 0; i < 100; i++) {
            if (data[i] == target) {
                ans = true // 1
            }
        } // n
        return ans // 1
    } // linear search


let target = 6; // 1
let result = findTarget(target) // 1
if (target) {
    console.log("Yes") // 1
} else {
    console.log("No")

}


// omaga ----> best case 
// theta -----> average case


// Big O -----> worst case O() // important 


// always consier big value 
// erase constant time (1 , 1, 1, 1 n  + n) ====== TC = O(n) TC = O(1)