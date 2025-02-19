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

   const historyEntry = document.createElement("div");
   historyEntry.classList.add("border","p-4", "rounded-lg", "shadow-sm");
   historyEntry.innerHTML= `
   <h3 class="font-bold">${donateForAid} Taka is Donate for Aid for Injured in the Quota Movement, Bangladesh </h3>
   <p>Date:${new Date().toLocaleString()} </p>`;
   document.getElementById('history-container').appendChild(historyEntry);

   document.getElementById('show-modal-btn').showModal();
}
else{
    alert('Invalid Donation Amount')
}
});