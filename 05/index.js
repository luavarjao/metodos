const numeroCartao = '1111222233334444';
let x = 0;
let numeroCartaoCorreto = "";

for(let i of numeroCartao){
    if(x < 4 || x > 11){
        numeroCartaoCorreto += i;
    } else {
        numeroCartaoCorreto += "*";
    }
    x++;
}

console.log(numeroCartaoCorreto);

let numeros = numeroCartao.slice(0,4)+ "********" + numeroCartao.slice(12);
console.log(numeros);

let quatroUltimos = numeroCartao.slice(12);
let asteriscos = quatroUltimos.padStart(12,"*");
let final = numeroCartao.slice(0,4) + asteriscos;
console.log(final);