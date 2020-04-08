function addDiv(el) {

    
    var maintenanceNoEl = document.getElementById("onderhoudsContractNee");

    if (el === maintenanceNoEl) {
        var elToSet = document.getElementById("needsMaintenance");
        elToSet.classList.add("needsDisplayDefault");
        elToSet.classList.remove("needsDisplayHidden");
    } 
}

function removeDiv(el) {

    
    var maintenanceJaEl = document.getElementById("onderhoudsContractJa");

    if (el === maintenanceJaEl) {
        var elToSet = document.getElementById("needsMaintenance");
        
        elToSet.classList.remove("needsDisplayDefault");
        elToSet.classList.add("needsDisplayHidden");

        var elToSetValue1 = document.getElementById("needsMaintenanceTrue");
        var elToSetValue2 = document.getElementById("needsMaintenanceFalse");

        elToSetValue1.value = "";
        elToSetValue2.value = "";
        elToSetValue1.checked = false;
        elToSetValue2.checked = false;
    } 
}