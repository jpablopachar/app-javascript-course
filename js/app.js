const phones = [
  { name: 'Samsung s23 ultra', price: 1500, mark: 'Samsung' },
  { name: 'Iphone 15 pro max', price: 1700, mark: 'Apple' },
  { name: 'Xiaomi 13 ultra', price: 1300, mark: 'Xiaomi' },
  { name: 'Google Pixel 8 Pro', price: 1300, mark: 'Google' },
  { name: 'Huawei Mate 60 pro', price: 1400, mark: 'Huawei' },
  { name: 'Xiaomi Poco F3', price: 350, mark: 'Xiaomi' }
]
const markToSearch = 'Apple'
const markToFiler = 'Xiaomi'
const expensivePrice = 1000

// Some: Devuelve true si al menos un elemento cumple la condición, en caso contrario devuelve false
const exists = phones.some(phone => phone.mark === markToSearch)

console.log(`La marca del teléfono ${exists ? 'está disponible' : 'no está disponible'}`)

// Find Index: Devuelve el índice del primer elemento que cumpla la condición, en caso de no encontrarlo devuelve -1
const index = phones.findIndex(phone => phone.mark === markToSearch)

console.log(`El marca del teléfono ${index !== -1 ? `se encuentra en la posición ${index}` : 'no se ha encontrado'}`)

// Reduce: Devuelve un valor único a partir de un array
const total = phones.reduce((accumulator, phone) => accumulator + phone.price, 0)

console.log(`El precio total de los teléfonos es de $${total}`)

// Filter: Devuelve un array con los elementos que cumplan la condición, en caso de no encontrar ninguno devuelve un array vacío
const filteredPhones = phones.filter(phone => phone.mark === markToFiler)

console.log(`Los teléfonos de la marca ${markToFiler} son: ${filteredPhones.map(phone => phone.name).join(', ')}`)

// Every: Devuelve true si todos los elementos cumplen la condición, en caso contrario devuelve false
const allPhonesAreExpensive = phones.every(phone => phone.price > expensivePrice)

console.log(`¿Todos los teléfonos superan los $${expensivePrice}? ${allPhonesAreExpensive ? 'Sí' : 'No'}`)
