document.getElementById('btn-donate-nowf').addEventListener('click', function(event){
event.preventDefault();
const donateForFeni = getInputFieldValueById('input-donationf');
const accountBalance=getTextFieldValueById("account-balance");
if(typeof donateForFeni === "number" && !isNaN(donateForFeni) && (donateForFeni >0) && (donateForFeni <= accountBalance)){
   const fBalance = getTextFieldValueById('feni-acc-blnc');
   const fNewBalance = fBalance + donateForFeni;
   document.getElementById('feni-acc-blnc').innerText = fNewBalance;
   
  const newBalance =accountBalance - donateForFeni;
  document.getElementById('account-balance').innerText = newBalance;

   const historyEntry = document.createElement("div");
   historyEntry.classList.add("border","p-4", "rounded-lg", "shadow-sm");
   historyEntry.innerHTML= `
   <h3 class="font-bold">${donateForFeni} Taka is Donate for Flood Relief in Feni, Bangladesh </h3>
   <p>Date:${new Date().toLocaleString()} </p>`;
   document.getElementById('history-container').appendChild(historyEntry);

   document.getElementById('show-modal-btn').showModal();
}
else{
    alert('Invalid Donation Amount')
}
});