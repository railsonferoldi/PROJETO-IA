// Lógica de Troca de Slides
let slideAtual = 1;
const totalSlides = 4;

function mudarSlide(direcao) {
    document.getElementById(`slide${slideAtual}`).classList.remove('active');
   
    slideAtual += direcao;
    if (slideAtual < 1) slideAtual = 1;
    if (slideAtual > totalSlides) slideAtual = totalSlides;

    document.getElementById(`slide${slideAtual}`).classList.add('active');
    document.getElementById('slideIndicator').textContent = `${slideAtual} / ${totalSlides}`;
}

// Navegação via teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') mudarSlide(1);
    if (e.key === 'ArrowLeft') mudarSlide(-1);
});

// Perguntas expandidas do jogo
const perguntasJogo = [
    {
        titulo: "Fase 1: O Mercado de Trabalho",
        texto: "Uma empresa automatizou totalmente o setor de suporte por IA. No entanto, clientes reclamam da falta de empatia no atendimento. O que fazer?",
        opt1: "Adotar um modelo híbrido: IA para triagem rápida e humanos para atendimento complexo.",
        opt2: "Manter apenas a IA para continuar cortando custos operacionais."
    },
    {
        titulo: "Fase 2: Ética e Aprendizado",
        texto: "Um grupo de estudantes usou geradores de texto para escrever uma redação inteira sem ler as fontes. Como intervir?",
        opt1: "Ensinar técnicas de prompts e avaliação crítica sobre as respostas geradas.",
        opt2: "Proibir o uso de tecnologia e exigir apenas trabalhos feitos à mão."
    },
    {
        titulo: "Fase 3: Criatividade e Originalidade",
        texto: "Ferramentas de IA agora criam ilustrações e músicas em segundos. Qual o papel dos artistas humanos nesse cenário?",
        opt1: "A IA é uma nova ferramenta técnica, mas a intenção e a visão artística continuam sendo humanas.",
        opt2: "As máquinas vão substituir completamente a arte humana nos próximos anos."
    }
];

let indiceJogo = 0;

function iniciarJogo() {
    document.getElementById('gameIntro').style.display = 'none';
    document.getElementById('gamePlay').style.display = 'block';
    carregarPergunta();
}

function carregarPergunta() {
    if (indiceJogo < perguntasJogo.length) {
        const q = perguntasJogo[indiceJogo];
        document.getElementById('questionTitle').textContent = q.titulo;
        document.getElementById('questionText').textContent = q.texto;
        document.getElementById('opt1').textContent = q.opt1;
        document.getElementById('opt2').textContent = q.opt2;
    } else {
        document.getElementById('questionTitle').textContent = "Jornada Concluída!";
        document.getElementById('questionText').textContent = "Suas escolhas demonstram que a tecnologia é mais valiosa quando potencializa o discernimento e a criatividade humana, em vez de substituí-los!";
        document.querySelector('.options-group').style.display = 'none';
    }
}

function escolherOpcao(opcao) {
    indiceJogo++;
    carregarPergunta();
}