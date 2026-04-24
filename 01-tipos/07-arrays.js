
// Arrays animals 
let animals = ['dog', 'cat', 'rabbit']

console.log(animals[0]) // dog
console.log(animals[1]) // cat
console.log(animals[2]) // rabbit

// length of the array
console.log(animals.length) // 3

// push adds an element to the end of the array
animals.push('hamster')
console.log(animals) // ['dog', 'cat', 'rabbit', 'hamster']

// pop removes the last element of the array and returns it
let lastAnimal = animals.pop()
console.log(lastAnimal) // hamster
console.log(animals) // ['dog', 'cat', 'rabbit']

// unshift adds an element to the beginning of the array
animals.unshift('hamster')
console.log(animals) // ['hamster', 'dog', 'cat', 'rabbit']

// shift removes the first element of the array and returns it
let firstAnimal = animals.shift()
console.log(firstAnimal) // hamster
console.log(animals) // ['dog', 'cat', 'rabbit']

// indexOf returns the index of the first occurrence of the element in the array, or -1 if it is not found
console.log(animals.indexOf('cat')) // 1
console.log(animals.indexOf('hamster')) // -1

// includes returns true if the array contains the specified element, and false otherwise
console.log(animals.includes('cat')) // true
console.log(animals.includes('hamster')) // false

// join joins all elements of the array into a string, separated by the specified separator
let animalsString = animals.join(', ')
console.log(animalsString) // 'dog, cat, rabbit'

// split splits a string into an array of substrings, using the specified separator
let animalsArray = animalsString.split(', ')
console.log(animalsArray) // ['dog', 'cat', 'rabbit']

// reverse reverses the order of the elements in the array
animals.reverse()
console.log(animals) // ['rabbit', 'cat', 'dog']

// sort sorts the elements of the array in place and returns the sorted array
animals.sort()
console.log(animals) // ['cat', 'dog', 'rabbit']



let casas = new Array(3)
console.log(casas) // [ <3 empty items> ]
casas[0] = 'casa 1'
casas[1] = 'casa 2'
casas[2] = 'casa 3'
console.log(casas) // ['casa 1', 'casa 2', 'casa 3']    


