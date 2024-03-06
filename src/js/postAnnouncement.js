const additionnalFields = document.getElementById("additionnalFields");
const additionnalFieldsDatalist = document.getElementById("additionnalFieldsDatalist");

var uIDFields = 0;

function addField(title)
{
    if(title == null)
        title = "";
    var divWrapper = document.createElement("div");
    divWrapper.className = "additonnalField";
    
    var titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id= "title" + String(uIDFields);
    titleInput.name= "title"  + String(uIDFields);
    titleInput.setAttribute('list', "additionnalFieldsDatalist"); //Ouga Bouga JS
    titleInput.value = title;
    divWrapper.appendChild(titleInput);

    var valueInput = document.createElement("input");
    valueInput.type = "text";
    valueInput.id= "value" + String(uIDFields);
    valueInput.name= "value"  + String(uIDFields);
    divWrapper.appendChild(valueInput);

    additionnalFields.appendChild(divWrapper);

    uIDFields++;
}

function addToDatalist(value) {
    var optionDatalist = document.createElement("option");
    optionDatalist.value = value;
    additionnalFieldsDatalist.appendChild(optionDatalist);
}

addToDatalist("Placeholder"); //TODO: Use a database

addField("Nature / Composition");
addField("Dimensions");
addField("Poids");
addField("Provenance");