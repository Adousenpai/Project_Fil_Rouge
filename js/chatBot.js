var triggerButton = document.getElementById("trigger-chat");
var chatDiv = document.getElementById("container-chat");
var disableButton = document.getElementById('disable');
var sendButton = document.getElementById("send");
var textArea = document.getElementById("text-area");
var pElt = document.getElementById("initialText")
var inputElt = document.getElementById("message");
var createP = document.createElement("p")
var maPhrase = "Bonjour et bienvenue sur le chat veuillez nous adresser votre demande et un membre de l'équipe vous répondra dans les meilleurs délais.";
function whrite () {
    pElt.innerHTML = maPhrase;
}

function send () { 
    textArea.appendChild(createP);
    pElt.innerHTML = inputElt.value;
    inputElt.value = " ";
    setTimeout(function(){createP.innerHTML = "Veuillez nous excuser les membres de l'équipe sont actuellement en réunion.";}, 1000);
}

function pop () {
    chatDiv.style.opacity = "1";
    chatDiv.style.width = "20vw";
    chatDiv.style.height = "30vw";
    chatDiv.style.backgroundColor = "rgb(21, 106, 59)";
    triggerButton.style.display = "none";
}
function dispop () {
    chatDiv.style.opacity = "0";
    chatDiv.style.width = "0vw";
    chatDiv.style.height = "0vw";
    chatDiv.style.backgroundColor = "white";
    triggerButton.style.display = "block";
    createP.innerHTML = "";
}
triggerButton.addEventListener('click', pop);
triggerButton.addEventListener('click', whrite);
disableButton.addEventListener('click' , dispop);
sendButton.addEventListener('click', send);
sendButton.addEventListener('enter', send );
inputElt.addEventListener('keydown', function checkSubmit(e) {
    if(e && e.keyCode == 13) { 
        textArea.appendChild(createP);
        pElt.innerHTML = inputElt.value;
        inputElt.value = " ";
        setTimeout(function(){createP.innerHTML = "Veuillez nous excuser les membres de l'équipe sont actuellement en réunion.";}, 1000);
    }
 })
