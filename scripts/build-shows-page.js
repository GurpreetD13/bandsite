concertsData = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },
    {
        date: "Wed Dec 15 2021 ",
        venue: "Press Club",
        location: "San Francisco, CA"
    }
];

const mainSection = document.querySelector(".main__container");

function createShows(date, venue, location) {

    const showContainer = document.createElement("article");
    showContainer.classList.add("show");
    mainSection.appendChild(showContainer);

    const dateLabel = document.createElement("p");
    dateLabel.classList.add("show__info-heading");
    dateLabel.innerText = "DATE";
    showContainer.appendChild(dateLabel);

    const dateText = document.createElement("p");
    dateText.classList.add("show__info", "show__info--date");
    dateText.innerText = date;
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
}

// concertsData.forEach(concert => {
//     createShows(concert.date, concert.venue, concert.location);
// });


// Below is code that allows only one clicked show row to remain actively highlighted. 
// It loops through each checked row to Check if it was the one that was clicked

const rows = document.querySelectorAll(".show");

rows.forEach((row) => {
    row.addEventListener("click", event => {

        rows.forEach((checkedRow) => {
            if (checkedRow === event.currentTarget) {
                checkedRow.classList.add("show--active");
            } else {
                checkedRow.classList.remove("show--active");
            }
        })
    })
});

// new for sprint-3 

const apiKey = "6051d48e-1d45-4741-89e0-e383b88213df";

axios.get(`https://project-1-api.herokuapp.com/showdates?api_key=${apiKey}`)
    .then(result => { //or use the word response
        console.log(result.data);
        const showsArray = result.data;

        showsArray.forEach(show => {
            createShows(show.date, show.place, show.location)

            
        })
    })
    .catch(error => {
        console.log(error);
    })