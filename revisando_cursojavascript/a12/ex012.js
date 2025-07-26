var agora = new Date() //Função para trabalhar com tempo
var hora = agora.getHours() //Função que pega hora atual
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 5) {
    console.log("Boa madrugada")
} else if(hora < 12) {
    console.log("Bom dia!")
} else if(hora < 18) {
    console.log('Boa Tarde')
} else if (hora < 23) {
    console.log('Boa noite!')
} else ('Horário inválido')