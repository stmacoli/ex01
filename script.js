<<<<<<< HEAD
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

=======
function tabuada() {
  let num = document.getElementById('txtn')
  let tab = document.getElementById('seltab')
  if (num.value.length == 0) {
    alert('Digite um Número')
  } else {
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ''
    while (c <= 10) {
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n*c}`
      item.value = `tab${c}`
      tab.appendChild(item)
      c++
    }
  }
>>>>>>> 938a485453b7fd8004bdd0da286aedd9f230c913
}