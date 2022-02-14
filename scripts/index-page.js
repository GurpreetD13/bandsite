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
];

// Function displayComment below will take in Comment object as parameter and render 
// comment posts from database with: name, timestamp, and text.

const commentPostsSection = document.querySelector(".comment-posts");

function displayComment(post) {

    const commentPostEl = document.createElement("div");
    commentPostEl.classList.add("comment-post");
    commentPostsSection.appendChild(commentPostEl);

    const avatar = document.createElement("div");
    avatar.classList.add("comment-post__avatar");
    commentPostEl.appendChild(avatar);

    const commentContainer = document.createElement("div");
    commentContainer.classList.add("comment-post__container");
    commentPostEl.appendChild(commentContainer);

    const commentHeading = document.createElement("div");
    commentHeading.classList.add("comment-post__heading-container");
    commentContainer.appendChild(commentHeading);

    const commentName = document.createElement("p");
    commentName.classList.add("comment-post__name");
    commentName.innerText = post.name;
    commentHeading.appendChild(commentName);

    const commentDate = document.createElement("p");
    commentDate.classList.add("comment-post__date");
    commentDate.innerText = post.timestamp;
    commentHeading.appendChild(commentDate);

    const commentText = document.createElement("p");
    commentText.innerText = post.comment;
    commentContainer.appendChild(commentText);
};


commentsData.forEach(post => {
    displayComment(post)
});


// Section below takes user comment and re-renders comments all comments including new user comment

const formData = document.getElementById("comment-form");

formData.addEventListener("submit", event => {
    event.preventDefault();

    if (event.target.userName.value.length < 2) {
        alert("Please enter a minimum of 2 characters for the NAME field and re-submit. Thank you!");
        return;

    } else if (event.target.userComment.value.length < 10) {
        alert("Please enter a minimum of 10 characters for the COMMENT field and re-submit. Thank you!");
        return;

    } else {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();

        if (dd < 10) { dd = '0' + dd; };
        if (mm < 10) { mm = '0' + mm; };

        today = mm + '/' + dd + '/' + yyyy;


        const newUserComment = {
            name: event.target.userName.value,
            timestamp: today,
            comment: event.target.userComment.value
        };

        commentsData.unshift(newUserComment);

        commentPostsSection.innerHTML = "";

        commentsData.forEach(post => {
            displayComment(post);
        });

        formData.reset();

        alert('Thank you, your comment has been successfully sumbitted. Check out our Shows page!');
    }
});