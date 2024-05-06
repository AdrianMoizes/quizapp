const botaoAssunto = document.querySelectorAll(".assuntos button")
botaoAssunto.forEach(botao => {
    botao.addEventListener("click", selecionarAssunto)
})

function selecionarAssunto (ev) {
    const assunto = ev.target.innerText
    localStorage.setItem("assunto", assunto)
    window.location.href = "./pages/pageQuiz/quiz.html"
}