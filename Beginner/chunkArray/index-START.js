/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function chunkArray(array, size) {
    let arr = []


    for(let i = 1; i <= Math.ceil(array.length/size); i++) {
        let end = i * size
        arr.push([...array.slice(end-size, end)])
    }

    return arr
}

console.log(chunkArray([1, 2, 3, 3, 3, 1, 4, 5, 2], 3))

module.exports = chunkArray