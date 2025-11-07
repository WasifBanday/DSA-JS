let array = [3, 1, 2, 4, 0, 6]


function TargetSumTriplet(n) {
    let count = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            for (let k = j + 1; k < array.length; k++) {
                if (array[i] + array[j] + array[k] == n) {
                    count = count + 1
                }
            }
        }
    }
    return count
}
let result = TargetSumTriplet(5)
console.log(result)