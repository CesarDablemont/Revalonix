var label = document.getElementById('findPostLabel');
var input = document.getElementById('findPostInput');
var icon = document.getElementById('findPostIcon');

function searchPostClicked()
{
    label.style["display"] = "none";
    input.style["display"] = "inherit";
    icon.style["display"] = "inherit";

    input.focus();
    input.selected();
}

function keyPressedOnInput()
{
    if(event.key === 'Enter') {
        searchPostFromIndex();
    }
}

function searchPostFromIndex()
{
    location.href = "search.html?search=" + input.value;
}