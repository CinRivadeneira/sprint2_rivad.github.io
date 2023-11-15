let alfombraAzulBtn = document.getElementById("azula");
let alfombraGrisBtn = document.getElementById("grisa");
let imgChangea = document.getElementById("imgchangea");

alfombraAzulBtn.onclick = function(){
    imgchangea.src = "../media/repuestos/alfombraazul.jpeg";
}

alfombraGrisBtn.onclick = function(){
    imgchangea.src = "../media/repuestos/alfombragris.jpeg";
}

console.log("holaa");



let tazaAzulBtn = document.getElementById("azult");
let tazaRojoBtn = document.getElementById("rojot");
let imgChanget = document.getElementById("imgchanget");

tazaAzulBtn.onclick = function(){
    imgchanget.src = "../media/repuestos/tazaazul.jpeg";
}

tazaRojoBtn.onclick = function(){
    imgchanget.src = "../media/repuestos/tazaroja.jpeg";
}




let asientoNegrolBtn = document.getElementById("negroc");
let asientoRojoBtn = document.getElementById("rojoc");
let imgChangec = document.getElementById("imgchangec");

asientoNegrolBtn.onclick = function(){
    imgchangec.src = "../media/repuestos/cubreasientonegro.PNG";
}
asientoRojoBtn.onclick = function(){
    imgchangec.src = "../media/repuestos/cubreasientorojo.PNG";
}