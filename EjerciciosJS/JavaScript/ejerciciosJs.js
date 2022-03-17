
function ex1(){
    var validar = /^[0-9]+$/

    var cant = document.form1.Dinero.value;
    var cap = parseInt(cant);
    
    if(document.form1.Dinero.value == ""){
        alert("Debes llenar los campos");
    }
    else if(cap<0){
        alert("Cantidad invalida")
    }
    else if(cant.match(validar)){
        var resul = cap*1.02;
        document.form1.Total.value = "$" + resul;
    }
    else{
        alert("Ingresa solo núsmeros")
    }
}

function borrar1(){
    document.form1.Dinero.value = "";
    document.form1.Total.value = "";
}

function ex2(){
    var validar = /^[0-9]+$/

    var cant = document.form2.sueldo.value;
    var cap = parseInt(cant);
    var vc1 = document.form2.c1.value
    var c1 = parseInt(vc1)
    var vc2 = document.form2.c2.value
    var c2 = parseInt(vc2)
    var vc3 = document.form2.c3.value
    var c3 = parseInt(vc3)

    if(document.form2.sueldo.value == "" || vc1 == "" || vc2 == ""){
        alert("Debes llenar todos los campos");
    }
    else if(cap<0){
        alert("Cantidad Invalida")
    }
    else if(cant.match(validar)){
        var com = (c1+c2+c3)*0.1
        var total = cap+com
        document.form2.Comisiones.value = "$" + com;
        document.form2.total2.value = "$" + total;
    }
    else{
        alert("Ingresa solo números")
    }
}

function borrar2(){
    document.form2.sueldo.value = "";
    document.form2.Comisiones.value = "";
    document.form2.total2.value = "";
    document.form2.c1.value = "";
    document.form2.c2.value = "";
    document.form2.c3.value = "";
}

function ex3(){
    var validar = /^[0-9]+$/

    var cant = document.form3.pago.value;
    var cap = parseInt(cant);

    if(document.form3.pago.value == ""){
        alert("Debes llenar todos los campos");
    }
    else if(cap<0){
        alert("Cantidad invalida")
    }
    else if(cant.macth(validar)){
        var resul = cap*0.75;
        document.form3.total3.value = "$" + resul;
    }
    else{
        alert("Ingresa solo n")
    }
}

function borrar3(){
    document.form3.pago.value = "";
    document.form3.total3.value = "";
}

function ex4(){
    var validar = /^[0-9]+$/

    var vp1 = document.form4.parcial1.value
    var vp2 = document.form4.parcial2.value
    var vp3 = document.form4.parcial3.value
    var vex = document.form4.examen.value
    var vtf = document.form4.trabajof.value

    var p1 = parseFloat(document.form4.parcial1.value);
    var p2 = parseFloat(document.form4.parcial2.value);
    var p3 = parseFloat(document.form4.parcial3.value);
    var exam = parseFloat(document.form4.examen.value);
    var tf = parseFloat(document.form4.trabajof.value);

    if(document.form4.parcial1.value==""||document.form4.parcial2.value==""||document.form4.parcial3.value==""||
    document.form4.examen.value==""||document.form4.trabajof.value==""){
        alert("Debes llenar todos los campos");
    }
    else if(p1<0 || p2<0 || p3<0 || exam <0 || tf<0 || p1>10 || p2>10 || p3>10 || exam>10 || tf>10){
        alert("Cantidad invalida");
    }
    else if(vp1.match(validar) && vp2.match(validar) && vp3.match(validar) && vex.match(validar) && 
    vtf.match(validar)){
        var promedio = (p1+p2+p3)/3;
        var final = (promedio*0.55)+(exam*0.3)+(tf*0.15);
        document.form4.final.value = final;
    }
    else{
        alert("Ingresa solo números")
    }
}

function borrar4(){
    document.form4.parcial1.value = "";
    document.form4.parcial2.value = "";
    document.form4.parcial3.value = "";
    document.form4.examen.value = "";
    document.form4.trabajof.value = "";
    document.form4.final.value = "";
}

function ex5(){
    var validar = /^[0-9]+$/

    var vmuj = document.form5.totalM.value
    var vhom = document.form5.totalH.value

    var mujeres = parseInt(document.form5.totalM.value);
    var hombres = parseInt(document.form5.totalH.value);

    var sum = mujeres + hombres;

    if(document.form5.totalM.value =="" || document.form5.totalH.value ==""){
        alert("Debes llenar todos los campos");
    }
    else if(mujeres<0 || hombres<0){
        alert("Cantidad invalida");
    }
    else if(vmuj.match(validar) && vhom.match(validar)){
        var pMujeres = (mujeres*100)/sum;
        var pHombres = (hombres*100)/sum;

        document.form5.pmujeres.value = pMujeres + "%";
        document.form5.phombres.value = pHombres + "%";
    }
    else{
        alert("Ingresa solo números")
    }
}

function borrar5(){
    document.form5.totalM.value = "";
    document.form5.totalH.value = "";
    document.form5.pmujeres.value = "";
    document.form5.phombres.value = "";
}

function ex6(){
    var validar = /^[0-9]+$/

    var vdiaA = document.form6.dia.value
    var vmesA = document.form6.mes.value
    var vañoA = document.form6.añoC.value
    var vdiaN = document.form6.diaN.value
    var vmesN = document.form6.mesN.value
    var vañoN = document.form6.añoN.value

    var diaA = parseInt(document.form6.dia.value)
    var mesA = parseInt(document.form6.mes.value)
    var añoA = parseInt(document.form6.añoC.value);
    var diaN = parseInt(document.form6.diaN.value)
    var mesN = parseInt(document.form6.mesN.value)
    var añoN = parseInt(document.form6.añoN.value);
    
    if(document.form6.dia.value=="" || document.form6.mes.value=="" || document.form6.añoC.value=="" || 
    document.form6.diaN.value == "" || document.form6.mesN.value=="" || document.form6.añoN.value=="") {
        alert("Debes llenar todos los campos");
    }
    else if(diaA<0 || mesA<0 || añoA<0 || diaN<0 || mesN<0 || añoN<0){
        alert("Dato invalido");
    }
    else if(añoN>añoA){
        alert("Año invalido")
    }
    else if(vdiaA.match(validar) && vmesA.match(validar) && vañoA.match(validar) && 
    vdiaN.match(validar) && vmesN.match(validar) && vañoN.match(validar)){
        if(diaA>31 || diaN>31){
            alert("Día invalido")
        }
        else if(mesA>12 || mesN>12){
            alert("Mes invalido");
        }
        else{    
            if(mesA==mesN && diaA<diaN){
                var añoR = (añoA-añoN)-1
                document.form6.edad.value = "Tienes "+añoR+" año(s) ";
            }
            else if(mesA<mesN){
                var añoR = (añoA-añoN)-1
                document.form6.edad.value = "Tienes "+añoR+" año(s) ";
            }
            else{
                var añoE = añoA - añoN;
                document.form6.edad.value = "Tienes "+añoE+" año(s) ";
            }
        }
    }
    else{
        alert("Ingresa solo números")
    }
}

function borrar6(){
    document.form6.dia.value="";
    document.form6.mes.value="";
    document.form6.añoC.value="";
    document.form6.diaN.value="";
    document.form6.mesN.value="";
    document.form6.añoN.value="";
    document.form6.edad.value="";
}