// Function below formats date of shows from string timestamp to "Day MON dd yyyy" format (it is used when rendering shows).

function showDateFormatter(timestamp) {

    timestamp = Number(timestamp);
    let date = new Date(timestamp);
    return date = date.toDateString();
};

// Function displayShows below will take in shows data (from later GET request from shows API)
// and render shows info with: timestamp, venue, and location.
// (the timestamp also gets converted using the showDateFormatter function)
// We will invoke it in our GET show request is successfull.

const mainSection = document.querySelector(".main__container");

function displayShows(date, venue, location) {

    const showContainer = document.createElement("article");
    showContainer.classList.add("show");
    mainSection.appendChild(showContainer);

    const dateLabel = document.createElement("p");
    dateLabel.classList.add("show__info-heading");
    dateLabel.innerText = "DATE";
    showContainer.appendChild(dateLabel);

    const dateText = document.createElement("p");
    dateText.classList.add("show__info", "show__info--date");
    dateText.innerText = showDateFormatter(date);
    showContainer.appendChild(dateText);

    const venueLabel = document.createElement("p");
    venueLabel.classList.add("show__info-heading");
    venueLabel.innerText = "VENUE";
    showContainer.appendChild(venueLabel);

    const venueText = document.createElement("p");
    venueText.classList.add("show__info");
    venueText.innerText = venue;
    showContainer.appendChild(venueText);

    const locationLabel = document.createElement("p");
    locationLabel.classList.add("show__info-heading");
    locationLabel.innerText = "LOCATION";
    showContainer.appendChild(locationLabel);

    const locationText = document.createElement("p");
    locationText.classList.add("show__info");
    locationText.innerText = location;
    showContainer.appendChild(locationText);

    const buttonEl = document.createElement("button");
    buttonEl.setAttribute("type", "button");
    buttonEl.innerText = "BUY TICKETS";
    showContainer.appendChild(buttonEl);
};

// Function addRowHighlighting allows only one clicked show row to be actively highlighted. 
// It adds the click event listener to all rows after they are displayed and then 
// loops through each row to Check if it was the one that was clicked and highlight otherwise removes highlighting.
// We will invoke it when after our successfull GET request for shows data, and shows are displayed.

function addRowHighlighting() {
    const rows = document.querySelectorAll(".show");

    rows.forEach((row) => {
        row.addEventListener("click", event => {

            rows.forEach((checkedRow) => {
                if (checkedRow === event.currentTarget) {
                    checkedRow.classList.toggle("show--active");
                } else {
                    checkedRow.classList.remove("show--active");
                }
            })
        })
    });
};

// Ultimately, we use the above functions once we GET the show data below, to display the shows and add row highlighting.

const apiKey = "6051d48e-1d45-4741-89e0-e383b88213df";

axios.get(`https://project-1-api.herokuapp.com/showdates?api_key=${apiKey}`)
    .then(result => {

        const showsDataArray = result.data;

        // the result.data above is an array of show Objects with a date, place, and location.

        showsDataArray.forEach(show => {
            displayShows(show.date, show.place, show.location)
        });

        addRowHighlighting();
    })
    .catch(error => {
        console.log(error);
    });