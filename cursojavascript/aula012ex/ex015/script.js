function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || fano.value == 0 || Number(fano.value) > ano) {
        window.alert("PROIBIDO Viajantes do tempo em meu site!")                   
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade > 120) {
                //Ancião
                img.setAttribute('src', 'imagem/ancientmas.jpg')
                alert('Saudações ancião!')
            } else if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagem/criancamas.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagem/jovemmas.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagem/adultomas.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagem/idosomas.jpg')
            } 
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade > 120) {
                //Ancião
                img.setAttribute('src', 'imagem/ancientfem.jpg')
                alert('Saudações anciã!')
            }
            else if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagem/criancafem.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagem/jovemfem.jpg')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'imagem/adultofem.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagem/idosofem.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}