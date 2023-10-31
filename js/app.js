// Fecha actual
const currentDate = new Date()

console.log(currentDate)

// Año actual
console.log(currentDate.getFullYear())

// Mes actual
console.log(currentDate.getMonth())

// Día actual
console.log(currentDate.getDate())

// Hora actual
console.log(currentDate.getHours())

// Minutos actual
console.log(currentDate.getMinutes())

// Segundos actual
console.log(currentDate.getSeconds())

// Mili segundos actual
console.log(currentDate.getMilliseconds())

// Día de la semana actual
console.log(currentDate.getDay())

// Fecha actual en formato ISO
console.log(currentDate.toISOString())

// Fecha actual en formato UTC
console.log(currentDate.toUTCString())

// Fecha actual en formato local
console.log(currentDate.toLocaleDateString())

// Fecha actual en formato local
console.log(currentDate.toLocaleTimeString())

// Fecha actual en formato local
console.log(currentDate.getTime())

// Establecer año
console.log(currentDate.setFullYear(2025))

console.log(currentDate)

console.log('------------------------')

// https://moment.github.io/luxon/#/tour -> Documentación de Luxon

// eslint-disable-next-line no-undef
const dt = luxon.DateTime

const dateEs = dt.now().setLocale('es')

console.log(dateEs.toFormat('cccc, dd - LLLL - yyyy, h:mm:ss a'))

console.log(dateEs.plus({ day: 3 }).toFormat('cccc, dd - LLLL - yyyy'))
