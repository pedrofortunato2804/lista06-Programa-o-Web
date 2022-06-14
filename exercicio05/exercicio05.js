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

var btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener('click', () => {
    var content = document.getElementById("empresa").value;
    var inputSubmit = document.getElementById('divInp');

    console.log(content);
});

