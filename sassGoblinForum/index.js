fetch("https://localhost:5001/Post")
.then((response) => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("NETWORK RESPONSE ERROR");
    }
})
.then(data => {
    console.log(data);
    displayPost(data)
})
.catch((error) => console.error("FETCH ERROR:", error));
//Make a for loop later that runs through all posts in array in database
function displayPost(data) {
    const post1 = data[0];
    const postDiv = document.getElementById("post1");
    const postId = post1.id;
    const postDate = post1.date;
    const postTitle = post1.title;
    const postBodytext = post1.bodytext;

    const heading = document.createElement("h1");
    const bodytext = document.createElement("h2");
    heading.innerHTML = postTitle;
    bodytext.innerHTML = postBodytext;
    postDiv.appendChild(heading);
    postDiv.appendChild(bodytext);

}


