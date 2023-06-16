function carregar() {
  var msg = window.document.querySelector('#msg');

  var img = window.document.querySelector('#imagem');

  var title = window.document.querySelector('#header-id');
  
  var rodapeNome = window.document.querySelector('#rodape');
  
  var data = new Date();
  var mes = data.getMonth();
  var dia = data.getDate();
  var hora = data.getHours();
  var minutos = data.getMinutes();





  msg.innerHTML = `${dia}/${mes} - ${hora}:${minutos}`;

  if (hora >= 0 && hora < 12) {
    img.src= 'manha.png'
    document.body.style.background = "#E0FFFF"
    document.body.style.color = "#FF8C00"
    title.style.color = "#FF8C00"
    rodapeNome.style.color = "#FF8C00"
  
  } else if (hora >= 12 && hora < 18) {
    img.src = 'tarde.png'
    document.body.style.background = "#FFDAB9"
    document.body.style.color = "#CD853F"
    title.style.color = '#CD853F'
    rodapeNome.style.color = '#CD853F'

    
  } else {
    img.src = 'noite.png'
    document.body.style.background = "#483D8B"
    document.body.style.color = "#CD853F"
    title.style.color = '#CD853F'
    rodapeNome.style.color = '#CD853F'

    
  }
}
