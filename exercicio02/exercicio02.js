document.getElementById("btn1").onclick = () =>{
    let text_area = document.getElementById("caixa").value;
    if(text_area === ""){
        alert("Digite alguma coisa!")
    }else{
        document.getElementById("listau").innerHTML = `<li>${text_area}</li>`;
        document.getElementById("caixa").value = "";
    }
}