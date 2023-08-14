const cpf = "12345678900";
const cnpj = "12345678900";

//-   Validar o tamanho (11 números)
//-   Imprimir o CPF formatado se for válido

if (cpf.length === 11){
    console.log(cpf);
} else {
    console.log("CPF Inválido");
}

if(cnpj.length === 14){
    console.log(cnpj);
} else {
    console.log("CNPJ inválido");
}