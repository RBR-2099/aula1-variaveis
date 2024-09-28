let nome
let idade
console.log (typeof nome , typeof idade)
// Ambos são undefinied pois não tem valores atribuídos
nome = prompt ('Qual o seu nome?')
idade = prompt ('Qual a sua idade?')

console.log ('a variavel nome é do tipo', typeof nome , 'e a variavel idade é do tipo', typeof idade)
// Ambos são textos e, portanto, strings embora eu pudesse transformar a idade em number

console.log ('Olá,', nome , 'você tem' , idade, 'anos')