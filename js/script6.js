var altura = 1;

for (contador = 5; contador >= altura; contador = contador -1){
    var linha = " ";
   for (var asterisco = 1; asterisco <= contador; asterisco = asterisco +1) {
        //linha = linha + " * ";
        linha += " * ";
    }

    console.log(linha);
}
 