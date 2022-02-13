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

// const

// Function below will take in Comment object as parameter and render 
// comment posts from database with name, timestamp, and text.

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
    // commentText.classList.add("comment-post__comment");
    commentText.innerText = post.comment;
    commentContainer.appendChild(commentText);
}


commentsData.forEach(post => {
    displayComment(post)
});


// add event listener here or above??
// comment for this section
// steps get form, eventlistener, prev fef, validate push into array, regen array, reset form
// doc or sub

let formData = document.getElementById("comment-form");

formData.addEventListener("submit", event => {
    event.preventDefault()

    if (event.target.user_name.value.length < 5) { //Min 2 char for first 2 char 
        alert("Please enter a minimum of 5 characters for the NAME field and re-submit. Thank you!");
        document.querySelector(".")
        // add warning class here
        return;

    } else if (event.target.user_comment.value.length < 20) {
        alert("Please enter a minimum of 20 characters for the COMMENT field and re-submit. Thank you!");
        // 
        return;

    } else {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();

        if (dd < 10) { dd = '0' + dd; };
        if (mm < 10) { mm = '0' + mm; };

        today = mm + '/' + dd + '/' + yyyy;


        let newUserComment = {
            name: event.target.user_name.value,
            timestamp: today,
            comment: event.target.user_comment.value
        }

        commentsData.unshift(newUserComment);

        // remove old comments

        commentsData.forEach(post => {
            displayComment(post);
        });

        formData.reset();

        alert('Your comment has been successfully sumbitted. Thank you! Check out out future upcoming shows.');
    }
});