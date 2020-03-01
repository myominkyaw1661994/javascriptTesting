import "./styles.css";

//single element
// console.log(document.getElementById("my-form"));
// console.log(document.querySelector(".container"));

//multiple element
// two are same
// console.log(document.querySelectorAll(".item"));
// console.log(document.getElementsByClassName("item"));
// console.log(document.getElementsByTagName('li'));

// const item = document.querySelectorAll(".item");

// console.log(item);
// item.forEach(item => console.log(item));

// const ul = document.querySelector(".items");

// ul.remove();
// ul.lastElementChild.remove(); delete the last one
// ul.firstElementChild.textContent = "Hello";
// ul.children[1].innerHTML = "Hello" // second one select
// ul.lastElementChild.innerHTML = "<h3>Hello world</h3>";

// const btn = document.querySelector(".btn");
// btn.style.background = 'red';
// btn.addEventListener("mouseout", e => {
// e.preventDefault(); // prevent refresh
// console.log(e.target.id);

// document.querySelector("#my-form").style.background = "#ccc";
//add new class in the body
// document.querySelector("body").classList.add("bg-dark");
// });

const myForm = document.querySelector("#my-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const msg = document.querySelector(".msg");
const user = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (name.value === "" || email.value === "") {
    msg.classList.add("error"); //add new class
    msg.innerHTML = "Please Enter all field";

    setTimeout(() => msg.remove(), 3000); //after 3 second will be deleter
  } else {
    console.log("success");
    const li = document.createElement("li");

    li.appendChild(document.createTextNode(`${name.value} : ${email.value}`));

    user.appendChild(li);

    //clear the field

    name.value = "";
    email.value = "";
  }
}
