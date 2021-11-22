let inputGroesse = document.getElementById("groesse");
let inputAlter = document.getElementById("alter");
let inputGewicht = document.getElementById("gewicht");
let inputWeib = document.getElementById("w");
let inputMann = document.getElementById("m");
let belastung = document.getElementById("belastung");
let kcal1inn = document.getElementById("kcal1")
let kcal2inn = document.getElementById("kcal2")
let kcalGrund;
let kcalgesamt;

const senden = () => {
    if (inputMann.checked) {
        kcalGrund = 664.7 + (13.7 * inputGewicht.value) + (5 * inputGroesse.value) - (6.8 * inputAlter.value);

    } else {
        kcalGrund = 655.1 + (9.6 * inputGewicht.value) + (1.8 * inputGroesse.value) - (4.7 * inputAlter.value);

    }
    kcal1inn.innerHTML = kcalGrund.toFixed(2);
    kcal2inn.innerHTML = (kcalGrund*belastung.value).toFixed(2);

};