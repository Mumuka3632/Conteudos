

//Exemplo de pergunta: "Me recomende algum animal para adotar"
const animaisRecomendados = {
    probablyWords: ["recomendar", "sugerir", "indicar", "animais", "bicho", "pet", "cuidar", "por", "qual", "você", "me", "sugere", "recomenda"],
    matched: 0,
}

//Exemplo de pergunta: "Qual o melhor animal de estimação para se ter?"
const maisAvaliado = {
    probablyWords: ["animal", "melhor", "mais", "bem", "favorito", "avaliação", "classificação", "adotam", "ranking", "maior", "nota", "mal", ],
    matched: 0,
}

//Exemplo de pergunta: "Qual o seu animal preferido?"
const animalPreferido = {
    probablyWords: ["animal", "favorito", "preferido", "amado", "seu", "mais", "gostou", "gosta"],
    matched: 0,
}

//Exemplo de pergunta: "Onde posso ver animais?"
const verAnimais = {
    probablyWords: ["deslumbrar", "ver", "olhar", "estabelecimento", "animais", "onde", "lugar", "local", "posso"],
    matched: 0,
}

//Caso haja perguntas fora do tema
const papinho = {
    probablyWords: ["oi", "tudo", "bem", "quem", "é", "você", "vc", "piada", "idade", "sua", "onde", "mora", "gosta", "de", "que", "futebol", "política", "receitas", "notícias", "negócios", "tecnologia", "história", "ciência", "saúde"],
    matched: 0,
}

export const todosBancos = [animesRecomendados, maisAvaliado, animePreferido, verAnimes, papoFurado]

//Respostas
function showAnswer(index) {
    switch (index) {
        case 0:
            return console.log("Para iniciantes recomendo um gato ou um cachorro, para pessoas que já cuidaram de animais, recomendo um passaro ou peixe para chamar atenção .")
        case 1:
            return console.log("O animal mais popular e adorado pelo mundo é o gato.")
        case 2:
            return console.log("Meu animal favorito é o Cavalo!")
        case 3:
            return console.log("Os lugares onde você pode observar animais podem ser por meios de canais de tv, zoologico, fazenda e sitios.")
        default:
            return console.log("amigo não posso ajudá-lo com este assunto. Porém se você quiser uma recomendação de animal posso ser útil.")
    }
}

//Deduzir resposta
export function mostProbablyQuestion() {
    let matches = [
        animaisRecomendados.matched, 
        maisAvaliado.matched, 
        animalPreferido.matched,
        verAnimais.matched, 
        papinho.matched
    ]

    return showAnswer(matches.indexOf(Math.max(...matches)))
}