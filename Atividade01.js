
let dataAtual = 15012022;
let dataEvento = 20012022;
let idade = 20;
let contador = 10;
let idadePermitida = 18;
let cadastro = "";
let sucesso = "";

if (dataEvento> dataAtual )
{
    console.log("Data permitida");
    sucesso = "sim";
     }

    else{ console.log("Data não permitida")}

 if (sucesso == "sim" && idade >= idadePermitida)
  {  cadastro = "ok";
    console.log("Idade permitida") }

 else {console.log("Cadastro sem sucesso. Revise a data do evento ou sua idade")}

    if (cadastro == "ok" && contador<=100){
    console.log("Cadastro com sucesso")
 }

 else{
     if (contador>100){ console.log("Numero de vagas excedido. ")}
    console.log("Cadastro não permitido.")
 }


