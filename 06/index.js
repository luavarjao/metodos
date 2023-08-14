const celular = 7199918888;
let cel = String(celular);

if(cel.length === 10){
    let ddd = cel.slice(0,2);
    let primeirosDigitos = cel.slice(2,6);
    let ultimosDigitos = cel.slice(6);
    console.log(`(${ddd}) 9 ${primeirosDigitos}-${ultimosDigitos}`)
} else{
    let primeirosDigitos = cel.slice(0,4);
    let ultimosDigitos = cel.slice(4);
    console.log(`9 ${primeirosDigitos}-${ultimosDigitos}`)
}