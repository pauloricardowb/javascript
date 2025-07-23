function teste() {
    let teste = Number(window.prompt('Qual é a raíz quadrada de 64?'))
    if ( teste == 8) {
        alert('Pode continuar o programa!')

        let num = Number(window.prompt('Digite um numero'))
        let res= document.querySelector('section#res')
        let tipo

        if (isNaN(num)) {
                window.alert(`Valor inválido! Use apenas números`)
                res.innerHTML="Boa tentativa! haha"
            } else if (num == "") {
                window.alert('DIGITE UM NÚMERO!')
                res.innerHTML='Querendo quebrar o programa né!'         
            } else {
                if (num % 2 == 0) {
                    tipo = '<strong>Par!</strong>'
                } else {
                    tipo = '<strong>Impar!</strong>'
                }
                res.innerHTML = `Seu número é... <strong>${tipo}</strong>!`
            } 
    } else {
        alert('Resposta errada! ache a resposta correta para usar o programa!')
    }
}


    