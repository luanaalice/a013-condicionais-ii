//let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

//if(nacionalidade === "brasileira"){
    console.log("a pessoa é do Brasil!");
//} else if(nacionalidade === "argentina"){
    console.log("a pessoa é da Argentina!");
//} else if(nacionalidade === "uruguaia"){
    console.log("a pessoa é do Uruguai!");
//} else if(nacionalidade === "chilena"){
    console.log("a pessoa é do Chile!");
//} else if(nacionalidade === "colombiana"){
    console.log("a pessoa é da Colômbia!");
//} else{
    console.log("nacionalidade não encontrada")
//}

let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

switch(nacionalidade){
    case Brasileira:
        console.log("a pessoa é do Brasil!")
        break;
        case Argentina:("a pessoa é da Argentina")
        break;
        case Uruguaia:("a pessoa é do Uruguai!")
        break;
        case Chilena: ("a pessoa é do Chile!")
        break;
        case Colombiana: ("a pessoa é da Colômbia!")
        default:
        console.log("nacionalidade não encontrada")
}