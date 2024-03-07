const additionnalFields = document.getElementById("additionnalFields");
const additionnalFieldsDatalist = document.getElementById("additionnalFieldsDatalist");

var uIDFields = 0;
var additionnalFieldsList = [];

function addField(title)
{
    if(title == null)
        title = "";
    var divWrapper = document.createElement("div");
    divWrapper.className = "additonnalField";
    divWrapper.id = "additonnalField" + String(uIDFields);
    
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

    var removeInput = document.createElement("button");
    removeInput.innerHTML = "X";
    removeInput.setAttribute("onclick", "removeField(" + String(uIDFields) + ")");
    divWrapper.appendChild(removeInput);

    additionnalFieldsList.push(divWrapper);
    additionnalFields.appendChild(divWrapper);

    uIDFields++;
}

function addToDatalist(value) {
    var optionDatalist = document.createElement("option");
    optionDatalist.value = value;
    additionnalFieldsDatalist.appendChild(optionDatalist);
}

function removeField(id) {
    var indexOfID = -1;
    for(var i = 0; i < additionnalFieldsList.length ; i++)
    {
        if(additionnalFieldsList[i].id == "additonnalField" + String(id))
        {
            indexOfID = i;
            break;
        }
    }
    if(indexOfID == -1)
        return;
    additionnalFields.removeChild(additionnalFieldsList[indexOfID]);
    additionnalFieldsList.splice(indexOfID, 1);
}

addToDatalist("Placeholder"); //TODO: Use a database

addField("Nature / Composition");
addField("Dimensions");
addField("Poids");
addField("Provenance");