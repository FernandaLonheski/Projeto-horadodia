function carregar() {
    var msg =  document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas. `
    if(hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'manha.jpg'
        document.body.style.background = '#f9c28e'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = 'tarde.jpg'
        document.body.style.background = '#3994b4'
    } else {
        //Boa noite
        img.src = 'noite.jpg'
        document.body.style.background = '#357fb6'

    }
}
