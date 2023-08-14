let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

let identificadorCerto = identificador.padStart(6, "0");
let nomeDividido= nome.split(" ");
let nomeCorreto = "";
for(let i of nomeDividido){
    nomeCorreto += i[0].toUpperCase() + i.slice(1) + " ";
}
let nomeCompleto = nomeCorreto.trim();
let emailCorreto = email.trim();
console.log(identificadorCerto);
console.log(nomeCompleto);
console.log(emailCorreto);