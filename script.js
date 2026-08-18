const passos = {
    0: {
        texto: "Com a descoberta desta tecnologia, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre IA. No fim de uma aula, ela pede que Gabriel escreva um trabalho sobre o uso de tecnologia em sala de aula. Qual atitude Gabriel toma?",
        opcoes: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                proximo: 1
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                proximo: 1
            }
        ]
    },
    1: {
        texto: "Depois que Gabriel escreveu o trabalho, teve uma discussão sobre o impacto da IA no trabalho do futuro. O que Gabriel faz?",
        opcoes: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                proximo: 2
            },
            {
                texto: "Me me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
                proximo: 2
            }
        ]
    },
    2: {
        texto: "Ao final da discussão, Gabriel precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        opcoes: [
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                proximo: 3
            },
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                proximo: 3
            }
        ]
    },
    3: {
        texto: "Em 2049, Gabriel achou assustador pensar que máquinas agora poderiam mudar o mundo. Percebeu que a IA consegue explicar termos complicados de forma simplificada e isso ajudou muito suas pesquisas sobre assuntos complexos. Notou que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes.",
        opcoes: [] // Fim da história
    }
};

let passoAtual = 0;

function carregarPasso() {
    const passo = passos[passoAtual];
    const descElement = document.getElementById("description");
    const optionsElement = document.getElementById("options-container");

    // Altera o texto principal
    descElement.innerText = passo.texto;

    // Limpa as opções anteriores de forma limpa
    optionsElement.innerHTML = "";

    // Se não houver opções, significa que o jogo acabou. Mostramos um botão para recomeçar.
    if (!passo.opcoes || passo.opcoes.length === 0) {
        const botaoReiniciar = document.createElement("button");
        botaoReiniciar.innerText = "Jogar Novamente";
        botaoReiniciar.className = "btn btn-success mt-3";
        botaoReiniciar.addEventListener("click", () => {
            passoAtual = 0;
            carregarPasso();
        });
        optionsElement.appendChild(botaoReiniciar);
        return;
    }

    // Cria os botões para as opções existentes
    passo.opcoes.forEach((opcao, index) => {
        const button = document.createElement("button");
        button.innerText = opcao.texto;

        // Define classes do Bootstrap (mantendo o padrão do seu código)
        button.className = index === 0 ? "btn btn-primary m-2" : "btn btn-secondary m-2";

        // Executa a transição de passo ao clicar
        button.addEventListener("click", () => {
            passoAtual = opcao.proximo;
            carregarPasso();
        });

        optionsElement.appendChild(button);
    });
}

// Inicializa o jogo assim que a página carrega
document.addEventListener("DOMContentLoaded", carregarPasso);