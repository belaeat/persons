const personsName = document.querySelectorAll(".name");
const username = document.querySelectorAll(".username");
const email = document.querySelectorAll(".email");
const avatar = document.querySelectorAll(".avatar");

/* Trying fetch method */

async function fetchUserData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    for (let i = 0; i <= 10; i++) {
      personsName[i].innerHTML = data[i].name;
      username[i].innerHTML = data[i].username;
      email[i].innerHTML = data[i].email;
    }
  } catch (error) {
    console.log("Error", error);
  }
}

async function avatarFunction() {
  try {
    const response = await fetch("https://robohash.org/");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error", error);
  }
}

fetchUserData();
