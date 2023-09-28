var numero = prompt("Digite a tabuada que deseja: ");

for (contador = 1; contador <= 10; contador = contador +1) {
    var resultado = numero * contador;
    alert(numero + " x " + contador + " = " + resultado);
}