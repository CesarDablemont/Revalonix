const maxMaxHeightDetailledSearchDivAnim = 120; //In px
const maxHeightDeltaDetailledSearchDivAnim = 10;

var detailledSearchDiv = document.getElementById("detailled-search");
var detailledSearchDivShown = false;
var currentDetailledSearchDivMaxHeight = 0;
var detailledSearchDivAnim = null;

document.getElementById("detailled-search-button").addEventListener("click", function() {
    if(detailledSearchDivAnim != null)
        window.clearInterval(detailledSearchDivAnim);
    detailledSearchDivShown = !detailledSearchDivShown;
    detailledSearchDivAnim = setInterval(detailledHideAnim, 16, detailledSearchDivShown);
});

function detailledHideAnim(shouldShow) {
    if(shouldShow)
        currentDetailledSearchDivMaxHeight += maxHeightDeltaDetailledSearchDivAnim;
    else
    currentDetailledSearchDivMaxHeight -= maxHeightDeltaDetailledSearchDivAnim;
    detailledSearchDiv.style["max-height"] = currentDetailledSearchDivMaxHeight + "px";
    detailledSearchDiv.style["min-height"] = currentDetailledSearchDivMaxHeight + "px";
    if(currentDetailledSearchDivMaxHeight == 0 || currentDetailledSearchDivMaxHeight == maxMaxHeightDetailledSearchDivAnim)
        window.clearInterval(detailledSearchDivAnim);
}

/*

[posts.json data architecture]

{
    "posts":[
        {
            "name":string,
            "type":string,
            "description":string
        }
        ...
    ]
}

*/