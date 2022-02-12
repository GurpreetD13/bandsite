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
]

const mainSection = document.querySelector(".main__container");

function createShows(date, venue, location) {

    let articleEl = document.createElement("article");
    articleEl.classList.add("show");

    let pEl1 = document.createElement("p");
    pEl1.classList.add("show__info-heading")
    pEl1.innerText = "DATE";
    articleEl.appendChild(pEl1);

    let pEl2 = document.createElement("p");
    pEl2.classList.add("show__info", "show__info--date")
    pEl2.innerText = date;
    articleEl.appendChild(pEl2);

    let pEl3 = document.createElement("p");
    pEl3.classList.add("show__info-heading")
    pEl3.innerText = "VENUE";
    articleEl.appendChild(pEl3);

    let pEl4 = document.createElement("p");
    pEl4.classList.add("show__info")
    pEl4.innerText = venue;
    articleEl.appendChild(pEl4);

    let pEl5 = document.createElement("p");
    pEl5.classList.add("show__info-heading")
    pEl5.innerText = "LOCATION";
    articleEl.appendChild(pEl5);

    let pEl6 = document.createElement("p");
    pEl6.classList.add("show__info")
    pEl6.innerText = location;
    articleEl.appendChild(pEl6);

    let buttonEl = document.createElement("button");
    buttonEl.setAttribute("type", "button");
    buttonEl.innerText = "BUY TICKETS";
    articleEl.appendChild(buttonEl);

    mainSection.appendChild(articleEl)
}

concertsData.forEach(concert => {
    createShows(concert.date, concert.venue, concert.location);
});