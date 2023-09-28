/* Exercício: Pergunte ao usuário seu nome utilizando o comando
prompt() Em seguida, pergunte ao usuário sua idade.
Se a idade do usuário for menor que 18 anos, exiba na tela 
por meio do comando alert() que o usuário em questão é
menor de idade. Se não, exiba na tela que o usuário é maior de
idade.
*/

var nome, idade;


nome = prompt("Digite seu nome: ");
idade = prompt("Digite sua idade: ");

if (idade < 18) {
    alert("Você é menor de idade");
}

else {
    alert("Você é maior de idade!");
}