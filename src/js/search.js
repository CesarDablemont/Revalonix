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
    refreshList();
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

/*

[posts HTML architecture]

<div>
    <h3>Name</h3>
    <p>Description</p>
</div>

*/

var postList = document.getElementById("post-list");

//Warning : The two arrays should be synced
var postDivs = [];
var postDatas = [];

async function loadPosts() {
    //Load deetas
    try {
        const response = await fetch('../js/json/posts.json'); //Why does it search from search.html and not search.js ? js is dumb ooga booga
        posts = await response.json();
    } catch (error) {
        console.error(error);
        return;
    }

    posts.posts.forEach(post => {
        var postDiv = document.createElement("div");
        postDiv.className = "postDiv";

        var postTitle = document.createElement("h3");
        postTitle.innerHTML = post.name;
        postDiv.appendChild(postTitle);

        var postDesc = document.createElement("p");
        postDesc.innerHTML = post.description;
        postDiv.appendChild(postDesc);

        postDatas.push(post);
        postDivs.push(postDiv);
        postList.appendChild(postDiv);
    });
}

loadPosts();

var searchBar = document.getElementById("search-bar-input");
var checkboxPaper = document.getElementById("detailled-search-material-paper");
var checkboxGlass = document.getElementById("detailled-search-material-glass");
var checkboxCardboard = document.getElementById("detailled-search-material-cardboard");
var checkboxMetal = document.getElementById("detailled-search-material-metal");

var fillingDivs = [];

function refreshList() {
    var numberOfShownDivs = 0;

    fillingDivs.forEach(div => {
        postList.removeChild(div);
    });

    for(var i = 0; i < postDivs.length; i++)
    {
        //Hide the div by default
        postDivs[i].style["display"] = "none";

        //Check if it should actually be hidden
        if(!(postDatas[i].name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") + postDatas[i].description.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")).includes(searchBar.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")))
            continue;
        if(postDatas[i].type == "paper" && !checkboxPaper.checked)
            continue;
        if(postDatas[i].type == "glass" && !checkboxGlass.checked)
            continue;
        if(postDatas[i].type == "cardboard" && !checkboxCardboard.checked)
            continue;
        if(postDatas[i].type == "metal" && !checkboxMetal.checked)
            continue;

        //Show the div
        postDivs[i].style["display"] = "inherit";
        numberOfShownDivs++;
    }

    while(numberOfShownDivs + 1 < postList.offsetWidth / 285)
    {
        numberOfShownDivs++;
        var div = document.createElement("div");
        fillingDivs.push(div);
        postList.appendChild(div);
    }
}

