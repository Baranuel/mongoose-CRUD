const form = document.querySelector("#form");
const title = document.querySelector("#title");
const country = document.querySelector("#country");
const place = document.querySelector("#place");
const dateFrom = document.querySelector("#date-from");
const dateTo = document.querySelector("#date-to");
const description = document.querySelector("#description");
const submit = document.querySelector("#submit");
const spinner = document.getElementById("spinner");

const populateData = () => {
  destinations.forEach((el) => {
    const a = document.createElement("a");
    a.href = `destination.html?${el._id}`;
    a.innerHTML = `
    <li>
    <h2>${el.title}</h2>
    <span>${el.dateFrom} / ${el.dateTo}</span>
    <p>${el.description}</p>
    </li>
    `;

    document.querySelector(".destinations").append(a);
  });
};

let destinations;
const showSpinner = () => {
  spinner.classList.add("lds-ripple");
};

const HideSpinner = () => {
  spinner.classList.remove("lds-ripple");
};

const getData = async () => {
  try {
    showSpinner();
    const data = await fetch("http://localhost:3000");
    const response = await data.json();
    HideSpinner();
    destinations = response;

    populateData();
  } catch (err) {
    console.log(err);
  }
};

getData();

const postData = async (payload) => {
  const request = await fetch("http://localhost:3000", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(payload),
  });

  const response = await request.json();

  if (request.status !== 200) {
    showErrors(response);
    return;
  }
  location.reload();
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const destination = {
    title: title.value,
    country: country.value,
    location: place.value,
    dateFrom: dateFrom.value,
    dateTo: dateTo.value,
    description: description.value,
  };

  postData(destination);
});
