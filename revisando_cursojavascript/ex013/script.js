function maior() {
    jogar = window.prompt('Preparado para jogar (sim) ou (não)')
    res = document.getElementById('saida')
    if (jogar.toLowerCase() == "sim") {
        n1 = Number(window.prompt('Digite um número'))
        n2 = Number(window.prompt('Digite outro número'))

        if (isNaN(n1) && isNaN(n2)) {
            alert('Digite apenas números!')
            res.innerHTML = 'Não entendeu a brincadeira? \u{1f914}'
        } else if (n1 == "" || n2 == "") {
            alert ('Digite números!')
            res.innerHTML = 'Não entendeu a brincadeira? \u{1f914}'
        } else if (n1 > n2) {
            a = prompt(`qual é o maior ${n1} ou ${n2}?`)
            if (a == n1) {
                res.innerHTML = '<strong>Acertou!</strong><br>'
                res.innerHTML += `${n1} é maior que ${n2}`
            } else {
                res.innerHTML = '<strong>Errou!</strong><br>'
                res.innerHTML += `${n1} não é maior que ${n2}` 
            }
        } else if (n1 < n2) {
            a = prompt(`Qual é o maior ${n1} ou ${n2}?`)
            if (a == n2) {
                res.innerHTML = '<strong>Acertou!</strong><br>'
                res.innerHTML += `${n2} é maior que ${n1}`
            } else {
                res.innerHTML = '<strong>Errou!</strong>'
                res.innerHTML += `${n2} não é menor que ${n1}`
            }
        } else if (n1 == n2) {
            a = prompt(`${n1} e ${n2} São números iguais? (sim) ou (não)`)
            if (a == "sim") {
                res.innerHTML = "<strong>Acertou!</strong><br>"
                res.innerHTML += `${n1} e ${n2} são números iguais!`
            } else {
                res.innerHTML = "<strong>Errou!</strong><br>"
                res.innerHTML += `${n1} e ${n2} não são números diferentes!`
            }
        }
    } else {
        alert('Que pena volte outra hora então!')
        res.innerHTML = `\u{1f614}`
    }
}