//Vetores (Arays/Variaveis compostas)
let valores = [8, 1, 7, 4, 2, 9, 13, 55, 2]
valores.sort() //ordem crescente

//console.log(valores)
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])


for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}