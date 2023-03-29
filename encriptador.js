const textoIngresado = document.querySelector(".areaEncriptacion-entrada__textoIngresado");
const textoResultante = document.querySelector(".areaEncriptacion-salida__textoResultante");
const imagenRobot = document.querySelector(".areaEncriptacion-salida__robot");
const areaCopia = document.querySelector(".areaEncriptacion-salida__copia");
const notas = document.querySelector(".areaEncriptacion-salida__notas");

function validar(texto) {
    var tecla = texto.charCode || texto.which;
    if (!((tecla >= 97 && tecla <= 122) || tecla == 241 || tecla == 32)){
        alert("Solo se aceptan letras minúsculas y sin acentos");
        return false;
    }
}

function botonEncriptar(){
    const encriptado = encriptar(textoIngresado.value);
    textoResultante.value = encriptado;
    textoIngresado.value ="";
    imagenRobot.style.display = "none";
    notas.style.display = "none";
    textoResultante.style.display ="block";
    areaCopia.style.display ="block"
}

function botonDesencriptar(){
    const desencriptado = desencriptar(textoIngresado.value);
    textoResultante.value = desencriptado;
    textoIngresado.value ="";
    imagenRobot.style.display = "none";
    notas.style.display = "none";
    textoResultante.style.display ="block";
    areaCopia.style.display ="block"
}

function botonCopiar(){
    copiar(textoResultante.value);
}

function encriptar(texto){
    let llavesEncriptacion = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    texto = texto.toLowerCase();

    for(let i = 0; i < llavesEncriptacion.length; i++){
        if(texto.includes(llavesEncriptacion[i][0])){
            texto = texto.replaceAll(llavesEncriptacion[i][0], llavesEncriptacion[i][1]);
        }
    }
    return texto;
}

function desencriptar(texto){
    let llavesEncriptacion = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    texto = texto.toLowerCase();

    for(let i = 0; i < llavesEncriptacion.length; i++){
        if(texto.includes(llavesEncriptacion[i][1])){
            texto = texto.replaceAll(llavesEncriptacion[i][1], llavesEncriptacion[i][0]);
        }
    }
    return texto;        
}

function copiar(){
    var textoCopiado = document.querySelector(".areaEncriptacion-salida__textoResultante");
    textoCopiado.select();
    navigator.clipboard.writeText(textoCopiado.value);
}
