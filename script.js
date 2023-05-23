const textArea = document.querySelector(".textInput");
const mensaje =  document.querySelector("#textOutput");
const botonCopiar = document.getElementById("btn-copiar");
document.getElementById('btn-copiar').style.display = 'none';

//Codigo de conversion
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    document.querySelector(".imagen-texto").style.display = "none";
    document.getElementById("btn-copiar").style.display = "initial";
}

function encriptar(stringEncriptado){
    let check = /[^a-z 0-9]/.test(stringEncriptado);
    if (check) {
        swal("Oops", "El texto no debe contener mayusculas o simbolos especiales", "warning");
    } else if (stringEncriptado.trim() === "") {
        swal("Ohh", "Debe agregar el texto a Encriptar", "warning");
    } else{
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

        for(let i=0; i< matrizCodigo.length; i++){
            if(stringEncriptado.includes(matrizCodigo[i][0])){
                stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
            }
        }
        return stringEncriptado;
    }
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    document.querySelector(".imagen-texto").style.display = "hidden";    
    document.getElementById("btn-copiar").style.display = "initial";
}

function desencriptar(stringDesencriptado){
    let check = /[^a-z 0-9]/.test(stringDesencriptado);
    if (check) {
        swal("Oops", "El texto no debe contener mayusculas o simbolos especiales", "warning");
    } else if (stringDesencriptado.trim() === "") {
        swal("Ohh", "Debe agregar el texto a Encriptar", "warning");
    } else{
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

        for(let i=0; i< matrizCodigo.length; i++){
            if(stringDesencriptado.includes(matrizCodigo[i][1])){
                stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            }
        }
        return stringDesencriptado;
    }
}

var textoCopiado;

function copiar() {
    textoCopiado = document.getElementById("textOutput");

    textoCopiado.select();  //Selecciona lo contenido en el contenedor
    textoCopiado.setSelectionRange(0, 99999); //Rango de caracteres que puede copiar es mas para los dipositivos moviles

    navigator.clipboard.writeText(textoCopiado.value); //Guarda el texto copiado del contenedor en el portapapeles 

    document.getElementById("textOutput").value = "";
}



botonCopiar.onclick = copiar;