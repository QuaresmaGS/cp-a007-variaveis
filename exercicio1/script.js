let nome;
let idade;

console.log(typeof nome);
console.log(typeof idade);

//Este tipo foi impresso por não conter nenhum valor definido

nome = prompt ("qual o seu nome?");
console.log(nome);

idade = prompt ("qual a sua idade?");
console.log(idade);

console.log(typeof nome);
console.log(typeof idade);

//Notei que ambas estão como string, texto.

console.log("Olá," , nome, "você tem" , idade, "anos");
