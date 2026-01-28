/* 

Lógica de programação
    - Falar a lingua do computador

Algoritmo
    -Receita de bolo. Os passos na sequencia certa

JavaScript
    - Linguagem de programação que o navegador entende
    - Executa no cliente (navegador)
    - Interage com o HTML e CSS
    - Pode ser usado no servidor (Node.js)

    - Variáveis 
        Pedacinho da memória do computador para guardar informação

    - Funções
        Pedacinho de código que faz uma tarefa específica quando eu chamo

    - Como se comunicar com o HTML
        Manipular o DOM (Document Object Model)

    Console.log() -> Imprime algo no console do navegador

    [X] Saber quando o botão foi clicado
    [X] Saber qual idioma foi selecionado
    [X] Pegar o texto digitado
    [X] Enviar o texto para a API de tradução
    [X] Receber o texto traduzido
    [X] Colocar o texto traduzido na tela

    Fase 2
    [X] Saber quando o botão do microfone foi clicado
    [X] IA - Detectar a voz e pegar a transcrição
    [X] Traduzir o que foi falado

    // JavaScript - scripts
    // HTML - document
    // let = variavel
    // function = função
    querySelector - procurar alguem no HTML
    value = valor - o texto que tem nele

    padrão = https://api.mymemory.translated.net/get?q=
    traduzir = Hello World!
    idioma = &langpair=
    nativa/tradução = en|it

    fetch / ferramenta do javascript para entrar em contato com o servidor
    await / (Espere) *avisar a variavel* - async *avisar a function* (async e await)
    json / formato mais amigavel
*/

// pegando o texto dentro do <textarea> (HTML)
let inputTexto = document.querySelector(".input-texto")
let traducaoTexto = document.querySelector(".traducao")
let idioma = document.querySelector(".idioma")


async function traduzir() {

    // endereço do servidor com o texto que eu quero traduzir
    let endereco = "https://api.mymemory.translated.net/get?q=" 
    + inputTexto.value
    + "&langpair=pt-BR|"
    + idioma.value

    // resposta do servidor
    let resposta = await fetch(endereco)

    // converto a resposta para um formato mais amigavel
    let dados = await resposta.json()

    // mostrar o texto traduzido na tela
    traducaoTexto.textContent = dados.responseData.translatedText

    // textContent = conteúdo do texto
}

function ouvirVoz() {

    // ferramenta de transcricao de audio
    let voz = window.webkitSpeechRecognition

    // Deixando ela PRONTA PARA USO   
    let reconhecimentoVoz = new voz()

    // Configurando a ferramenta
    reconhecimentoVoz.lang = "pt-BR"

    // Me avise quando ele terminou de transcrever a voz
    reconhecimentoVoz.onresult = (evento) => {

        // Pegar o texto transcrito
        let textoVoz = evento.results[0][0].transcript

        // Colocar o texto transcrito na caixa de texto
        inputTexto.textContent = textoVoz

        traduzir()
    }

    // Start do reconhecimento de voz
    reconhecimentoVoz.start()
    
    }

// clicou no botao -> chama a funcao -> monto o endereco ->
// chamo o servidor -> peco esperar -> responde 

// escrevo function 2) dou um nome 3) coloca os parênteses 4) abre e fecha chaves

// quando clicar no botão, chama a função traduzir

