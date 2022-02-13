commentsData = [
    {
        name: "Connor Walton",
        timestamp: "02/17/2021",
        comment: "This is art.This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence.Let us appreciate this for what it is and what it contains."
    },
    {
        name: "Emilie Beach",
        timestamp: "01/09/2021",
        comment: "I feel blessed to have seen them in person.What a show! They were just perfection.If there was one day of my life I could relive, this would be it.What an incredible day."
    },
    {
        name: "Miles Acosta",
        timestamp: "12/20/2020",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
]

// const

let commentsSection = document.querySelector(".comments-section");

function displayComment(post) {
    
    let newComment = document.createElement("div");
    newComment.classList.add("comment-post");
    commentsSection.appendChild(newComment);
    
    let avatar = document.createElement("div");
    avatar.classList.add("comment-post__avatar");
    newComment.appendChild(avatar);
    
    let commentContainer = document.createElement("div");
    commentContainer.classList.add("comment-post__container");
    newComment.appendChild(commentContainer);
    
    let commentHeading = document.createElement("div");
    commentHeading.classList.add("comment-post__heading-container");
    commentContainer.appendChild(commentHeading);
    
    let commentName = document.createElement("p");
    commentName.classList.add("comment-post__name");
    commentName.innerText = post.name;
    commentHeading.appendChild(commentName);
    
    let commentDate = document.createElement("p");
    commentDate.classList.add("comment-post__date");
    commentDate.innerText = post.timestamp;
    commentHeading.appendChild(commentDate);
    
    let commentText = document.createElement("p");
    commentText.classList.add("comment-post__heading-comment");
    commentText.innerText = post.comment;
    commentContainer.appendChild(commentText);
}






// bottomOfForm.appendChild(newComment);


commentsData.forEach(post => {
    displayComment(post)
});




// add event listener here or above??