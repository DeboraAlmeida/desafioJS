let paises = [["Brasil\n","País do Futebol", 0], ["Argentina\n", "Aqui temos bom vinho, churrasco e esportes na neve", 0], ["Japão\n", "É um arquipélago formado por 6852 ilhas", 0], ["Grécia\n", "Nossa capital, Atenas, é considerada o berço da literatura ocidental", 0], ["França\n", "Tem uma das melhores culinárias do mundo", 0], ["Canadá\n", "Nossos lagos são tão grandes que são considerados mares fechados", 0], ["Russia\n", "É o maior país do mundo e faz fronteira com outros 16 países", 0], ["Vietnã\n", "Um dos destinos turísticos mais baratos e mais encantadores do mundo", 0],["Holanda\n","Há mais de 29.000 km de ciclovia por aqui... você pode viajar de bike!", 0], ["Itália\n","Por aqui, os vulcões são considerados pontos turísticos", 0]]

let btn = document.querySelector('#btnMensagem')
let pais = document.querySelector('#pais')
let info = document.querySelector('#info')
let msg = document.querySelector('#boxMensagem')
let sorteio
let contagem

btn.onclick=function(){
    sorteio = parseInt(Math.random()*10)
    contagem = paises[sorteio][2]
    contagem += 1
    paises[sorteio][2] = contagem
    pais.textContent = `${paises[sorteio][0]}`
    info.textContent = `${paises[sorteio][1]}`
    if(paises[sorteio][2] ==1){
        msg.textContent = `Esse país já apareceu por aqui ${paises[sorteio][2]} vez`
    } else{
        msg.textContent = `Esse país já apareceu por aqui ${paises[sorteio][2]} vezes`
    }
}

