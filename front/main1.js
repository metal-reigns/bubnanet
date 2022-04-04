let a = 7
console.log(a)
let myName = 'Anton'
console.log(myName)
// Объект
const objectA = { 
    a: 10,
    b: true
}
console.log(objectA) // a = 10, b = true
const copyOfA = objectA // копируется  ссылка с одной переменной в другую
 copyOfA.a = 20
 console.log(copyOfA.a) // a = 20
 console.log(objectA) // a = 20, b = true

 function a(){
     console.log('Hey, Anton')
 }

 a() // Hey, Anton

 a = 10

 a() // Uncaught TypeError: a is not a function

const a = () => {
    console.log('Hey, Anton')
}

a() // Hey, Anton

a = 10 // TypeError: Assigment to constant variable

a() // Hey, Anton

const myCity = {
    city: 'New York',
    popular: true,
    country: 'USA'
}

console.log(myCity.city) //New York

// Изменение текущих значений свойств объекта

myCity.popular = false

console.log(myCity.popular) // false

// Добавление новых свойств объекта

myCity.count = 100

console.log(myCity) //{ city: 'New York', popular: false, country: 'USA', count: 100 }

delete myCity.count // Удаление свойства из объекта

myCity['count'] = 100 // Доступ к значению свойства с исп. скобок

const myCity = {
    city: 'New York'
}
myCity['popular'] = true

console.log(myCity) // { city: 'New York', popular: true }

const countryPropertyName =  'country'

myCity[countryPropertyName] = 'USA'

console.log(myCity) // { city: 'New York', popular: true, country: 'USA' }

const myCity = {
    city: 'New York',
    info: {
        isPopular: true,
        country: 'USA'
    }
}

console.log(myCity.info.isPopular) // true

delete myCity.info['isPopular'] // Комбинация точечной записи и скобочной

console.log(myCity) // { city: 'New York', info: { country: 'USA' } }
/*
const name = 'Anton'
const postQty = 28

const userProfile = {
    name: name,
    postQty: postQty,
    hasSignedAgreement: false
}

console.log(userProfile) //{ name: 'Anton', postQty: 28, hasSignedAgreement: false }
*/
// Сокращённый формат записи свойств

const name = 'Anton'
const postQty = 28

const userProfile = {
    name,
    postQty,
    hasSignedAgreement: false
}

console.log(userProfile) // { name: 'Anton', postQty: 28, hasSignedAgreement: false }

const myCity = {
    city: 'New York',
    cityGreeting: function (){
        console.log('Greetings!!')
    }
}

myCity.cityGreeting()

// Сокращённый вариант объявления функции
const myCity = {
    city: 'New York',
    cityGreeting(){
        console.log('Greetings!!')
    }
}

myCity.cityGreeting()

//Мутация объектов

const person = {
    name: 'Anton',
    age: 21
}

person.age = 22
person.isAdult = true

console.log(person.age) // 22
console.log(person.isAdult) // true

// Мутирование копий

const person = {
    name: 'Anton',
    age: 25
}

const person2 = person

person2.age = 26
person2.isAdult = true

console.log(person.age) // 26
console.log(person.isAdult) // true

// Как избежать мутаций?
// Вариант 1 - Object.assign({}, person)

const person = {
    name: 'Anton',
    age: 25
}

const person2 = Object.assign({}, person)

person2.age = 26

console.log(person2.age) //26
console.log(person.age) //25

// Вариант 2
// const person2 = {...person}

const person = {
    name: 'Anton',
    age: 25
}

const person2 = {...person}

person2.name = 'Ksenya'

console.log(person2.name) //Ksenya
console.log(person.name) // Anton

//Вариант 3
// const person2 = JSON.parse(JSON.stringify(person))

const person = {
    name: 'Anton',
    age: 25
}

const person2 = JSON.parse(JSON.stringify(person))

person2.name = 'Ksenya'

console.log(person2.name) // Ksenya
console.log(person.name) // Anton

//Функции

 let a = 5
 let b = 3

 function sum(a, b) {
     const c = a + b
     console.log(c)
 }

 sum(a, b) // 8

 a = 8
 b = 12

 sum(a, b) // 20

 //

 function myFn(a, b) {
     let c
     a += 1
     c = a + b
     return c
 }

 console.log(myFn(5, 6))
 console.dir(myFn)