function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { //estrutura condicional
        res.innerHTML = 'Impossível contar!' //limpando a resposta
        //window.alert(`[ERRO] Faltam dados!`)
        } else {
        res.innerHTML = 'Contando: <br>'//escrevendo com javascript
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)//convertendo para número
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem progressiva
             for(let c = i; c <= f; c += p) { //estrutura de looping com for
                res.innerHTML += ` ${c} \u{1f449}`
            }
        } else {
            // Contagem regressiva
            for(let c =i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }
        res.innerHTML += '\u{1f3c1}'//\u{} para adicionar emojis
    }
       
}