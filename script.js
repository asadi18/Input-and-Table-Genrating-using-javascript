const mainAreaEl = document.querySelector(".main-area");

// const nameEl = document.getElementById("namebox");
// const emailEl = document.getElementById("emailbox");
// const passwordEl = document.getElementById("passwordbox");
// const btnEl = document.querySelector(".btn");

// const tbodyEl = document.getElementById("tbody");
let idValue = 1;

// let inputForm = function () {

let inputformEl = document.createElement("div");
inputformEl.setAttribute("class", "input");
mainAreaEl.appendChild(inputformEl);

let nameContainerEl = document.createElement("div");
nameContainerEl.setAttribute("class", "name");
let lableName = document.createElement("label");
lableName.innerText = "Name";

let nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("id", "namebox");
inputformEl.appendChild(nameContainerEl);
nameContainerEl.appendChild(lableName);
nameContainerEl.appendChild(nameInput);

let emailContainer = document.createElement("div");
emailContainer.setAttribute("class", "email");
inputformEl.appendChild(emailContainer);
let emailLabel = document.createElement("label");
emailLabel.innerText = "Email";
emailContainer.appendChild(emailLabel);
let emailInputBox = document.createElement("input");
emailInputBox.setAttribute("type", "email");
emailInputBox.setAttribute("id", "emailbox");
emailContainer.appendChild(emailInputBox);

let passContainerEl = document.createElement("div");
passContainerEl.setAttribute("class", "password");
inputformEl.appendChild(passContainerEl);
let passLabel = document.createElement("label");
passLabel.innerText = "Password";
passContainerEl.appendChild(passLabel);
let passInput = document.createElement("input");
passInput.setAttribute("id", "passwordbox");
passInput.setAttribute("type", "password");
passContainerEl.appendChild(passInput);

let btnContainer = document.createElement("button");
btnContainer.setAttribute("class", "btn");
btnContainer.innerText = "Add";
inputformEl.appendChild(btnContainer);
// };

// inputForm();

// const tableHead = function(){

// }

const tableMainDiv = document.querySelector(".table-section");
tableMainDiv.setAttribute("class", "table");
const tableMainEl = document.createElement("table");
tableMainDiv.appendChild(tableMainEl);
const theadEl = document.createElement("thead");
tableMainEl.appendChild(theadEl);

const th1 = document.createElement("th");
th1.innerText = "ID";
theadEl.appendChild(th1);

const th2 = document.createElement("th");
th2.innerText = "Name";
theadEl.appendChild(th2);

const th3 = document.createElement("th");
th3.innerText = "Email";
theadEl.appendChild(th3);

const th5 = document.createElement("th");
th5.innerText = "Password";
theadEl.appendChild(th5);

const th6 = document.createElement("th");
th6.innerText = "Update / Delete";
theadEl.appendChild(th6);

let tableBody = document.createElement("tbody");
tableBody.setAttribute("id", "tbody");
tableMainEl.appendChild(tableBody);

btnContainer.addEventListener("click", function () {
  // console.log("hi")
  let tr = document.createElement("tr");

  let td1 = tr.appendChild(document.createElement("td"));
  let td2 = tr.appendChild(document.createElement("td"));
  let td3 = tr.appendChild(document.createElement("td"));
  let td4 = tr.appendChild(document.createElement("td"));
  let td5 = tr.appendChild(document.createElement("td"));
  tableBody.appendChild(tr);

  td1.innerHTML = idValue;
  td2.innerHTML = nameInput.value;
  td3.innerHTML = emailInputBox.value;
  td4.innerHTML = passInput.value;

  //After submit

  nameInput.value = "";
  emailInputBox.value = "";
  passInput.value = "";

  let updateBtn = document.createElement("button");
  updateBtn.innerHTML = "Update";
  updateBtn.classList.add("smallbtn");
  td5.appendChild(updateBtn);

  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.classList.add("smallbtn");
  td5.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", function () {
    tableBody.removeChild(tr);
  });

  //UpdateBtn

  updateBtn.addEventListener("click", function () {
    // td1.innerHTML = prompt("Enter a New ID");
    // td2.innerHTML = prompt("Enter a New Name");
    // td3.innerHTML = prompt("Enter a New Email");
    // td4.innerHTML = prompt("Enter a New Password");
    nameInput.value = td2.textContent;
    emailInputBox.value = td3.textContent;
    passInput.value = td4.textContent;
    btnContainer.textContent = "Update";

    btnContainer.addEventListener('click',function () {
      td2.textContent = nameInput.value;
      td3.textContent = emailInputBox.value;
      td2.textContent = passInput.value;
      btnContainer.textContent = "Add";
      tableBody.removeChild(tr);
    });
  });

  idValue++;
});
