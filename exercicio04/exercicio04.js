var randomNum = Math.floor(Math.random() * 100 + 1);

var guess = 1;

var btnEnviar = document.getElementById("btnEnviar").onclick = function(){
var inputContent = document.getElementById("inputContent").value;

if( inputContent == randomNum ){
    var li = document.createElement("li");

    li.innerHTML = `
        <p><b> ${inputContent} é o número certo! </b></p>
    `

    
    var list = document.getElementById("lista");
    list.insertBefore(li, list.children[0]);
}
else if ( inputContent > randomNum ){
    var li = document.createElement("li");
    
    li.innerHTML = `
        <p> ${inputContent} é muito alto </p>
    `
    var list = document.getElementById("lista");
    list.insertBefore(li, list.children[0]);
}
else{
    var li = document.createElement("li");

    li.innerHTML = `
        <p> ${inputContent} é muito baixo </p>
    `

    
    var list = document.getElementById("lista");
    list.insertBefore(li, list.children[0]);
}
};

