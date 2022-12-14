var inputElt1=document.getElementById("nom");
inputElt1.addEventListener("focus", function () {
    document.getElementById("aideNom").textContent = "Entrer votre nom";
})
inputElt1.addEventListener("blur", function () {
    document.getElementById("aideNom").textContent = "";
})
var inputElt2=document.getElementById("prenom");
inputElt2.addEventListener("focus", function () {
    document.getElementById("aidePrenom").textContent = "Entrer votre prenom";
})
inputElt2.addEventListener("blur", function () {
    document.getElementById("aidePrenom").textContent = "";
})
var inputElt3=document.getElementById("email");
inputElt3.addEventListener("focus", function () {
    document.getElementById("aideEmail").textContent = "Entrer votre adresse";
})
inputElt3.addEventListener("blur", function () {
    document.getElementById("aideEmail").textContent = "";
})
var inputElt4=document.getElementById("tel");
inputElt4.addEventListener("focus", function () {
    document.getElementById("aideTel").textContent = "Entrer votre numéro";
})
inputElt4.addEventListener("blur", function () {
    document.getElementById("aideTel").textContent = "";
})

var formElt= document.getElementById("MyForm");
formElt.addEventListener("submit",function(e){
    var nom=formElt.elements.nom.value;
     var  prenom=formElt.elements.prenom.value;
     var email=formElt.elements.email.value;
     var tel=formElt.elements.tel.value;
     var nbr=formElt.elements.nbr.value;
     var date=formElt.elements.date.value;
     var heure=formElt.elements.heure.value;
    
    confirm("Confirmez vous ces informations?\n votre nom: "+nom+"\n Votre prenom: "+prenom+" \nVotre email: "+email+" \nVotre numéro de téléphone: "+tel+" \nNombre de personnes: "+nbr+" \nDate de réservation "+date+ " \nHeure de reservation: "+heure);
})
