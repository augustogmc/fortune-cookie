const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

function handleClick() {
    texts()
    screenChange()
}   


function screenChange(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function texts(){
    let randomNumber = Math.round(Math.random() * 10)

    if(randomNumber <= 1){
        screen2.querySelector("p").innerText = `Procure ascender uma vela em vez de amaldiçoar a escuridão.`
    }
    else if(randomNumber <= 3){
        screen2.querySelector("p").innerText = `A sorte sorri para aqueles que persistem. Continue seguindo em frente.`    
    }
    else if(randomNumber <= 5 || randomNumber){
        screen2.querySelector("p").innerText = `As dificuldades de hoje são os degraus para o sucesso de amanhã. Continue escalando!`
    }
    else if(randomNumber <= 7){
        screen2.querySelector("p").innerText = `Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.`
    }
    else if(randomNumber <= 9){
        screen2.querySelector("p").innerText = `A verdadeira beleza está na autenticidade. Seja quem você é, sem medo do julgamento alheio.`
    }
}