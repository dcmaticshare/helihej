function FillBilling(f) {
  if(f.sameAddressCheck.checked == true) {
    f.werfadresstraat.value = f.facturatieadresstraat.value;
    f.werfadresgemeente.value = f.facturatieadresgemeente.value;

  }
  else
  {
    f.workAddress.value = "";
  }
}