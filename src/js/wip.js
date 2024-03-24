const isWip = true;

if(isWip)
{
    var body = document.querySelector("body");
    
    var wipDiv = document.createElement("div");
    wipDiv.id = "wipDiv";
    
    var wipTxt = document.createElement("p");
    wipTxt.innerHTML = "Le site Internet est encore en construction ! Rien n'est encore définitif et les fonctionnalités ne sont pas encore toutes activées.";
    wipDiv.appendChild(wipTxt);

    body.appendChild(wipDiv);
}