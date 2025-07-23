function media() {
    let rm = Number(window.prompt(`Qual o RM do aluno?`))

    let res = document.getElementById('situação')

    if (rm == "" || rm > 3000 || rm < 0) {
        window.alert('Este aluno não está cadastrado nesta escola')
    } else {
        let nom = window.prompt('Qual o nome do aluno?')
        let n1 = Number(window.prompt(`Qual a primeira nota de ${nom}`))
        let n2 = Number(window.prompt(`Qual a segunda nota de ${nom}`))
        let med = (n1 + n2) / 2
        if (med > 10) {
            window.alert('Insira valores até 10.')
            res.innerHTML = 'Estava querendo quebrar o programa né?'
        } else if (med < 0) {
            window.alert('Insira valores maiores que zero')
            res.innerHTML = `Boa tentativa haha`
        } else {
            if (med <=6) {
                msg = 'Precisa estudar mais!'
            } else if(med < 8) {
                msg = 'Da pra melhorar em!'
            } else if(med <= 9){
                msg = 'Parabens, foi bem!'
            } else {
                msg = 'Agora sim, foi muito bem! Parabéns.'
            }
            res.innerHTML = `<p>Calculando a média final do aluno <mark>${nom}</mark></p>`
            res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark></p>`
            res.innerHTML += `<p>A média final será <mark>${med}</mark></p>`
            res.innerHTML += `<p>A mensagem que temos é: <strong>${msg}</strong></p>`
        }
    }
}