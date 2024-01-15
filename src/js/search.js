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

var postList = document.getElementById("post-list");

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

        var postTitle = document.createElement("h3");
        postTitle.innerHTML = post.name;
        postDiv.appendChild(postTitle);

        var postDesc = document.createElement("p");
        postDesc.innerHTML = post.description;
        postDiv.appendChild(postDesc);

        postList.appendChild(postDiv);
    });
}

loadPosts();