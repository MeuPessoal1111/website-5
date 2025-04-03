function apertarq1() {
    console.log("ola mundp")
}

function apertarq2() {
    console.log("aiaiiaiai")
}

function apertarq3() {
    console.log("1213")
}

function esconherNumeroAleatorio() {
     return parseInt(Math.random() * 10 + 1)

}

function clicarBotao() {
    document.getElementById("quadrado__extra2__botao").innerText =esconherNumeroAleatorio()

}
