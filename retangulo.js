function retanguloArea(){
    var base = document.getElementById("base").value;
    var altura = document.getElementById("altura").value;
    var area = base * altura
    document.getElementById("result").innerHTML = "A área do retângulo é "+area
}