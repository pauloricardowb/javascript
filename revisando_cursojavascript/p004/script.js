function calcular() {
    let num = document.getElementById('num')
    let tab = document.getElementById('tabuada')

    if (num.value.length == 0) {
        window.alert('Digite um número!')
    } else {
        var n = Number(num.value)
        let c = 1
        tab.innerHTML = ''//para limpar a tabuada
        while (c <= 10) {
            let item = document.createElement('option')//criando um option
            item.text = `${n} x ${c} = ${n*c}`//o cálculo dentro do option
            item.value = `tab${c}`//para saber qual item foi selecionado (útil para outras linguagens)
            tab.appendChild(item)// para exibir a tabuada
            c++ //c = c + 1
        }
    }
}