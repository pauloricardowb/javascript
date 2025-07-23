function acao1() {
    alert('Vocẽ clicou no botão 1')
    res = document.getElementById('res1')
    atual = new Date
    res.innerHTML = `Vou te mostra o dia atual! <strong>${atual}<strong>`
}
function acao2() {
    alert('Você clicou no botão 2')
    res = document.getElementById('res2')
    cor = window.document.body.style.background = 'lightblue'
    res.innerHTML = 'Mudei a cor da página pra você!'
}
function acao3() {
    alert('Você clicou no botão 3')
    res = document.getElementById('res3')
    alinhamento = window.document.body.style.textAlign = 'center'
    res.innerHTML = 'Gostou do alinhamento!?'
}
alert('Saudações contemporâneo, bem vindo!')
