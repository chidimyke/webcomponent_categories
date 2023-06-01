"use strict";
// Dom import
const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

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
// This function adds a new item to the array per function call

function addData(obj) {
  data.push(obj);
  updateDOM();
}

// Update Dom Function
function updateDOM(providedData = data) {
  // clear main div

  main.innerHTML = `<h2><strong>Person</strong>Wealth</h2>`;

  providedData.forEach();
}
