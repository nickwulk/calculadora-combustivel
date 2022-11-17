//variáveis
var kmG = document.querySelector("#inputKmGasolina")
var kmA = document.querySelector("#inputKmAlcool")
var pG = document.querySelector("#inputPrecoGasolina")
var pA = document.querySelector("#inputPrecoAlcool")

function calc(){
    if (kmG.value !== '' && kmA.value !== '' && pA.value !== '' && pG.value !== ''){

    var p = (pA.value/pG.value).toFixed(2)
    var r = (kmA.value/kmG.value).toFixed(2)

    if(p >= r){
        resposta = "A melhor opção é abastecer com Gasolina"
        }else{
        resposta = "A melhor opção é abastecer com Álcool"
        }

        resultado.innerHTML = `${resposta} <br> O rendimento é de ${r*100}% <br> O preço proporcional é de ${p*100}%`
    }else
        {resultado.innerHTML = "Preencha todos os campos"}
}

