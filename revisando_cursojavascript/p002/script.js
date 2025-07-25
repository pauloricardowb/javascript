function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || fano.value == 0) {
        window.alert('PROIBIDO Viajantes do tempo em meu site!')
        res.innerHTML = '<p>Boa tentativa haha</p>'
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = "Homem"
            alert('Olá meu caro!')
            if (idade > 120) {
                img.setAttribute('src', 'imagens/ancientmas.jpg')
                res.innerHTML = `<p>"Os imortais, pessoas que vivem muito mais do que as outras, ou será se é só alguém querendo causar um comportamento incomum no programa?" \u{1f914}</p>`
            } else if (idade < 0) {
                img.setAttribute('src', 'imagens/travaler.jpg')
                document.body.style.background = 'black'
                document.body.querySelector('div#res').style.color = '#ff9900ff'
                res.innerHTML = `<p>Viajantes do tempo, algumas pessoas não acreditam neles! imagine só, sendo que há um, agora mesmo, acessando esse site. Ou seria só uma pessoa buscando erros na aplicação? \u{1f914}</p>`
            } else if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/criancamas.jpg')
                res.innerHTML =''
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovemmas.jpg')
                p = prompt('Gostaria de uma dica rapaz? (sim ou não)')
                if (p.toLowerCase() == "sim") {
                    res.innerHTML = '<p>Honre pai e mãe, mesmo que possivelmente já seja independente.</p>'
                } else {
                    res.innerHTML = '<p>Ok!</p>'
                }                    
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adultomas.jpg')
                res.innerHTML =''
            } else {
                img.setAttribute('src', 'imagens/idosomas.jpg')
                res.innerHTML ='' //para corrigir bug de concatenar respostas
            }
        } else if (fsex[1].checked) {
            alert('Olá minha cara!')
            genero = "Mulher"
            if (idade > 120) {
                img.setAttribute('src', 'imagens/ancientfem.jpg')
                res.innerHTML += `<p>"Os imortais, pessoas que vivem muito mais do que as outras, ou será se é só alguém querendo causar um comportamento incomum no programa?" \u{1f914}</p>`
            } else if (idade < 0) {
                img.setAttribute('src', 'imagens/travaler.jpg')
                document.body.style.background = "black"
                document.body.querySelector('div#res').style.color = "#ff9900ff"
                res.innerHTML = `<p>Viajantes do tempo, algumas pessoas não acreditam neles! imagine só, sendo que há um, agora mesmo, acessando esse site. Ou seria só uma pessoa buscando erros na aplicação? \u{1f914}</p>`
            } else if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/criancafem.jpg')
                res.innerHTML = ''
            } else if (idade >= 0 && idade < 21) {
                img.setAttribute('src', 'imagens/jovemfem.jpg')
                p = prompt('Gostaria de uma dica moça? "sim ou não"')
                if (p.toLowerCase() == 'sim') {
                    res.innerHTML='<p>Honre pai e mãe, mesmo que possivelmente já seja independente.</p>'
                } else {
                    res.innerHTML='<p>Ok!</p>'
                }
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adultofem.jpg')
                res.innerHTML = ''
            } else {
                img.setAttribute('src', 'imagens/idosofem.jpg')
                res.innerHTML = ''//para corrigir bugs de concatenar respostas
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML += `<strong>Detectamos ${genero} com ${idade} anos.<strong>`
        res.appendChild(img)
    }
}
