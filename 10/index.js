const nomeArquivo = 'Foto da Familia.pdf';
let extensao = nomeArquivo.slice(nomeArquivo.length-3);

//-   São permitidos arquivos: jpg, jpeg, gif e png;

if(extensao === "jpg" || extensao === "jpeg" || extensao === "gif" || extensao === "png"){
    console.log("Arquivo válido");
} else {
    console.log("Arquivo inválido");
}