const texto = "Aprenda programar do zero na Cubos Academy";

let textoMinusculo = texto.toLowerCase();
let textoSeparado = textoMinusculo.split(" ");
let i = 0;
let textoFinal = "";
while(i < (textoSeparado.length - 1)){
   textoFinal += textoSeparado[i] + "-";
    i++;
}
textoFinal +=textoSeparado[textoSeparado.length - 1];
console.log(textoFinal);