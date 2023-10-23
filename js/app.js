// Strings

const product = 'Monitor 20 pulgadas'
const product2 = String('Monitor 24 pulgadas')

console.log(product)
console.log(product2)

const name = 'Juan Pablo Pachar'

// Cantidad de caracteres en el texto
console.log(name.length)

// Posición de la palabra Pablo
console.log(name.indexOf('Pablo'))

const lastName = 'Ortega'

// Incluir lastName en name
console.log(name.includes(lastName))

const productName = 'Monitor de 20 pulgadas'
const price = 30

console.log(`El producto ${productName} tiene un precio de: ${price}`)

// Eliminar espacios en blanco
const testText = '    Hola Mundo    '

// Eliminar del inicio
console.log(testText.trimStart())

// Eliminar del final
console.log(testText.trimEnd())

// Eliminar del inicio y del final
console.log(testText.trimStart().trimEnd())
console.log(testText.trim())

// Reemplazar
console.log(productName.replace('pulgadas', '"'))

// Cortar
console.log(productName.slice(8))
console.log(productName.slice(-11, -3))

// Alternativa a slice
console.log(productName.substring(0, 10))

// Obtener la primera letra de un texto
const user = 'Juan'

console.log(user.substring(0, 1))
console.log(user.charAt(0))

// Repetir una cadena de texto
const text = `${user} `.repeat(3)

console.log(text)

// Dividir un string
console.log(productName.split(' '))

const technologies = 'JavaScript, React, Vue, Angular'

console.log(technologies.split(', '))

const tweet = 'Aprendiendo en el curso de Javascript #Netby'

console.log(tweet.split('#'))

// Convertir a mayúsculas
console.log(productName.toUpperCase())

// Convertir a minúsculas
console.log(productName.toLowerCase())

// Convertir un número a string

console.log(price.toString())
