const assunto = localStorage.getItem("assunto");
let quiz = {};
let pontos = 0;
let pergunta  = 5;


const logoImg = document.querySelector(".logo img");
const background = document.querySelector("body");
const divIcon  = document.querySelector(".assunto-icone");
const iconImg = document.querySelector(".assunto-icone img");
const titulo = document.querySelector(".assunto h1");

function alterar() {
    divIcon.classList.add(assunto.toLowerCase());
    background.classList.add(assunto.toLowerCase());
    iconImg.setAttribute("src", `../../assets/images/icon-${assunto.toLowerCase()}.svg`);
    iconImg.setAttribute("alt", `icone-${assunto}`);
    logoImg.setAttribute("src",`../../assets/images/logo-${assunto.toLowerCase()}.png`);
    logoImg.setAttribute("alt", `logo-${assunto}`);
    titulo.innerText = assunto;
}


async function buscarPerguntas () {
    const urlDados = "../../data.json";
    await fetch(urlDados).then(resposta => resposta.json()).then(dados => {dados.quizzes.forEach(dado => {
        if (dado.title === assunto){
            quiz = dado;
        };
    });
});
console.log(quiz);
};


function montarPergunta(){
    const main = document.querySelector("main");
    main.innerHTML = `
    <section class="pergunta">
        <div>    
            <p>Questão ${pergunta} de 10</p>
            <h2>${alterarSinais(quiz.questions[pergunta -1].question)}</h2>
        </div>
        <div class="barra-progresso">
            <div style="width:${pergunta*10}%"></div>
        </div>
    </section>

    <section class="alternativas">
        <form action="">
            <label for="alternativa-a">
                <input type="radio" id="alternativa-a" name="alternativa">
                <div>
                    <span>A</span>
                    ${alterarSinais(quiz.questions[pergunta-1].options[0])}
                </div>
            </label>
            <label for="alternativa-b">
                <input type="radio" id="alternativa-b" name="alternativa">
                <div>
                    <span>B</span>
                    ${alterarSinais(quiz.questions[pergunta-1].options[1])}
                </div>
            </label>
            <label for="alternativa-c">
                <input type="radio" id="alternativa-c" name="alternativa">
                <div>
                    <span>C</span>
                    ${alterarSinais(quiz.questions[pergunta-1].options[2])}
                </div>
            </label>
            <label for="alternativa-d">
                <input type="radio" id="alternativa-d" name="alternativa">
                <div>
                    <span>D</span>
                    ${alterarSinais(quiz.questions[pergunta-1].options[3])}
                </div>
            </label>
        </form>

        <button>Enviar</button>
    </section>    
 `;   
};

function alterarSinais(texto){
    return texto.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

async function iniciar (){
    alterar();
    await buscarPerguntas();
    montarPergunta();
}
iniciar();
