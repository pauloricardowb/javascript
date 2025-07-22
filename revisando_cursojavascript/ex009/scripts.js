let contador = 0
let res = document.getElementById('result')
let res1 = document.querySelector('section#res1')

function contar() {
    contador ++ // contador = contador + 1
    res.innerHTML = `O contador está com <mark>${contador}</mark> cliques!`
}
function zerar() { // Zerando cliques E indiozinhos
    contador = 0 
    res.innerHTML = null
    res1.innerHTML = null
}
function indios() {
    contador ++
    res1.innerHTML = `Por enquanto, <mark>${contador}</mark> indiozinhos!`
}
