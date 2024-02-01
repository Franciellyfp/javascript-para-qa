// Functions

function sum(a, b){
    return a + b
}

console.log(sum(1, 2))

const value = sum(10, 12)

console.log(value)

const sum2 = function(a, b){
    return a + b
}

console.log(sum2(2, 3))

const sum3 = (a, b) => {
    return a + b
}

console.log(sum3(4, 2))

const sum4 = (a, b) => a + b

console.log(sum4(6, 6))

const greeting = ((name) => `Hi, ${name}. what's up?`)

console.log(greeting('Francielly'))

// Conditions

let deliveryWithoutBugs = false

if (deliveryWithoutBugs) {
    console.log('Whoohoo!')
} else {
    console.log('Shame!')
}

function evaluateSprint(deliveryWithoutBugs){
    if (deliveryWithoutBugs) {
        console.log('Whoohoo!')
    } else {
        console.log('Shame!')
    }
}

evaluateSprint(true)

let signal = 'green'

function checkSignal(signal){
    if (signal === 'green') {
        console.log('Go ahead')
    } else if (signal === 'red') {
        console.log('Stop')
    } else {
        console.log('Heads up')
    }
}

checkSignal(signal)

signal = 'yellow'

checkSignal(signal)

signal = 'red'

checkSignal(signal)

const expression = 'Papayas'
switch (expression){
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.')
        break
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.')
        break
    default:
        console.log(`Sorry, we are out of ${expression}`)
}

// Loops 

function emphasizesWord(word, n) {
    let i = 0

    while(i < n){
        console.log(`${word}!`)
        i++
    }
}

emphasizesWord('Javascript', 3)

// Loops in arrays

const pizzas = ['peperoni', 'margherita', 'chocolate', 'four-cheese']

for (let i = 0; i < pizzas.length; i++) {
    console.log(`Nhumy, ${pizzas[i]} pizza!`)
}

for (const pizza of pizzas) {
    console.log(`Nhumy, ${pizza} pizza!`)
  
}

// Iterators

pizzas.forEach(pizza => {
    console.log(`Nhumy, ${pizza} pizza!`)
})

const tastyPizzas = pizzas.map(pizza => `Pizza of ${pizza}`)

console.log(tastyPizzas)

const pizzasWithoutHifem = pizzas.filter(pizza => !pizza.includes('-'))

console.log(pizzasWithoutHifem)

// method reduce

const arrayOfNumbers = [1, 2, 3, 4, 5]

const sum5 = arrayOfNumbers.reduce((previousValue, currentValue) => previousValue + currentValue)

console.log(`Sum of ${arrayOfNumbers} = ${sum5}`)

const reducer = ((previousValue, currentValue) => previousValue + currentValue)

const sum6 = arrayOfNumbers.reduce(reducer)

console.log(`Sum of ${arrayOfNumbers} = ${sum6}`)

// Loops in objects

const product = {
    name: 'Iphone 15',
    price: 799,
    hasWarranty: true
}

for (property in product) {
    console.log(`${property}: ${product[property]}`)
}

// Libs/modules/packages, require, module.exports

const myModule = require('./myModule')

myModule()