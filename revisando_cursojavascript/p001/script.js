function Informacao() {
    inf = document.getElementById('inf')
    inf.innerHTML = '<p>Essa aplicação informa as horas e se adaptda automaticamente aos períodos do dia, mudando suas imagens, cores de fundo e frases personalizadas ao visitante.</p>'
}

function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()

    window.alert('Bem vindo a essa aplicação!')

    msg.innerHTML = `Neste momento são <strong>${hora}</strong> horas`

    document.body.style.textAlign = 'center'
    d = document.getElementById('dica')
    nome = prompt('Como quer ser chamado?')
    dica = prompt('Gostaria de uma dica? (sim) ou (não)')
    if (hora >= 0 && hora <5) {
        //Bom Madrugada!
        img.src = 'imagens/madrugada.jpg'
        document.body.style.background = '#dedbe2'
        if (dica.toLowerCase() == "sim") {
            alert('Provavelmente você deveria estar dormindo!')
            d.innerHTML = `<p><strong>${nome}</strong>, mas se está acordado por algo importante, meus sinceros parabéns!</p>`
        } else {
            d.innerHTML = 'Ok, volte ao que estava fazendo!'
        }
    } else if (hora < 12) {
        //Bom dia!
        img.src = 'imagens/dia.jpg'
        document.body.style.background = '#ffb51644'
        if (dica.toLowerCase() == "sim") {
            alert('Na parte da manhã você deve agradecer por mais um dia e tomar um bom café!')
            d.innerHTML = `<p><strong>${nome}</strong>, mesmo que as vezes os problemas sejam dificeis, se você ainda respira, pode pensar em uma solução.</p>`
        } else {
            d.innerHTML = 'Talvez outra hora então!'
        }
    } else if (hora < 16) {
        //Boa tarde!
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#b08d6771'
        if (dica.toLowerCase() == "sim") {
            alert('Mais da metade do dia já foi, não se esqueça dos seus compromissos')
            d.innerHTML = `<p><strong>${nome}</strong>, espero que seu dia esteja indo bem!</p>`
        } else {
            d.innerHTML = "certo!"
        }
    } else {
        //Boa noite!
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#36578079'
        if (dica.toLowerCase() == "sim") {
            alert('Boa noite, parabéns por ter chego até aqui, descanse, se possível; e faça uma boa refeição!')
            d.innerHTML = `<p><strong>${nome}</strong> sempre se lembre, independente do que aconteça: <strong>Faça o que você tem que fazer!</strong></p>`
        } else {
            d.innerHTML = "Ok! até outro momento."
        }
    }   
}