//código a ser reescrito
const nome=  prompt("digite seu nome")
const idade= Number(prompt("digite sua idade"))


//if(nome === "José" &&idade>=18 ){
	console.log("pode tirar carteira de motorista" );
//} else {
	console.log("não pode tirar a carteira");
//}


if(nome === "José" &&idade===18 ){
	console.log(nome=== "José" && idade===18? "pode tirar a carteira": "não pode tirar a carteira")
}