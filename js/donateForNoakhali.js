document.getElementById('btn-donate-now').addEventListener('click', function(event){
event.preventDefault();
const donateForNoakhali = getInputFieldValueById('input-donation');
const accountBalance=getTextFieldValueById("account-balance");
if(typeof donateForNoakhali === "number" && !isNaN(donateForNoakhali) && (donateForNoakhali >0) && (donateForNoakhali <= accountBalance)){
   const fBalance = getTextFieldValueById('noakhali-acc-blnc');
   const fNewBalance = fBalance + donateForNoakhali;
   document.getElementById('noakhali-acc-blnc').innerText = fNewBalance;

  
  const newBalance =accountBalance - donateForNoakhali;
  document.getElementById('account-balance').innerText = newBalance;
}
else{
    alert('Wrong Input')
}
});