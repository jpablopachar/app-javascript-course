const number1 = 40
const number2 = 50.1
const number3 = -5
const number4 = 3.141592
const number5 = 20

let number6 = 10

console.log(number1)
console.log(number2)
console.log(number3)
console.log(number4)

// Operadores aritméticos

console.log(number1 + number5)
console.log(number1 - number5)
console.log(number1 * number5)
console.log(number1 / number5)
console.log(number1 % number5)

// Redondear números
console.log(Math.round(number2))

// Redondear hacia arriba
console.log(Math.ceil(number2))

// Redondear hacia abajo
console.log(Math.floor(number2))

// Raíz cuadrada
console.log(Math.sqrt(number1))

// Absoluto
console.log(Math.abs(number3))

// Potencia
console.log(Math.pow(number5, 3))

// Número aleatorio
console.log(Math.random())

// Orden de las operaciones
console.log(number1 + number5 + number1)

console.log((number1 + number5) * number1)

console.log((number1 + number5) * 0.2)

console.log((number1 + number5) * number2)

// Incremento

number6++

console.log(number6)

// Decremento

number6--

console.log(number6)

// Operadores de asignación

number6 += 5

console.log(number6)

number6 -= 5

console.log(number6)

number6 *= 5

console.log(number6)

number6 /= 5

console.log(number6)

// Operadores de comparación

console.log(number1 === number5)

console.log(number1 !== number5)

console.log(number1 > number5)

console.log(number1 < number5)

console.log(number1 >= number5)

console.log(number1 <= number5)

// Operaciones con strings

const text1 = '20'
const text2 = '20.1'
const text3 = 'Uno'

console.log(Number.parseInt(text1))

console.log(Number.parseFloat(text2))

// Si el string no es un número, devuelve NaN
console.log(Number.parseInt(text3))

// Revisa si un número es entero
console.log(Number.isInteger(text1))

console.log(Number.isInteger(20))
