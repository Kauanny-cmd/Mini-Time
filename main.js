function carregar (){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}`

    if(hora >= 0 && hora < 12){
        img.src = 'img/manha.png' 
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora < 18){
        img.src = 'img/tarde.png' 
        document.body.style.background = '#b9846f'
    } else{
        img.src = 'img/noite.png' 
        document.body.style.background = '#180504'
    }
}