const assunto = localStorage.getItem("assunto")
let quiz = {}
let pontos = 0 
let pergunta  = 1


const logoImg = document.querySelector(".logo img")
const background = document.querySelector("body")
const divIcon  = document.querySelector(".assunto-icone")
const iconImg = document.querySelector(".assunto-icone img")
const titulo = document.querySelector(".assunto h1")

function alterar() {
    divIcon.classList.add(assunto.toLowerCase())
    background.classList.add(assunto.toLowerCase())
    iconImg.setAttribute("src", `../../assets/images/icon-${assunto.toLowerCase()}.svg`)
    iconImg.setAttribute("alt", `icone-${assunto}`)
    logoImg.setAttribute("src",`../../assets/images/logo-${assunto.toLowerCase()}.png`)
    logoImg.setAttribute("alt", `logo-${assunto}`)
    titulo.innerText = assunto
}
alterar()

async function buscarPerguntas () {
    const urlDados = "../../data.json"
    await fetch(urlDados).then(resposta => resposta.json()).then(dados => {dados.quizzes.forEach(dado => {
        if (dado.title === assunto){
            quiz = dado
        }
    });
})
console.log(quiz)
}
buscarPerguntas()