const email = ["aluno@cubos.academy",
`jose@cubos.academy`,
`jose@cubos.academy.br`,
`jose.messias@cubos.academy`,
`jose.messias@cubos.io`,
`jose@cubos`,
`jose.messias@cubos`,
`jose.messias@.`,
`jose.@cubos`,
`.@`,
`@.`,
`jose.messias@cubos.`,
`.messias@cubos.`,
`.messias@cubos`
]

for(let i of email){
if(i.includes("@") && i.includes(".") && i[0]!== "." && i[i.length-1] !== "."){
    console.log("E-mail válido");
} else {
    console.log("E-mail inválido");
}
}