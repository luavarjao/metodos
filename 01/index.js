const comentario = "Esse COVID é muito perigoso!";

if (comentario.includes("COVID") || comentario.includes("pandemia") || comentario.includes("covid")){
    console.log(`Comentário bloqueado por conter palavras proibidas`)
} else {
    console.log(`Comentário autorizado`);
}