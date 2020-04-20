(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');

    // Get all form-groups in need of validation
    var validateGroup = document.getElementsByClassName('validate-me');

    var validateChecks = document.getElementsByClassName('validate-check');

    var validateRadios = document.getElementsByClassName('validate-radio');

    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {

        var submitErrorElement = document.getElementById("submit-errormessage");

        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();

          submitErrorElement.classList.add('submit-visible');
          submitErrorElement.classList.remove('submit-invisible');

          //Added validation class to all form-groups in need of validation
          for (var i = 0; i < validateChecks.length; i++) {
            validateChecks[i].classList.add('was-validated');
            checkInputValidityChecked(validateChecks[i]);

          }

          for (var i = 0; i < validateRadios.length; i++) {
            validateRadios[i].classList.add('was-validatedRadio');
            checkInputValiditySubmission(validateRadios[i]);

          }


        } else {
          submitErrorElement.classList.remove('submit-visible');
          submitErrorElement.classList.add('submit-invisible');
          submitExtraForm()
        }
        //Added validation class to all form-groups in need of validation
        for (var i = 0; i < validateGroup.length; i++) {
          validateGroup[i].classList.add('was-validated');


        }

      }, false);
    });
  }, false);
})();


function submitExtraForm() {

  var newAddressString = document.getElementById("billingAddress").value;
  var newEmailString = document.getElementById("billingEmail").value;
  var newTelString = document.getElementById("billingTel").value;


  var newAddressField = document.getElementById("adresNieuweKlant");
  var newEmailField = document.getElementById("emailNieuweKlant");
  var newTelField = document.getElementById("telNieuweKlant");


  var needsToSend = document.getElementById("needsMaintenanceTrue").checked;
  
  if (needsToSend == true) {
    if (newEmailString != "" || newTelString != "") {

      newAddressField.value = newAddressString;
      newEmailField.value = newEmailString;
      newTelField.value = newTelString;

      var secondForm = document.getElementById("form2");

      var data = new FormData(secondForm);


      ajax(secondForm.method, secondForm.action, data);
    }
  } 


}

function ajax(method, url, data) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    return;

  };
  xhr.send(data);
}

function checkInputValidityChecked(f) {

  if (f.checked == true) {
    f.labels[0].classList.remove('label-invalid');
    f.labels[0].classList.add('label-valid');
  } else {
    f.labels[0].classList.add('label-invalid');
    f.labels[0].classList.remove('label-valid');
  }
}


function checkInputValiditySubmission(f) {

  var relatedRadios = document.getElementsByName(f.name);
  
  var wasChecked = false;
  for (var j = 0, length = relatedRadios.length; j < length; j++) {
    if (relatedRadios[j].checked) {

      wasChecked = true;
    }
  }

  for (var k = 0, length = relatedRadios.length; k < length; k++) {
    
    if (wasChecked == true) {

      relatedRadios[k].labels[0].classList.remove('label-invalid');
      relatedRadios[k].labels[0].classList.add('label-valid');
  
    } else {
      relatedRadios[k].labels[0].classList.add('label-invalid');
      relatedRadios[k].labels[0].classList.remove('label-valid');
    }
  }

  
}

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
  } else {
    onderhoudsInput.name = "";
    garantieInput.name = "";
    garantieInput.required = false;
  }
}