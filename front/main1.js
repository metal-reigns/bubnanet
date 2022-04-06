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

 // Передача значения по ссылке

 const personOne = {
     name: 'Bob',
     age: 21,
     lol: 2
 }

 function increasePersonAge(person) { // Функция мутирует внешний объект
     person.lol += 1
     return person
 }

 increasePersonAge(personOne) // Передача объекта по ссылке
 console.log(personOne.lol)

 // Создание копий объекта без мутации

 const personOne = {
     name: 'Bob',
     age: 21
 }

 function increasePersonAge(person) {
     const updatedPerson = Object.assign({}, person)
     updatedPerson.age += 1
     return updatedPerson
 }

 const updatedPersonOne = increasePersonAge(personOne)
 console.log(personOne.age) //21
 console.log(updatedPersonOne.age) // 22

 // Колбэк функции

 function printMyName() {
     console.log('Anton')
 }

 setTimeout(printMyName, 1000) 

// Цепочка областей видимости

const a = 5

function myFn() {
    function innerFn() {
        console.log(a) // 5
    }
    innerFn()
}
 myFn()


// Жизненный цикл

let a // 1) объявление а  в глобальной области видимости. Её значение undefined
let b // 1) объявление b  в глобальной области видимости. Её значение undefined

function myFn() {
    let b // объявление b в зоне видимости функции
    a = true // 3) объявлена ли а в зоне видимости функции? НЕТ - во внешней области? ДА - Присваение значения true глобальной переменной
    b = 10 // 3)объявлена ли b в рамках функции? ДА - присвоение этой переменной значение 10
    console.log(b) // 10 - это значение в области видимости функции!!!
}

myFn() // 2) Вызов функции myFn

console.log(a) // 4) переменная имеет значение true
console.log(b) // undefined - всё также имеет значение undefined в глобальной видимости, где она вызвана

//Пример плохого кода
'use strict'

function myFn() {
    a = true
    console.log(a)
}

myFn() // true

console.log(a) // true

a = 10
console.log(typeof a)
console.log(typeof a === 'number')

a = ''
b = 'Tony'
console.log(a || b)

let b = 10
b && console.log('Execute') // Execute
//
let b 
b && console.log('Execute') // undefined

const button = {
    width" 200,
    text: 'Buy'
}

const redButton = {
    ...button
    color: 'red'
}

console.table(redButton)
