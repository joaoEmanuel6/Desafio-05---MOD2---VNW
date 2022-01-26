 // Crie um array que receba 5 itens e exiba no console.
let itens = ["Contra-Baixo", "Violão", "Teclado", "Ukulele", "Cavaco"]
console.log(itens)
// Utilize um método para adicionar um nome ao inicio do array.
itens.unshift("Microfone")
console.log(itens)
// Utilize um método para remover o último nome do array.
itens.splice(5,1)
console.log(itens)
// Utilize um método para adicionar dois nomes ao fim do array.
itens.push("Bateria", "Guitarra" )
console.log(itens)
// Utilize um método para remover o primeiro nome do array.
itens.shift()
console.log(itens)
// Utilize um método para organizar em ordem crescente o seguinte array:
const numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort()
console.log(numbers)