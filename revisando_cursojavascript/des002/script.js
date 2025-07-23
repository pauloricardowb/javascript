function saudacao() {
    res = document.getElementById('res')
    chave = prompt("Qual a chave para interagir com o programa?")
    if (chave == "teste") {
        alert(`Pode interagir com o programa!`)
        nome = window.prompt('Qual é o seu nome?')
        idade = Number(window.prompt(`Quantos anos voce tem ${nome}`))
        sexo = window.prompt('Informe seu sexo? (M) ou (F)')

        if (sexo.toLowerCase() == "m") {
            window.alert(`Acabei de conhecer o ${nome}, ele é um rapaz educado`)
            if (sexo == "M") {
                res.innerHTML = `O ${nome} estava com pressa e teve que partir!`
            }
        } else if (sexo.toLowerCase() == "f") {
            window.alert(`Acabei de conhecer a ${nome}, ela é uma moça agradável`)
            if (sexo == "F") {
                lugar = prompt(`Mora onde ${nome}?`)
                trabalho = prompt("Legal, faz o que?")
                res.innerHTML = `A ${nome} vive em ${lugar} e trabalha como ${trabalho}.`
            } 
        }
    } else {
        alert("Vou te dar uma dica! decodifique! dGVzdGU=")
        res.innerHTML = "Já te ajudei, agora volte e clique no botão novamente! \u{1f642}"
    }
}
