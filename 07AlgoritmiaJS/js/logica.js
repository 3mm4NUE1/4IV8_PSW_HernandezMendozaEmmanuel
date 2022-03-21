//problema 1

function problema1(){
    var validar = /^[0-9]+$/;
    var oracion = document.getElementById("p1-input").value;

    if(oracion.match(validar)){
        alert("Solo ingresa palabras");
    }
    else if(oracion == ""){
        document.getElementById("p1-output").textContent = "No hay palabras"
    }
    else{
        var p1_palabras = oracion.split(" ")        
        document.getElementById("p1-output").textContent = p1_palabras.reverse()
    }
}

//problema 2

function problema2(){
    var cx1 = document.getElementById("problema2-x1").value;
    var cx2 = document.getElementById("problema2-x2").value;
    var cx3 = document.getElementById("problema2-x3").value;
    var cx4 = document.getElementById("problema2-x4").value;
    var cx5 = document.getElementById("problema2-x5").value;

    var cy1 = document.getElementById("problema2-y1").value;
    var cy2 = document.getElementById("problema2-y2").value;
    var cy3 = document.getElementById("problema2-y3").value;
    var cy4 = document.getElementById("problema2-y4").value;
    var cy5 = document.getElementById("problema2-y5").value;

    var x1 = parseFloat(cx1)
    var x2 = parseFloat(cx2)
    var x3 = parseFloat(cx3)
    var x4 = parseFloat(cx4)
    var x5 = parseFloat(cx5)

    var y1 = parseFloat(cy1)
    var y2 = parseFloat(cy2)
    var y3 = parseFloat(cy3)
    var y4 = parseFloat(cy4)
    var y5 = parseFloat(cy5)

    if(cx1==""||cx2==""||cx3==""||cx4==""||cx5==""||cy1==""||cy2==""||cy3==""||cy4==""||cy5==""){
        document.getElementById("p2-output").textContent = "No hay nada para sumar"
    }
    else{
        var resultado = (x1*y1)+(x2*y2)+(x3*y3)+(x4*y4)+(x5*y5)

        document.getElementById("p2-output").textContent = "El reslutado es: " + resultado
    }

}

//problema 3

function problema3(){

    //definir un alfabeto
    var alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
        'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
        'W', 'X', 'Y', 'Z']


    //vamos a obtener la entrada de los datos
    var p3_input = document.querySelector('#p3-input').value;

    var p3_palabras = p3_input.split(',');

    //tengo que eliminar los espacios

    p3_palabras = p3_palabras.map(function(palabra){
        //crear un aexpresion que recupere las palabras
        return palabra.replace(/\s/g, '').toUpperCase();
    });

    //tengo que calcular cuantos caracteres unicos hay
    var p3_res = '';
    
    p3_palabras.forEach(function(palabra, i){
        //separar las palabras actuales del array que
        //contiene cada letra de dicha palabra
        var letras_unicas = [];
        var palabra_array = palabra.split('');

        //iteracion
        alfabeto.forEach(function (letra, j){
            //itero la palabra
            palabra_array.forEach(function (letras_palabras, k){

                //comprobar que la letra este dentro del alfabeto
                if(letras_palabras == letra){
                    //si la letra no la hemos contado
                    //la agregamos a un array para contar
                    //las letras unicas
                    if(letras_unicas.indexOf(letra) < 0){
                        letras_unicas.push(letra);
                    }
                }
            });
        });
        p3_res += 'Palabras: ' + palabra + ' = ' + letras_unicas.length + '\n';
    });
    document.querySelector('#p3-output').textContent = p3_res;


}