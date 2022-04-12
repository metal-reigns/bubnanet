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
// Оператор разложения на свойства ...
const button = {
    width:'200',
    text: 'Buy'
}

const redButton = {
    ...button,
    color: 'red'
}

console.table(redButton)

const button = {
    width:'200',
    text: 'Buy',
    color: 'green'
}

const redButton = {
    ...button,
    color: 'red'
}

const blackButton = {
    color: 'black',
    ...button
}

console.table(button) // red
console.table(redButton) // green
console.table(blackButton) // green

// Соединение двух объектов оператором ...

const buttonInfo = {
    text: 'Buy'
}

const buttonStyle = {
    color: 'yellow',
    width: 200,
    height: 300
}

const button = {
    ...buttonInfo,
    ...buttonStyle
}

console.table(button)

// Конкатенация строк

const hello = 'Hello'
const world = 'World'

const greetin = hello + ' ' + world
console.log(hello + ' ' + world)
console.log(greetin)

 // Шаблонные строки

const hello = 'Hello'
const world = 'World'

const greetin = `${hello} ${world}`
console.log(greetin)

const name = 'Anton'
const city = 'Minsk'

console.log(`Меня зовут ${name} и Я из ${city}а`)

// Функциональное выражение

setTimeout(function() {
    console.log('Отложенное сообщение')
}, 1000)

// Стрелочная функция

setTimeout(()=>{
    console.log('Отложенное сообщение')
}, 1000)

// Значение параметров по умолчанию

const multByFactor = (value, multiplier = 1) => {
    return value * multiplier
}

console.log(multByFactor(10, 2)) // 20
console.log(multByFactor(5)) // 5

//

const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt
})

const firstPost = {
    id: 1,
    author: 'Anton'
}

console.log(newPost(firstPost))

// TRY/CATCH

const fnWithError = () => {
    throw new Error('Some error')
}

try {
    fnWithError()
} catch (error) {
    console.error(error)
    console.log(error.message)
}

console.log('continue...')

// Массивы

const myArray = [1, 2, 3, 4]
console.log(myArray) // [1, 2, 3, 4]
console.log(myArray.length) // 4

myArray[2] = 'abc'

console.log(myArray) // [1, 2, 'abc', 4]
console.log(myArray[2]) // 'abc'

myArray[4] = true // Добавление 5 элемента в массив

console.log(myArray) // [1, 2, 'abc', 4, true]
console.log(myArray.length) // 5

// PUSH

myArray = [1, 2, 3]
console.log(myArray) // [1, 2, 3]

myArray.push(4)

console.log(myArray) // [1, 2, 3, 4]

myArray.push(true)

console.log(myArray) // [1, 2, 3, 4, true]

// POP 

myArray = [1, 2, 3]
console.log(myArray) // [1, 2, 3]

myArray.pop()

console.log(myArray) // [1, 2]

const removeElement = myArray.pop()

console.log(myArray) // [1]
console.log(removeElement) // 2

// UNSHIFT Добавление элемента в начале массива

const myArray = [1, 2, 3]
console.log(myArray) // [1, 2, 3]

myArray.unshift(true)

console.log(myArray) // [true, 1, 2, 3]

myArray.unshift('abc')

console.log(myArray) // ['abc', true, 1, 2, 3]

// SHIFT метод удаления первого элемента массива

const myArray = [1, 2, 3]
console.log(myArray) // [1, 2, 3]

myArray.shift()

console.log(myArray) // [2, 3]

const removeElement = myArray.shift()

console.log(myArray) // [3]
console.log(removeElement) // 2  

// FOREACH

 const myArray = [1, 2, 3]
 console.log(myArray) // [1, 2, 3]

 const forEachArray = myArray.forEach(el => console.log(el * 2))

 console.log(myArray) // [1, 2, 3] Оригинальный массив не изменился 
 console.log(forEachArray) // undefined
// MAP

const myArray = [1, 2, 3]
console.log(myArray) 

const newArray = myArray.map(el => el * 3)

console.log(newArray) // [3, 6, 9] - формирует новый массив, в отличии от forEach
console.log(myArray) // [1, 2, 3]
//Оригинальный массив не изменился

// Дестрцутизация объектов

const userProfile = {
    name: 'Anton',
    commentsQty: 23,
    hasSignedAgreement: false
}

const { name, commentsQty } = userProfile
const { hasSignedAgreement } = userProfile

console.log(name) // Anton
console.log(commentsQty) // 23

// Деструктуризация массивов

const fruits = [ 'Apple', 'Banana' ]

const [fruitOne, FruitTwo] = fruits

console.log(fruitOne) // Apple
console.log(FruitTwo) // Banana  

// Деструктуризация в функциях

const userProfile = {
    name: 'Anton',
    commentsQty: 23,
    hasSignedAgreement: false
}

const userInfo = ({ name, commentsQty}) => {
    if (!commentsQty) {
        return `User ${name} has no comments`
    }

        return `User ${name} has ${commentsQty} comments`
    }
    console.log(userInfo(userProfile)) // User Anton has 23 comments

    // ИНСТРУКЦИЯ IF 

    const person = {
        age: 20,
        name: ''
    }

    if (!person.name) {
        console.log('Имя не указано')
    }

    // Инструкция IF ELSE и IF ELSE IF

    const age = 25

    if (age > 18) {
        console.log('is adult')
    } else if (age >= 23) {
        console.log('is teenager')
    } else {
        console.log('is child')
    }

    //

    const age = 25

    if (age > 18) {
        console.log('is adult')
    }
    
    if (age >= 12) {
        console.log('is teenager')
    }
    if (age < 12) {
        console.log('is child')
    }

    // Использование IF в функциях

    const sumPositiveNumbers = (a, b) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            return 'One of the arguments is not a number'
        }
        
        if (a <= 0 || b <= 0) {
            return 'Number are not positive'
        }
        
        return a + b
    }

    console.log(sumPositiveNumbers(5, 3))

    // Прмер SWITCH

    const month = 2

    switch (month) {
        case 12:
            console.log('Декабрь')
            break
        case 1:
            console.log('Январь')
            break
        case 2:
            console.log('Февраль')
            break
        default:
            console.log('Это не зимний месяц')
    }

    // Тернарный оператор

    const value = 11

    value
        ? console.log('Условие истинно')
        : console.log('Условие ложно')

    //

    const value1 = 11
    const value2 = 25

    value1 && value2
        ? myFunction(value1, value2)
        : myFunction()

    //

    let value = 11
    console.log(value >=0 ? value : -value) // 11

    let value = -5
    const res = value >= 0 ? value : -value)
    console.log(res) // 5

    // ЦИКЛ FOR

    for (i = 0; i < 5; i++) {
        console.log(i)
    }

    // ЦИКЛ FOR ДЛЯ МАССИВОВ

    const myArray = ['first', 'second', 'third']

    for (let i = 0; i < myArray.length; i++) {
        console.log(myArray[i])
    }

    // МЕТОД МАССИВОВ forEach

    const myArray = ['first', 'second', 'third']

    myArray.forEach((element, index) => {
        console.log(element, index)
    })  
        // 'first'  0
        // 'second' 1
        // 'third'  2

    // ЦИКЛ WHILE

    let i = 0

    while (i < 5) {
        console.log(i)
        i++
    }

    // БЕСКОНЕЧНЫЙ ЦИКЛ

    let i = 0

    while (i < 5) {
        console.log(i)
    }

    // ЦИКЛ DO WHILE

    let i = 0

    do {
        console.log(i)
        i++
    } while (i < 5)

    //

    let i = 10

    do {
        console.log(i)
        i++
    } while (i < 5) // выполнится 1 раз и выведет число 10

    // ЦИКЛ FOR IN (работа с объектом)

    const myObject = {
        x: 10,
        y: true,
        z: 'abc'
    }

    for (const key in myObject) {
        console.log(key, myObject[key])
    }
    /* x 10
    y true
    z abc */

    // FOREACH ДЛЯ ОБЪЕКТОВ

    const myObject = {
        x: 10,
        y: true,
        z: 'abc'
    }

    Object.keys(myObject).forEach(key => { // Получение всех ключей объекта в виде массива
        console.log(key, myObject[key])
    })
    /* x 10
    y true
    z abc */

    const myObject = {
        x: 10,
        y: true,
        z: 'abc'
    }

    Object.values(myObject).forEach(value => { // Получение всех значений свойств объекта в виде массива
        console.log(value)
    })
    // . перед forEach - это метод над объектм myObject

    // Ojbect.keys({name: 'Anton', isStudent: true})  - //  ['name, 'isStudent']
    // Ojbect.values({name: 'Anton', isStudent: true})  - //  ['Anton, 'true']
    