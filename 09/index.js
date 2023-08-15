const nome = 'Guido Cerqueira';

//-   O nickname deve conter, no máximo, 13 caracteres;
//-   Deve começar sempre com "@";
//-   Não deve existir espaços em branco;
//-   São permitidos apenas caracteres minúsculos.

let nomes = nome.split(" ");
let nomeJunto = "";
for (let i of nomes){
    nomeJunto += i
}
let caracteres = nomeJunto.slice(0,12);
let minusculos = caracteres.toLowerCase();
console.log(`@${minusculos}`);

