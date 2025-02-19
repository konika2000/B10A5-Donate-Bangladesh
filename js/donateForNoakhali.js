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
 
   const historyEntry = document.createElement("div");
   historyEntry.classList.add("border","p-4", "rounded-lg", "shadow-sm");
   historyEntry.innerHTML= `
   <h3 class="font-bold">${donateForNoakhali} Taka is Donate for Flood at Noakhali, Bangladesh </h3>
   <p>Date:${new Date().toLocaleString()} </p>`;
   document.getElementById('history-container').appendChild(historyEntry);

   document.getElementById('show-modal-btn').showModal();

}
else{
    alert('Invalid Donation Amount')
}
});