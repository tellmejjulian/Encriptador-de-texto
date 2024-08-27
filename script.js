//----- Selección de los Elementos -----//
const campoEntrada = document.getElementById("campoEntrada");
const terminos = document.getElementById("terminos");
const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const campoSalida = document.getElementById("campoSalida");
const btnCopiar = document.getElementById("btnCopiar");
const campoTarjeta = document.getElementById("campoTarjeta");
const campoVisualizacion = document.getElementById("campoVisualizacion");

//----- Array de Reemplazo -----//
const reemplazar = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
]

//----- Función: Validar entrada de texto -----//
function validarEntrada(texto){
    let regExp = /^[a-z\s]+$/;
    if (regExp.test(texto)) {
        terminos.style.backgroundColor = "transparent";
        return campoEntrada.value;
    } else{
        terminos.style.backgroundColor = "#DA0000"; 
        return limpiarCampos();
    }
} 

//----- Función: Limpiar campos -----//
function limpiarCampos(){
    campoEntrada.value = '';
    campoSalida.value = '';
}

//----- Función: Validar Entrada -----//
function validarEntrada(texto){
    let regExp = /^[a-z\s]+$/;
    if (regExp.test(texto)) {
        terminos.style.backgroundColor = "transparent";
        return campoEntrada.value;
    } else{
        terminos.style.backgroundColor = "red"; 
        return limpiarCampos();
    }
} 

//----- Función: Encriptar -----//
btnEncriptar.addEventListener("click", () => {
    let textoAEncriptar = validarEntrada(campoEntrada.value);

    function encriptar(texto){ 
        for (let i = 0; i < reemplazar.length; i++) {
            if (texto.includes(reemplazar[i][0])) {
                texto = texto.replaceAll(reemplazar[i][0], reemplazar[i][1]);            
            } else{
                limpiarCampos();
            }
        }
        return texto; 
    }
    campoEntrada.value = "";
    campoTarjeta.style.display = "none";
    campoVisualizacion.style.display = "inherit";
    campoSalida.value = encriptar(textoAEncriptar); 
})

//----- Función: Desencriptar -----//
btnDesencriptar.addEventListener("click", () => {
    let textoAEncriptar = validarEntrada(campoEntrada.value);

    function desencriptar(texto){ 
        for (let i = 0; i < reemplazar.length; i++) {
            if (texto.includes(reemplazar[i][1])) {
                texto = texto.replaceAll(reemplazar[i][1], reemplazar[i][0]);            
            } else{
                limpiarCampos();
            }
        }
        return texto; 
    }
    campoEntrada.value = "";
    campoTarjeta.style.display = "none";
    campoVisualizacion.style.display = "inherit";
    campoSalida.value = desencriptar(textoAEncriptar);    
})

//----- Función: Botón Copiar -----//
btnCopiar.addEventListener("click", () => {
    navigator.clipboard.writeText(campoSalida.value);
})