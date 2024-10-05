let firstNumber = prompt('Welcome, student! To get started, type the first number')
let secondNumber = prompt('Very good! To get started, now type the second number')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

som = (firstNumber) + (secondNumber)
alert('The result of the sum is ' + som)

sub = (firstNumber) - (secondNumber)
alert('The result of the subtracion is ' + sub)

mul = (firstNumber) * (secondNumber)
alert('The result of the multiplicacion is ' + mul)

div = (firstNumber) / (secondNumber)
alert('The result of the division is ' + div)

rem = (firstNumber) % (secondNumber)
alert('The result the remainder of the division is ' + rem)

if ((som %2) == 0) //%2 para saber se é PAR ou Impar, usar esse símbolo e comparar com 0 //
  {
  alert('A soma dos números é par!')
}

else ((som %2) != 0) 
{
  alert('A soma dos números é impar!')
}

if(firstNumber == secondNumber) 
  {
  alert("O primeiro número é igual ao segundo digitado.")
  }

else (firstNumber != secondNumber)
{
  alert('O primeiro número é diferente do segundo número digitado.')
}