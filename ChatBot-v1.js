import {mostProbablyQuestion, todosBancos} from "./possiveisPerguntas.js";

let pergunta = "oi tudo bem";
let palavrasDaPergunta
if(pergunta[pergunta.length -1] === "?"){
    pergunta = pergunta.slice(0,-1)
    palavrasDaPergunta = pergunta.toLowerCase().split(" ")
}
palavrasDaPergunta = pergunta.toLowerCase().split(" ")

function compararPergunta(banco){
    const tamanhoBanco = banco.probablyWords.length
    for(let i = 0; i < tamanhoBanco; ++i){
        palavrasDaPergunta.forEach((palavra) =>{
            if(banco.probablyWords[i] === palavra){
                banco.matched++
            }
        })
    }
}

function compararTodos(){
    todosBancos.forEach((banco) =>{
        compararPergunta(banco)
    })
}

compararTodos()

mostProbablyQuestion()