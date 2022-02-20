// Function below formats date of comments from numerical timestamp to dd/mm/yyyy format (it is used when rendering comments).

function commentDateFormatter(timestamp) {

    let date = new Date(timestamp);
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();

    if (dd < 10) { dd = '0' + dd; };
    if (mm < 10) { mm = '0' + mm; };

    return date = mm + '/' + dd + '/' + yyyy;
};

// Function displayComment below will take in Comment object as parameter (from later GET request from comments API)
// and render comment posts from database with: name, timestamp, and text.
// (the timestamp also gets converted using the commentDateFormatter function)
// We will invoke it in our GET comments request is successfull.

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
    commentDate.innerText = commentDateFormatter(post.timestamp);
    commentHeading.appendChild(commentDate);

    const commentText = document.createElement("p");
    commentText.innerText = post.comment;
    commentContainer.appendChild(commentText);
};

// Function displayLatestComments below will make GET request to get latest comments data from API, 
// sort them with newest on top and display them using the functions above.
// We invoke it once so that the latest comments are displayed upon initial page load.
// We will invoke it again to display the latest comments after our POST request/form submission.

const apiKey = "6051d48e-1d45-4741-89e0-e383b88213df";

let commentsDataArray = [];

function displayLatestComments() {
    axios.get(`https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`)
        .then(result => {

            commentsDataArray = result.data;

            // The result.data above is an array of comment Objects with a user name, comment, and timestamp.
            // Next we sort the comment objects reverse-chronologically (descending order from newest to oldest) by timestamp.

            commentsDataArray.sort((a, b) => {
                return b.timestamp - a.timestamp;
            });

            commentsDataArray.forEach(comment => {
                displayComment(comment);
            })
        })
        .catch(error => {
            console.log(error);
        })
};

displayLatestComments();

// Section below takes user comment, validates, makes POST request, 
// makes new current GET request for most up to date commments from other users, 
// and finally re-renders latest comments including users recent comment, and reset the form.

const formData = document.getElementById("comment-form");

formData.addEventListener("submit", event => {
    event.preventDefault();

    // validation:
    const userNameField = document.querySelector(".comment-form__user-name");
    const userTextField = document.querySelector(".comment-form__user-comment");

    if (event.target.userName.value.length < 1 || event.target.userComment.value.length < 1) {
        event.target.userName.value.length < 1 ? userNameField.classList.add("comment-form__user-name--error") : userNameField.classList.remove("comment-form__user-name--error");
        event.target.userComment.value.length < 1 ? userTextField.classList.add("comment-form__user-comment--error") : userTextField.classList.remove("comment-form__user-comment--error");
    } else {
        userNameField.classList.remove("comment-form__user-name--error");
        userTextField.classList.remove("comment-form__user-comment--error");

        // otherwise if valid continue as follows:

        let newUserComment = {
            name: event.target.userName.value,
            comment: event.target.userComment.value
        };

        axios.post(`https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`, newUserComment)
            .then(() => {
                // the result of our POST request is successful is a single object of the user's Comment now with a timestamp
                // However, we won't use the result, because we will instead go GET and displayLatestComments.
                // First clear all comments on page then displayi latest comments.
                while (commentPostsSection.firstChild) {
                    commentPostsSection.removeChild(commentPostsSection.firstChild);
                };
                
                displayLatestComments();

                formData.reset();
            })
            .catch(error => {
                console.log(error);
            })
    }
});