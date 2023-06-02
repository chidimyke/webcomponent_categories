"use strict";
// Dom import
const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

// array definition
let data = [];

// getRandomUser();
// getRandomUser();
// getRandomUser();

// console.log(data);
// fetch action: random user and add money
async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();

  // console.log(data);
  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  // console.log(newUser);
  // A created function
  addData(newUser);
}

// Function definition for addData()
function addData(obj) {
  // This function adds a new item to the array per function call
  // it is a part of the getRandomUser() above
  data.push(obj);
  updateDOM();
}

// Update Dom Function
function updateDOM(providedData = data) {
  // This function updates the DOM based on the fetch parameters; it is a part of the addData() above
  // clear main div

  main.innerHTML = `<h2><strong>Person</strong>Wealth</h2>`;

  providedData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong>${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

// money format function
function formatMoney(number) {
  // This returns a value formatted to look like a currency number based on the regular expression
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

// Event Listeners
addUserBtn.addEventListener("click", getRandomUser);
