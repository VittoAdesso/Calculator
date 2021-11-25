var cifra = "";
var acumulado = 0;
var x = 0;
var sumar = false;
var restar = false;
//creo variable operación, para idemtificar si es la primera o no
var operacion = true;
var multiplicar = false;
var dividir = false;

//entiende algo; creo la función display para que cada vez que toque un número me aparezca en la pantallita
// luego () que va dentro de la función sería la class que le llame en la tabla
// debo agregar ña funcion onlcik en cada una de ellas (ten en cuenta que cuando pongo la funcion pongo el numero que quiero que se vea)
// me saldría undefined, cotejalo y te das cuenta

function display_numeros(numero) {
    document.getElementById("display").value = cifra + numero;
    cifra = document.getElementById("display").value;
}

function suma() {
    if (operacion == false) {
        if (restar) {
            acumulado = acumulado - parseInt(cifra);
            document.getElementById("display").value = acumulado;
        } else if (multiplicar) {
            acumulado = acumulado * parseInt(cifra);
            document.getElementById("display").value = acumulado;
        } else if (dividir) {
            acumulado = acumulado / parseInt(cifra);
            document.getElementById("display").value = acumulado;
        } else {
            acumulado = acumulado + parseInt(cifra);
            document.getElementById("display").value = acumulado;
        }
    } else {
        acumulado = parseInt(cifra);
        operacion = false;
    }

    cifra = "";
    sumar = true;
    restar = false;
    multiplicar = false;
    dividir = false;
    operacion = false;
}

function resta() {
    if (operacion == false) {
        if (sumar) {
            acumulado = acumulado + parseInt(cifra);
            document.getElementById("display").value = acumulado;
        } else if (restar) {
            acumulado = acumulado - parseInt(cifra);
            document.getElementById("display").value = acumulado;
        } else if (multiplicar) {
            acumulado = acumulado * parseInt(cifra);
            document.getElementById("display").value = acumulado;
        } else {
            acumulado = parseInt(cifra);
            operacion = false;
        }
    }

    cifra = "";
    sumar = false;
    restar = true;
    operacion = false;
}

function multiplica() {
    if (operacion == false) {
        if (restar) {
            acumulado = acumulado - parseInt(cifra);
            document.getElementById("display").value = acumulado;
        } else if (sumar) {
            acumulado = acumulado + parseInt(cifra);
            document.getElementById("display").value = acumulado;
        } else {
            acumulado = acumulado * parseInt(cifra);
            document.getElementById("display").value = acumulado;
        }
    } else {
        acumulado = parseInt(cifra);
        operacion = false;
    }

    cifra = "";
    sumar = false;
    restar = false;
    multiplicar = true;
    operacion = false;
}

function divide() {
    if (operacion == false) {
        if (restar) {
            acumulado = acumulado - parseInt(cifra);
            document.getElementById("display").value = acumulado;
        } else if (sumar) {
            acumulado = acumulado + parseInt(cifra);
            document.getElementById("display").value = acumulado;
        } else if (multiplicar) {
            acumulado = acumulado * parseInt(cifra);
            document.getElementById("display").value = acumulado;
        } else {
            acumulado = acumulado / parseInt(cifra);
            document.getElementById("display").value = acumulado;
        }
    } else {
        acumulado = parseInt(cifra);
        operacion = false;
    }

    cifra = "";
    restar = false;
    sumar = false;
    multiplicar = false;
    dividir = true;
    operacion = false;
}

function resultado() {
    if (sumar) {
        document.getElementById("display").value = acumulado + parseInt(cifra);
    } else if (restar) {
        document.getElementById("display").value = acumulado - parseInt(cifra);
    } else if (multiplicar) {
        document.getElementById("display").value = acumulado * parseInt(cifra);
    } else {
        document.getElementById("display").value = acumulado / parseInt(cifra);
    }
    acumulado = parseInt(document.getElementById("display").value);
    cifra = 0;
}

/* Ésta función no me la lee (VAS A TENER QUE VER POR QUE COÑO NO TE DA */
function resetear(cifra) {

    document.getElementById("display").value = "0";
    x = 0;
    cifra = "";
    acumulado = 0;
}