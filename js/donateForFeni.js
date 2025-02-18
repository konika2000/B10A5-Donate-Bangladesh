document.getElementById('btn-donate-nowf').addEventListener('click', function(event){
event.preventDefault();
const donateForFeni = getInputFieldValueById('input-donationf');
const accountBalance=getTextFieldValueById("account-balance");
if(typeof donateForFeni === "number" && !isNaN(donateForFeni) && (donateForFeni >0) && (donateForFeni <= accountBalance)){
   const fBalance = getTextFieldValueById('feni-acc-blnc');
   const fNewBalance = fBalance + donateForFeni;
   document.getElementById('feni-acc-blnc').innerText = fNewBalance;
   
   alert('Congratulations!')
  
  const newBalance =accountBalance - donateForFeni;
  document.getElementById('account-balance').innerText = newBalance;

  const p = document.createElement ('p');
   p.innerText = `${donateForFeni} Taka is Donate for Flood Relief in Feni, Bangladesh `;
   console.log(p);
   document.getElementById('history-container').appendChild(p);
}
else{
    alert('Invalid Donation Amount')
}
});