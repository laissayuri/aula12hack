// for como alternativa para o while

// let i = 0;
// while(i < lista.length){
//     console.log(lista[i]);
//     i++
// }

// vantagem do for
// - menos linhas
// - mais legível
// - mantém as coisas de uma forma estruturada/organizada.

// se na inicialização ou na atualização for muito comprida, a linha do for fica mto comprida. Melhor while.

let lista = ["a", "b", "c", "d", "x"];
let objeto = {
    nome: "Rodolfo",
    idade: 19,
    cor_favorita: "azul",
    comidas_favoritas: ["lasanha", "açaí", "estrogonoff", "coxinha"]
}

for(let i = 0; i < lista.length; i++){ // (inicialização; condição; atualização)
    console.log(lista[i]);
}


console.log("----------------------");
// ----------- for-in ------------
// feito para percorrer listas através dos índices
// in lista significa que o i = 0, que a atualização é de 1 em 1 e que tem que rodar até o final da lista

for(let i in lista){
    console.log(lista[i]);
}


console.log("----------------------");
// ----------- for-in ------------
// feito para percorrer objetos

for(let atributo in objeto){
    console.log(objeto[atributo]);
}


console.log("----------------------");
// ----------- for of  ------------
// feito para percorrer os valores da lista ao inves dos indices

for(let item of lista){
    console.log(item);
}