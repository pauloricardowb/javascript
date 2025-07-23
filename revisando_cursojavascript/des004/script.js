function calcular() {
    prod = window.prompt('Está comprando qual produto?')
    prec = Number(window.prompt(`Qual o preço do ${prod}`))
    val = Number(window.prompt(`Qual o valor dado pelo ${prod}`))

    troco = val - prec
    
    window.alert(`Você pagou ${prec} no produto ${prod} e vai receber um troco de ${troco}. Volte sempre!`)
}