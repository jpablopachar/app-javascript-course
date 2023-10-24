// Declaración de función
function sum1 () {
  console.log(5 + 5)
}

sum1()

// Declaración de función con parámetros
function sum2 (a, b) {
  console.log(a + b)
}

sum2(2, 2)

// Declaración de función con parámetros y retorno
function sum3 (a, b) {
  return a + b
}

console.log(sum3(3, 3))

// Expresión de función
const sum4 = function () {
  console.log(4 + 4)
}

sum4()

// Diferencia entre una función y un método
const number1 = '5'
const number2 = 10

console.log(parseInt(number1))

console.log(number2.toString())

// Comunicación entre funciones
function start () {
  console.log('Inicio')

  middle()
}

function middle () {
  console.log('Medio')

  end()
}

function end () {
  console.log('Final')
}

start()

// Funciones en un objeto y array functions
const myDailyRoutine = {
  standUp: function () {
    console.log('Levantarse')
  },
  selectRoutine: (routine) => {
    switch (routine) {
      case 1:
        console.log('Tomar una ducha')
        break
      case 2:
        console.log('Desayunar')
        break
      case 3:
        console.log('Orar a Dios')
        break
      default:
        console.log('Ir al trabajo')
        break
    }
  },
  returnHome: () => {
    return 'Regresar a casa'
  }
}

myDailyRoutine.standUp()
myDailyRoutine.selectRoutine(3)
myDailyRoutine.selectRoutine(2)
myDailyRoutine.selectRoutine()

console.log(myDailyRoutine.returnHome())
