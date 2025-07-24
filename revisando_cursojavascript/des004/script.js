function calcular() {
    p = window.prompt(`Quer usar o programa? (sim) ou (não)`)
    if (p.toLowerCase() == "sim") {
        prod = window.prompt('Está comprando qual produto?')
        prec = Number(window.prompt(`Qual o preço do ${prod}`))
        val = Number(window.prompt(`Qual o valor dado pelo ${prod}`))
        troc = val - prec
        if (prod == "" || prec == "" || val == "") {
            alert('Tchau!')
        } else if (val >= prec) {
            alert(`Você comprou o produto ${prod} que custa o preço R$${prec.toFixed(2)} e recebeu de troco R$${troc.toFixed(2)}`)
        } else {
            window.alert('Não vendemos fiado!')
        }  
    } else {
        alert('Volte outra hora então!')
    }
}