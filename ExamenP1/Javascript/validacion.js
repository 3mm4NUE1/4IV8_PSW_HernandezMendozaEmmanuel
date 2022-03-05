function validar(formulario){

    if(formulario.valor.value > 100000 || formulario.valor.value < 1000000){
        alert("El monto ingresado no es valido");
        formulario.valor.focus();
        return true();
    }

    var checarOK = "0123456789";
    var checarStr = formulario.edad.value;

    var allValido = true;

    for(var i =0; i < checarStr; i++){
        var ch= checarStr.charAt(i)
        for(var j = 0; j < checarOK.length; j++){
            if(ch == checarOK.charAt(j))
            break;
        }
        if(j == checarOK.length){
            allValido = false;
            break;
        }
    }

    if(allValido){
        alert("Escriba unicamente numeros en el campo de nombre");
        formulario.nombre.focus();
        return false;
    }
}

function enviarDatos(form){

    const form =document.getElementById("form")

    form.addEventListener("submit", function(event){
        event.preventDefault();
        let datos=new FormData(form);
        let tablaRef=document.getElementById("tablaA");
        let nuevaFT=tablaRef.insertRow(-1);

        let nuevaCT=nuevaFT.insertCell(0);
        nuevaCT.textcontent="wola"
        let nuevaCT=nuevaFT.insertCell(1);
        nuevaCT.textcontent="wola"
        let nuevaCT=nuevaFT.insertCell(2);
        nuevaCT.textcontent="wola"
        let nuevaCT=nuevaFT.insertCell(3);
        nuevaCT.textcontent="wola"
    })
}