function calcular() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Digite um número!')
    } else {
        var n = Number(num.value)
        let c = 1
        tab.innerHTML = ''//para limpar a tabuada
        while (c <= 10) {//estrutura de repetição
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //para saber qual item foi selecionado
            tab.appendChild(item)//para exibir a tabuada
            c++
        }  
    }
}
