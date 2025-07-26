let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){ //Função que verifica se o número está entre 1 e 100
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) { //Função que verificar se o número está na lista
    if(l.indexOf(Number(n)) != -1) { //indexOf - Verifica o índice dos valores
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) { //Duas funções para validação.
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado na lista`
        lista.appendChild(item)
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = '' //Limpar o número após cada inserção
    num.focus() //Deixar selecionado a marcação do número
//.push() - Adiciona um elemento a um vetor
}

function finalizar() {
    if(valores.length == 0) {
        alert('Adicione valores para finalizar')
    } else {
        let tot = valores.length //Quantidade de valores do vetor
        let maior = valores[0] 
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos] //maior Passa a ser o pos do vetor
            if(valores[pos] < menor)
                menor = valores[pos] //menor Passa a ser o pos do vetor
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `A quantidade de valores é ${tot}<br>`
        res.innerHTML += `O maior valor é ${maior}<br>`
        res.innerHTML += `O menor valor é ${menor}<br>`
        res.innerHTML += `A soma de todos os valores é ${soma}<br>`
        res.innerHTML += `A média dos valores digitados é ${media}<br>`
    }    
}
