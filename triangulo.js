function trianguloArea(){
    var base = document.getElementById("base").value;
    var altura = document.getElementById("altura").value;
    var area = base * altura / 2
    document.getElementById("result").innerHTML = "A área do triângulo é "+area
}