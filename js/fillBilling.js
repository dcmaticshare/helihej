function FillBilling(f) {
  if(f.sameAddressCheck.checked == true) {
    f.workAddress.value = f.billingAddress.value;
  }
  else
  {
    f.workAddress.value = "";
  }
}