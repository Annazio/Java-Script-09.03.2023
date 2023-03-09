// Задание 1
const nummern = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
    for(let i = 0; i < nummern.length; i++) {
        if(nummern[i] % 2 == 1) {
        console.log(nummern[i])
    }      
}

// Задание 2
for(let i = 55; i > 19; i--) {
    console.log(i)
}

// Задание 3

const numbers = [3, 5, 11, 2, 8, 1, 6]
    console.log(numbers)

// Задание 4

const numbers_squared = []

const square0 = numbers[0]*numbers[0]
const square1 = numbers[1]*numbers[1]
const square2 = numbers[2]*numbers[2]
const square3 = numbers[3]*numbers[3]
const square4 = numbers[4]*numbers[4]
const square5 = numbers[5]*numbers[5]
const square6 = numbers[6]*numbers[6]

numbers_squared.push(square0, square1, square2, square3, square4, square5, square6)
console.log(numbers_squared)

//  Задание 5

const last_elem = numbers_squared[6]
console.log(last_elem)

// Задание 6

const user = {
    first_name: 'Ivan', 
    last_name: 'Ivanov', 
    age: 20, 
    salary: 500
    }
    
    console.log(`User's name is ${user.first_name, user.last_name}. He is ${user.age} years old.`)
    