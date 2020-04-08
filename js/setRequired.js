function checkUitvoering(el) {

    var onderhoudsEl = document.getElementById("gewensteUitvoeringRadioOnderhoudscontract");
    var garantieEl = document.getElementById("gewensteUitvoeringRadioGarantie");

    var onderhoudsInput = document.getElementById("gewensteUitvoeringInputOnderhoudscontract");
    var garantieInput = document.getElementById("gewensteUitvoeringInputGarantie");

    if (el === onderhoudsEl) {
        garantieInput.name = "";
        onderhoudsInput.name = "Gewenste uitvoering onderhoudscontract";
        garantieInput.required = false;
    } else if (el === garantieEl) {
        onderhoudsInput.name = "";
        garantieInput.name = "Garantie nummer";
        garantieInput.required = true;
    }
    else {
        onderhoudsInput.name = "";
        garantieInput.name = "";
        garantieInput.required = false;
    }
}