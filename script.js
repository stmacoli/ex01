var opcoes = []

function alistador() {
  let valor = document.getElementById('valorAnalisado').value;
  let listaValores = document.getElementById('selnum');

  if (valor < 1 || valor > 100) {
    alert('Numero fora do raio de valores!')
  } else {
    let item = document.createElement('option')
    item.text = `${valor}`
    listaValores.appendChild(item);
    opcoes.push(listaValores);
  }



  




  console.log(valor)

}