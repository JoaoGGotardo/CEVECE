function calcular(){
    var select1 = document.getElementById("select1");
    var num1 = select1.options[select1.selectedIndex].text;
    var select2 = document.getElementById("select2");
    var num2 = select2.options[select2.selectedIndex].text;
    var result = document.getElementById("result");
    var logitude1, longitude2, latitude1, latitude2,valorFinal;
    switch(num1){
        case "eldorado do sul":
            longitude1=51.618;
            latitude1=30.0857;
            break;
        case "porto alegre":
            longitude1=51.2287;
            latitude1=30.0277;
            break;
        case "uruguaiana":
            longitude1=57.0882;
            latitude1=29.7495;
            break;
        case "anta gorda":
            longitude1=51.9958;
            latitude1=28.9586;
            break;
        case "santa maria":
            longitude1=53.8008;
            latitude1=29.6914;
    }
    switch(num2){
        case "eldorado do sul":
            longitude2=51.618;
            latitude2=30.0857;
            break;
        case "porto alegre":
            longitude2=51.2287;
            latitude2=30.0277;
            break;
        case "uruguaiana":
            longitude2=57.0882;
            latitude2=29.7495;
            break;
        case "anta gorda":
            longitude2=51.9958;
            latitude2=28.9586;
            break;
        case "santa maria":
            longitude2=53.8008;
            latitude2=29.6914;
    }
    if((latitude1+longitude1)==(latitude2+longitude2)){
        result.value="valores iguais";
    }
    else{
        valorFinal=(latitude1-latitude2)-(longitude1-longitude2);
        if(valorFinal<0){
            valorFinal=valorFinal*-1;
            valorFinal=20*(valorFinal);
            result.value="R$"+valorFinal.toFixed(2);
        }
        else{
            valorFinal=20*(valorFinal);
            result.value="R$"+valorFinal.toFixed(2);
        }
    }
}
function cadeira(cadeira){
    var chair=document.getElementById(cadeira);
    chair.style.backgroundColor="red";
    if(chair.style.backgroundColor=="red"){
        chair.style.backgroundColor="green"
    }
}
function clicar(){
    var pagamento=document.getElementById("pagamento");
    pagamento.style.display="block";
}
function apagar(){
    var pagamento=document.getElementById("pagamento");
    pagamento.style.display="none";
}