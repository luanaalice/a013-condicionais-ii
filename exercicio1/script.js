
let Codigo=Number(prompt("digite um numero"))
if(Codigo%2===0){
    if(Codigo%3===0){
        console.log( "sim é")

    }else
    console.log("não é")
}else{
    console.log("não é")
}



if(Codigo%2===0 && Codigo%3===0){ //&& para E
    //expressao || expressao para OU     
    console.log("é Divisível")
    }else{
        console.log("não é")
    }