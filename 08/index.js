const cpf = "011.022.033-44";
let cpfSeparado = cpf.split("");
let final = "";

for(let i of cpfSeparado){
    if(i !== "." && i !== "-"){
        final += i;
    }
}



console.log(final);