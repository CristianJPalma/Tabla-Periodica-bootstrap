function calcularEdad(PyearBegin1, PyearBegin2){
    let yearBegin1 = PyearBegin1;
    let yearBegin2 = PyearBegin2;
    let yearNow = 2024;
    let edad1 = yearNow - yearBegin1;
    let edad2 = yearNow - yearBegin2;

    if(edad1 > edad2){
    console.log("la Primera persona es mayor ("+edad1+")")
    }
    else{
        console.log("La segunda persona es mayor ("+edad2+")")
    }
}