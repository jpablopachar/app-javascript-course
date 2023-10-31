const shoppingCart = new Set()

// Agregar valores al set
shoppingCart.add('Manzanas')
shoppingCart.add('Carnes')
shoppingCart.add('Cereal')
shoppingCart.add('Shampoo')

console.log(shoppingCart)

// Tamaño del set
console.log(shoppingCart.size)

// Iterar sobre un set
shoppingCart.forEach((product) => {
  console.log(product)
})

// No permite duplicados
shoppingCart.add('Manzanas')

console.log(shoppingCart)

// Comprobar si un valor existe
console.log(shoppingCart.has('Manzanas'))

// Eliminar un valor
shoppingCart.delete('Shampoo')

console.log(shoppingCart)

// Limpiar el set
shoppingCart.clear()

console.log(shoppingCart)

console.log('------------------------')

// Eliminar Ids duplicados

const numbers = [10, 20, 30, 40, 50, 10, 20]

const numbersSet = new Set(numbers)

console.log(numbersSet)

// WeakSet
const client = {
  name: 'Juan',
  balance: 500
}

const car = {
  model: 'Camaro',
  year: 1969,
  price: 500
}

const weakSet = new WeakSet()

weakSet.add(client)
weakSet.add(car)

console.log(weakSet)

// No se puede iterar ni conocer el tamaño

// Remueve el elemento
weakSet.delete(car)

console.log(weakSet)
