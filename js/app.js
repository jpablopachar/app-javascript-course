const client = new Map()

// Agregar un elemento
client.set('name', 'Juan')
client.set('type', 'Premium')
client.set('balance', 3000)

console.log(client)

// Obtener el tamaño del Map
console.log(client.size)

// Comprobar que un valor existe
console.log(client.has('name'))

// Iterar en el Map
client.forEach((data, index) => {
  console.log(`${index}: ${data}`)
})

// Obtener un valor
console.log(client.get('name'))

// Borrar un elemento
client.delete('balance')

console.log(client)

// Limpiar el Map
client.clear()

console.log(client)

console.log('---------------------------')

// WeakMap
const product = { id: 6, name: 'Camisa' }

const weakMap = new WeakMap()

// Agregar un elemento
weakMap.set(product, 'Disponible')

console.log(weakMap)

// Comprobar que un valor existe
console.log(weakMap.has(product))

// Obtener un valor
console.log(weakMap.get(product))

// Borrar un elemento
weakMap.delete(product)

console.log(weakMap)
