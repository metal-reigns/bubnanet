/*const objectA = {
    a: 10,
    b: true
}
const copyOfA = objectA
copyOfA.c = 'abc'
console.log(objectA.c)*/

/*function a(){
    console.log('Hey there')
}
a() 
a = 10
a()*/

/*const a = () => {
    console.log('Hey there')
}
a()

a=10
a()*/
/*const myCity = {
    city: 'New York'
}
myCity.popular = true
console.log(myCity)
myCity.country = 'USA'
console.log(myCity)*/
/*const myCity ={
    city: 'New York'
}
myCity['popular']=true
console.log(myCity)

const countryPopetryName = 'country'
myCity[countryPopetryName] = 'USA'
console.log(myCity)*/
/*const myCity = {
    city: 'New York',
    info: {
        isPopular: true,
        country: 'USA'
    }
}
console.log(myCity.info.isPopular) 
delete myCity.info['isPopular']
console.log(myCity)*/
/*
const name = 'Anton'
const postsQty = 23

const userProfile = {
    name,
    postsQty,
    hasSignedAgreement: false
}*/
// Сокращенные свойства рекумендуется размещать в начале объекта
/*
const myCity = {
    city: 'New York',
    cityGreeting: function () {
        console.log('Greetings!!!')
    }
}
myCity.cityGreeting()
*/
/*
const myCity = {
    city: 'New York',
    cityGreeting(){
        console.log('Greetings!!!')
    }
}
myCity.cityGreeting()
*/
// Мутированме копий
/*
const person = {
    name: 'Bob',
    age: 25
}
const person2 = person
person2.age = 26
person2.isAdult = true
console.log(person.age) //26
console.log(person.isAdult) // true*/
// Вариант 1
/*
const person = {
    name: 'Bob',
    age: 25
}
const person2 = Object.assign({}, person)
person2.age = 26
console.log(person2.age)
console.log(person.age)*/

//Вариант2
/*
const person = {
    name: 'Bob',
    age: 25
}
const person2 = {...person}
person2.name = 'Alice'
console.log(person2.name) // Alice
console.log(person.name) // Bob */

//Вариант 3
/*
const person = {
    name: 'Bob',
    age: 25
}
const person2 = JSON.parse(JSON.stringify(person))
person2.name = 'Alice'
console.log(person2.name) //Alice
console.log(person.name) //Bob */

//Функции
/*
let a = 5
let b = 3
function sum(a,b) {
    const c = a + b
    console.log(c)
}
sum(a,b)
a = 8
b = 12

sum(a,b)
*/
/*
function myFn(a,b) {
    let c
    a = a + 1
    c = a + b
    return c
}
console.log(myFn(5,7)) */
/*
const personOne = {
    name: 'Bob',
    age: 21
}
function increasePersonAge(person) {
    person.age += 1
    return person
}
increasePersonAge(personOne)
console.log(personOne.age) */
/*
const personOne = {
    name: 'Bob',
    age: 21
}
function increasePersonAge(person) {
    const updatedPerson = Object.assign({}, person)
    updatedPerson.age += 1
    return updatedPerson
}
const updatePersonOne = increasePersonAge(personOne)
console.log(personOne.age) //21
console.log(updatePersonOne.age) //22  */
/*
function printMyName() {
    console.log('Anton')
}

console.log('Start')

setTimeout(printMyName, 1000) */
/*
const a = 5

function myFn() {
    function innerFn(){
        console.log(a)
 
   }
   innerFn()
}

myFn()
*/
// Жизненный цикл переменных
/*
let a
let b 

function myFn() {
    let b 
    a = true 
    b = 10
    console.log(a) // true
}
    myFn()

    console.log(a) // true
    console.log(b) // undefined */
    
    /*let a = ('')
  console.log(!!a)*/

  /*const button = {
      width: 200,
      text: 'Buy',
      color: 'Black'
  }
  const redButton = {
     // ...button,
      color: 'red',
      ...button
  }
  console.table(redButton) */
//H Объединение объектов с помощью ...
  
/*const buttonInfo = {
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
  console.table(button) */

  /*const hello = 'Hello'
  const world = 'World'
  const greeting = `${hello} ${world}`
  console.log(greeting)*/

  //Функциональное выражение
/*
  setTimeout(function() {
      console.log('Отложенное сообщение')
  },1000) */

  //Стрелочная функция
/*
  setTimeout(()=>{
      console.log('Отложенное сообщение')
  }, 1000) */

  /*const a = function(value, multiplier = 1) {
      return value * multiplier
    }
    console.log(a(10,2))
    console.log(a(5))*/
/* Ошибка
setTimeout(console.log('Задержка вывода'), 1000)

const b = (value, multiplier = 1) =>{
    return value*multiplier
}
console.log(b(9,2))
console.log(b(6)) */

//console.dir
/*
const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt,
})
 const firstPost = {
     id: 1,
     author: 'Anton'
 }
const output = (newPost(firstPost))
console.table(output) */
// TRY/CATCH
/*
const fnWithError = () => {
    throw new Error('Some Error')
}
try{
  fnWithError()
} catch (error){
console.error(error)
console.log(error.message)
}
console.log('Continue...') */ 

//ИНСТРУКЦИИ
/*
let a;

const b = 5;

if (a>b) {
    console.log('a is larer');
}

for (let i = 0; i++; i < 5) {
    console.log(i); 
} */
/*
function  myFn(a) {
    console.log(a)
}

const b = true;
let c = 10;

myFn(2+3) //5
myFm(b) //true
myFn(c = C + 1) //1
myFn(c = c + 1;) // Uncaught SyntaxError
myFn(let d) //Uncaught SyntaxError */

// Массивы
/*
const myArray = [1, 2, 3]
console.log(myArray) // [1, 2, 3]

const myArray2 = new Array(1, 2, 3)
console.log(myArray2) */
/*
const myArray = [1, 2, 3, 4]
console.log(myArray)
console.log(myArray.length)

myArray[2] = 'abc'

console.log(myArray)
console.log(myArray[2])

myArray[4] = true

console.log(myArray)
console.log(myArray.length) */

/*
const myArray = [1, 2, 3]
console.log(myArray)

myArray.push(4)

console.log(myArray) // [1, 2, 3, 4]

myArray.push(true)

console.log(myArray) // [1, 2, 3, 4, true] */

 


