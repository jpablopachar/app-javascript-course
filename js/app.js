const product1 = {
  name: 'Mochila Adidas',
  price: 50,
  isAvailable: true
}

// Acceder a los valores de un objeto
console.log(product1.name)
console.log(product1.price)

// Modificar valores de un objeto
product1.price = 60

console.log(product1)

// Agregar propiedades a un objeto
product1.image = 'image.jpg'

console.log(product1)

// Eliminar propiedades de un objeto
delete product1.isAvailable

console.log(product1)

const price1 = product1.price

console.log(price1)

// Destructuring
const { price, image } = product1

console.log(image)

console.log(price)

const product2 = {
  name: 'Monitor de 20 pulgadas',
  price: 180,
  isAvailable: true,
  image: {
    url: 'image.jpg'
  }
}

const { image: { url } } = product2

console.log(url)

const product3 = {
  name: 'Monitor de 20 pulgadas',
  price: 180,
  isAvailable: true,
  image: {
    url: 'image.jpg',
    dimensions: {
      width: 100,
      height: 100
    }
  },
  information: {
    location: {
      city: 'CDMX',
      country: 'México',
      zipCode: 12345,
      address: {
        street: 'Calle 123',
        number: 12
      }
    }
  }
}

const { information: { location: { address: { street } } } } = product3

console.log(street)

// Congelar un objeto para que no se pueda modificar
const product4 = {
  name: 'Monitor de 20 pulgadas',
  price: 50
}

Object.freeze(product4)

product4.image = 'image.jpg'

console.log(product4)

// Comprobar si un objeto está congelado
console.log(Object.isFrozen(product4))

// Sellar un objeto para que no se puedan agregar ni eliminar propiedades
const product5 = {
  name: 'Monitor de 20 pulgadas',
  price: 50,
  isAvailable: true
}

Object.seal(product5)

product5.isAvailable = false

console.log(product5)

// Comprobar si un objeto está sellado
console.log(Object.isSealed(product5))

const product6 = {
  name: 'Monitor de 20 pulgadas',
  price: 50,
  isAvailable: true
}

const imageInfo = {
  url: 'image.jpg',
  dimensions: {
    width: 100,
    height: 100
  }
}

// Método assign
const result1 = Object.assign(product6, imageInfo)

console.log(result1)

// Spread Operator
const result2 = { ...product6, ...imageInfo }

console.log(result2)

const product7 = {
  name: 'Monitor de 20 pulgadas',
  price: 50,
  isAvailable: true,
  viewInfo: function () {
    console.log(`El producto ${this.name} tiene un precio de ${this.price}`)
  }
}

product7.viewInfo()

// Obtener las llaves de un objeto
console.log(Object.keys(product6))

// Obtener los valores de un objeto
console.log(Object.values(product6))

// Obtener las llaves y valores de un objeto
console.log(Object.entries(product6))

// Comprobar si un objeto tiene una propiedad
console.log(Object.prototype.hasOwnProperty.call(product6, 'name'))
