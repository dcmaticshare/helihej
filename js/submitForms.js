(function () {
    'use strict';
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');

      // Get all form-groups in need of validation
      var validateGroup = document.getElementsByClassName('validate-me');

      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          else {
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
    console.log(needsToSend);
    if (needsToSend == true) {
      if (newEmailString != "" || newTelString != "")
      {
        console.log("yesemail");
          console.log("extraaaa");
          newAddressField.value = newAddressString;
          newEmailField.value = newEmailString;
          newTelField.value = newTelString;
  
          var secondForm = document.getElementById("form2");
      
          var data = new FormData(secondForm);
          
  
          ajax(secondForm.method, secondForm.action, data);
      }
    }
    else
    {
      console.log("noemail");
    }
    

    

}

function ajax(method, url, data) {
    console.log("afterdata");
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    console.log("afterdata");
    xhr.setRequestHeader("Accept", "application/json");
    console.log("afterdata");
    xhr.onreadystatechange = function () {
        return;
        
    };
    xhr.send(data);
}