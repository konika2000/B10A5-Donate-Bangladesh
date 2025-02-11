document.getElementById('btn-donate-nowa').addEventListener('click', function(event){
event.preventDefault();
const donateForAid = getInputFieldValueById('input-donationa');
const accountBalance=getTextFieldValueById("account-balance");
if(typeof donateForAid === "number" && !isNaN(donateForAid) && (donateForAid >0) && (donateForAid <= accountBalance)){
   const aBalance = getTextFieldValueById('aid-acc-blnc');
   const aNewBalance = aBalance + donateForAid;
   document.getElementById('aid-acc-blnc').innerText = aNewBalance;

  
  const newBalance =accountBalance - donateForAid;
  document.getElementById('account-balance').innerText = newBalance;
}
else{
    alert('Wrong Input')
}
});