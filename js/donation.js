document.getElementById('btn-donate-now').addEventListener('click', function(event){
event.preventDefault();
const donateForNoakhali = getInputFieldValueById('input-donation');
const accountBalance=getTextFieldValueById("account-balance");
if(typeof donateForNoakhali === "number" && !isNaN(donateForNoakhali) && (donateForNoakhali >0) && (donateForNoakhali <= accountBalance)){
   const nBalance = getTextFieldValueById('noakhali-acc-blnc');
   const NnewBalance = nBalance + donateForNoakhali;
   document.getElementById('noakhali-acc-blnc').innerText = NnewBalance;

  
  const newBalance =accountBalance - donateForNoakhali;
  document.getElementById('account-balance').innerText = newBalance;
}
else{
    alert('Wrong Input')
}
});