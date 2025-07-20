function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 15
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'imagem/manha_250.jpg'
        document.body.style.background = '#edd8bd'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'imagem/tarde_250.jpg'
        document.body.style.background = '#996b54'
    } else {
        // BOA NOITE!
        img.src = 'imagem/noite_250.jpg'
        document.body.style.background = '#0b6aaa'
    }
}