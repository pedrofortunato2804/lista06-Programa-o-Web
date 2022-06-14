// Primeiro cracha

var logo = document.getElementById("logo");
var inputLogo = document.getElementById("inputLogo");

logo.addEventListener('click', () => {
    inputLogo.click();
});

inputLogo.addEventListener('change', (ev) => {
    var reader = new FileReader();

    reader.onload = () => {
        var content = reader.result;
        logo.innerHTML = `
            <img src= "${content}">
        `;
    }

    reader.readAsDataURL(inputLogo.files[0]);
});

var companyName = document.getElementById("empresa");
var inputContent = document.getElementById("empresa").value; 

