//variáveis
var kmG = document.querySelector("#inputKmGasolina")
var kmA = document.querySelector("#inputKmAlcool")
var pG = document.querySelector("#inputPrecoGasolina")
var pA = document.querySelector("#inputPrecoAlcool")

function substVirgula(){
    
    if (kmG.value.includes(",") === true){
        kmG.value = kmG.value.replace(",", ".")
    }
    if (kmA.value.includes(",") === true){
      kmA.value = kmA.value.replace(",", ".")
    }
    if (pA.value.includes(",") === true){
      pA.value = pA.value.replace(",", ".")
    }
    if (pG.value.includes(",") === true){
      pG.value = pG.value.replace(",", ".")
    }
}  

function calc(){
    if (kmG.value !== '' && kmA.value !== '' && pA.value !== '' && pG.value !== ''){

    substVirgula()

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

