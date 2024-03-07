const campo_texto = document.querySelector("#texto-encriptado")
const campo_mensaje = document.querySelector("#campo-mensaje")

const matriz_code=[
    ["e","enter"], //indice 0
    ["i","imes"], //indice 1
    ["a","ai"], //indice 2
    ["o","ober"], //indice 3
    ["u","ufat"], //indice 4
]

function btnEncriptar(){
    const texto = encriptar(campo_texto.value);
    campo_mensaje.value=texto;  
}

function encriptar(fraseEncriptada){
    for(let i = 0; i< matriz_code.length; i++){
        if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1],
            )
        }
    }
    return fraseEncriptada;
}

const matriz_code2=[
    ["enter","e"], //indice 0
    ["imes","i"], //indice 1
    ["ai","a"], //indice 2
    ["ober","o"], //indice 3
    ["ufat","u"], //indice 4
]

function btnDesencriptar(){
    const texto = desencriptar(campo_texto.value);
    campo_mensaje.value=texto;  
}

function desencriptar(fraseDesencriptada){
    for(let i = 0; i< matriz_code2.length; i++){
        if(fraseDesencriptada.includes(matriz_code2[i][0])){
            fraseDesencriptada = fraseDesencriptada.replaceAll(
                matriz_code2[i][0],
                matriz_code2[i][1],
            )
        }
    }
    return fraseDesencriptada;
}

function btnLimpiar(){
    campo_texto.value="";
    campo_mensaje.value=""; 
}