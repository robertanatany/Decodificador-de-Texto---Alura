
const txtPrincipal = document.querySelector(".conteudo_principal_textarea");
const txtResultado = document.querySelector(".conteudo_resultado_textarea");
const btnCopiar = document.querySelector(".btn_copiar");
const msgErro =  document.querySelector(".conteudo_resultado_menssagem");

function btnEncriptar(){
    const txtEncriptado = encriptar(txtPrincipal.value);
    txtResultado.value = txtEncriptado; 
    msgErro.style.display = "none";
    btnCopiar.style.display = "block";
    txtResultado.style.background  = "#e6e8f5"
}


function btnDesencriptar(){
    const txtDesencriptado = desencriptar(txtPrincipal.value);
    txtResultado.value = txtDesencriptado; 
    msgErro.style.display = "none";
    btnCopiar.style.display = "block";
    txtResultado.style.background  = "#e6e8f5"
}


function desencriptar(stringDesencriptada){ 
    let matrizCodigo = [
        ["e" , "enter"] ,
        ["i", "imes"] , 
        ["a", "ai"] ,
        ["o", "ober"] , 
        ["u", "ufat"] ,  
    ]

    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}; 

    function encriptar(stringEncriptada){ 
        let matrizCodigo = [
            ["e" , "enter"] ,
            ["i", "imes"] , 
            ["a", "ai"] ,
            ["o", "ober"] , 
            ["u", "ufat"] ,  
        ]
    
        stringEncriptada = stringEncriptada.toLowerCase();
    
        for (let i = 0; i < matrizCodigo.length; i++){
            if(stringEncriptada.includes(matrizCodigo[i][0])){
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        }
    
        return stringEncriptada;
    }; 

    btnCopiar.addEventListener('click', (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(txtResultado.value);
    }
)
