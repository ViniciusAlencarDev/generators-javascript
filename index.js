let list = [1,2,3]
  
function* gerar() {
yield list;
list = list.map(item => item * 2)
yield list;
}
teste = gerar();
console.log(teste.next())
console.log(teste.next())
