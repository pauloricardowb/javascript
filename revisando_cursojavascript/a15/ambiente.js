//Vetores (Arays/Variaveis compostas)

let num = [5, 8, 2, 9, 1]

num.push(1) //adicionas um conteúdo a um novo elemento
num.sort() //deixa em ordem crescente - metodo interno de todo elemento que é um vetor
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8) //para mostrar a posição do elemento no vetor
if (pos == -1) {//elemento inexistente
    console.log("O valor não foi encontrado!")
} else {
    console.log(`O valor 8 está na posição ${pos}`)
    if (pos == 4) {
        console.log('está aprendendo')
    } else {
        console.log('estude mais')
    }
}