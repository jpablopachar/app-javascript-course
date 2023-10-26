const cant = 100
const total = 500
const card = false
const check = false
const paymentMethod = 'cash'

let message = ''

// Comparadores === !== > < >= <= && ||
if (cant >= total) {
  console.log('Los fondos son suficientes')
} else if (card) {
  console.log('El cliente tiene tarjeta')
} else if (check) {
  console.log('El cliente tiene cheque')
} else {
  console.log('Fondos insuficientes')
}

// Ternario
message = cant >= total ? 'Los fondos son suficientes' : 'Fondos insuficientes'

console.log(message)

// Switch
switch (paymentMethod) {
  case 'cash':
    console.log('El cliente pagó en efectivo')
    break
  case 'card':
    console.log('El cliente pagó con tarjeta')
    break
  case 'check':
    console.log('El cliente pagó con cheque')
    break
  default:
    console.log('No se ha utilizado un método de pago válido')
    break
}

// Literal Object

const paymentMethods = {
  cash: 'El cliente pagó en efectivo',
  card: 'El cliente pagó con tarjeta',
  check: 'El cliente pagó con cheque',
  default: 'No se ha utilizado un método de pago válido'
}

message = paymentMethods[paymentMethod] || paymentMethods.default

console.log(message)
