const phones = [
  { name: 'Samsung s23 ultra', price: 1500 },
  { name: 'Iphone 15 pro max', price: 1700 },
  { name: 'Xiaomi 13 ultra', price: 1300 },
  { name: 'Google Pixel 8 Pro', price: 1300 },
  { name: 'Huawei Mate 60 pro', price: 1400 }
]

console.log(phones)

// For loop
for (let i = 0; i < phones.length; i++) {
  console.log(phones[i])

  /* if (phones[i].price === 1300) {
    console.log(`Escogí un ${phones[i].name}`)
    break
  } */
}

console.log('---------------------------')

// While loop
let i = 0

while (i < phones.length) {
  console.log(phones[i])
  i++
}

console.log('---------------------------')

// Do while loop
let j = 0

do {
  console.log(phones[j])

  j++
} while (j < phones.length)

console.log('---------------------------')

// For each loop
phones.forEach((phone) => {
  console.log(phone)
})

console.log('---------------------------')

// Map loop
const newPhones = phones.map((phone) => {
  return phone
})

console.log(newPhones)

console.log('---------------------------')

// For of loop
for (const phone of phones) {
  console.log(phone)
}

console.log('---------------------------')

// For in loop
for (const phone in phones) {
  console.log(phones[phone])
}
