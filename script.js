const botaoAssunto = document.querySelectorAll(".assuntos button");
botaoAssunto.forEach(botao => {
    botao.addEventListener("click", selecionarAssunto);
});

function selecionarAssunto (ev) {
    const classeBotao = ev.target.className;
    const assunto = document.querySelector(`.${classeBotao} span`).innerText;
    localStorage.setItem("assunto", assunto);
    window.location.href = "./pages/pageQuiz/quiz.html";
}