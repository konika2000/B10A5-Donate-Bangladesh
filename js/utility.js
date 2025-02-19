function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value ;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showSectionById(id){
    // hidden all the section
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    // show the section with the provide id as parameter
    
    document.getElementById(id).classList.remove('hidden');
}

function showModalById(id){
    document.getElementById('btn-donate-now').classList.add('active')
}
function showModalById(id){
    document.getElementById('btn-donate-nowf').classList.add('active')
}
function showModalById(id){
    document.getElementById('btn-donate-nowa').classList.add('active')
}