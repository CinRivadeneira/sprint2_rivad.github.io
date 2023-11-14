let azulBtn = document.getElementById("azul");
let grisBtn = document.getElementById("gris");
let imgChange = document.getElementById("imgchange");

azulBtn.onclick = function(){
    imgchange.src = "../media/repuestos/alfombraazul.jpeg";
}

grisBtn.onclick = function(){
    imgchange.src = "../media/repuestos/alfombragris.jpeg";
}
