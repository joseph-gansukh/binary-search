// const arrayGenerator = (num) => {
//   let array = []

//   for (let i = 0; i < num; i++) {
//     array.push(Math.floor(Math.random() * num + 1))
//   }

//   return [...new Set(array)].sort((a, b) => a - b)
// }

const array = [
  1, 3, 4, 5, 7, 9, 10, 13, 14, 15, 16, 17,
  19, 21, 22, 24, 25, 27, 30, 31, 33, 36, 39, 40,
  41, 44, 46, 47, 48, 49, 52, 53, 54, 56, 57, 59,
  60, 62, 63, 64, 65, 66, 68, 69, 71, 72, 73, 74,
  75, 76, 78, 81, 82, 83, 84, 85, 86, 87, 89, 92,
  93, 95, 96, 97, 98, 100
]

console.log('array length', array.length)

const linearSearch = (array, number) => {
  console.log('Linear Search')
  let iterationCount = 0;
  for (let i = 0; i < array.length; i++) {
    iterationCount++
    if (array[i] === number) {
      return console.log(`${number} is at index ${i} in this array: [${array}]. \nIteration count: ${iterationCount}\n`)
    }
  }
  return console.log(`${number} is not in this array: [${array}]. \nIteration count: ${iterationCount}\n`)
}

linearSearch([1,2,3,4,5,6,7,8,9,10], 10)
linearSearch(array, 84)


const binarySearch = (array, number) => {
  console.log('Binary Search')
  let leftIndex = 0;
  let rightIndex = array.length - 1
  let iterationCount = 0;
  
  while (leftIndex <= rightIndex) {
    iterationCount++
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    
    if (array[middleIndex] === number) {
      return console.log(`${number} is at index ${middleIndex} in this array: [${array}]. \nIteration count: ${iterationCount}\n`)
    } else if (array[middleIndex] < number) {
      leftIndex = middleIndex + 1
    } else if (array[middleIndex] > number) {
      rightIndex = middleIndex - 1
    }
  }
  
  return console.log(`${number} is not in this array: [${array}]. \nIteration count: ${iterationCount}`)
}

binarySearch([1,2,3,4,5,6,7,8,9,10], 8)
console.log([1,2,3,4,5,6,7,8,9,10].length)
binarySearch(array, 84)


