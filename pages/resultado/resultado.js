const assunto = localStorage.getItem("assunto");

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
alterar()

function inserirResultado(){
    const sectionPontuacao = document.querySelector(".pontuacao")
    const divAssunto = document.querySelector(".assunto")
    const pontos = localStorage.getItem("pontos")

    sectionPontuacao.innerHTML = `
        ${divAssunto.outerHTML}

        <strong>${pontos}</strong>
        <p>
            de 10
        </p>
    `
}

inserirResultado()