function quadradoArea(){
    var lado = document.getElementById("quadrado").value;
    var area = lado * lado
    document.getElementById("result").innerHTML = "A área do quadrado é "+area
}