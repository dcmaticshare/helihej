(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');

    var submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", function () {


      var textForButton = "Wordt verzonden"

      // Get the hash part of the language
      var hash = window.location.hash.replace('#', '');

      if (hash == 'fr') {
        textForButton = "Être envoyé";
      }

      var formToSubmit = document.getElementById("form1");
      submitButton.innerHTML = textForButton;
      submitButton.classList.add('disabled')
      submitButton.disabled = true;

      submitSelectedForm(formToSubmit);

    });


  }, false);
})();


function submitSelectedForm(formSelected) {

  // Get all form-groups in need of validation
  var validateGroup = document.getElementsByClassName('validate-me');

  var validateChecks = document.getElementsByClassName('validate-check');

  var validateRadios = document.getElementsByClassName('validate-radio');



  var submitErrorElement = document.getElementById("submit-errormessage");
  if (formSelected.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();

    var submitButton = document.getElementById("submitButton");


    var textForButton = "Verzenden"

    // Get the hash part of the language
    var hash = window.location.hash.replace('#', '');

    if (hash == 'fr') {
      textForButton = "Envoyer";
    }

    submitButton.innerHTML = "Verzend";
    submitButton.classList.add('disabled')
    submitButton.disabled = false;

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
    formSelected.submit();

    var secondForm = document.getElementById("form2");
    if (secondForm !== null){
      console.log("kkkkkk");
      submitExtraForm();
    }
    
  }
  //Added validation class to all form-groups in need of validation
  for (var i = 0; i < validateGroup.length; i++) {
    validateGroup[i].classList.add('was-validated');


  }
}

function submitExtraForm() {

  var newAddressString1 = document.getElementById("billingAddress1").value;
  var newAddressString2 = document.getElementById("billingAddress2").value;
  var newEmailString = document.getElementById("billingEmail").value;
  var newTelString = document.getElementById("billingTel").value;


  var newAddressField1 = document.getElementById("adresNieuweKlant1");
  var newAddressField2 = document.getElementById("adresNieuweKlant2");
  var newEmailField = document.getElementById("emailNieuweKlant");
  var newTelField = document.getElementById("telNieuweKlant");


  var needsToSend = document.getElementById("needsMaintenanceTrue").checked;

  if (needsToSend == true) {
    if (newEmailString != "" || newTelString != "") {

      newAddressField1.value = newAddressString1;
      newAddressField2.value = newAddressString2;
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