let data = [
  { id: 1, name: "arun", email: "arun@gmail.com", phone: 123412341 },
  { id: 2, name: "arun", email: "arun@gmail.com", phone: 123412341 },
  { id: 3, name: "arun", email: "arun@gmail.com", phone: 123412341 },
  { id: 4, name: "arun", email: "arun@gmail.com", phone: 123412341 },
  { id: 5, name: "arun", email: "arun@gmail.com", phone: 123412341 },
  { id: 6, name: "arun", email: "arun@gmail.com", phone: 123412341 },
  { id: 7, name: "arun", email: "arun@gmail.com", phone: 123412341 },
  { id: 8, name: "arun", email: "arun@gmail.com", phone: 123412341 },
  { id: 9, name: "arun", email: "arun@gmail.com", phone: 123412341 },
  { id: 10, name: "arun", email: "arun@gmail.com", phone: 123419900 },
];
let tableList = document.querySelector("tbody");
// data.forEach((val, i) => {
//   tableList.innerHTML += `<tr>
//         <td>${val.id}</td>
//         <td>${val.name}</td>
//         <td>${val.gender}</td>
//         <td>${val.email}</td>
//         <td>${val.phone}</td>
//         <td><button onclick="doEditInfo(${i})" class="btn btn-edit">Edit</button>
//         <button  onclick="doDeleteInfo(${i})"  class="btn btn-clear">Delete</button></td>
//       </tr>`;
// });

let url = "http://localhost:8080/List/info/list";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // window.userdata = data;
    data.forEach((val, i, arr) => {
      tableList.innerHTML += `<tr>
        <td>${i + 1}</td>
        <td class="name">${val.name}</td>
        <td class="gender">${val.gender}</td>
        <td class="email">${val.email}</td>
        <td class="phone">${val.phone}</td>
        <td><button onclick="doEditInfo(${i},${
        val.id
      })" class="btn btn-edit">Edit</button>
        <button onclick="doDeleteInfo(${
          val.id
        })" class="btn btn-clear">Delete</button></td>
      </tr>`;
    });
  });

function doEditInfo(i, id) {
  editInfoContainer.classList.add("visible");
  let fullname = document.getElementById("full_name");
  let email = document.getElementById("email");
  let gender = document.getElementById("gender");
  let phone = document.getElementById("phone");
  let userId = document.getElementById("userId");
  userId.value = id;
  fullname.value = document.querySelectorAll(".name")[i].textContent;
  email.value = document.querySelectorAll(".email")[i].textContent;
  gender.value = document.querySelectorAll(".gender")[i].textContent;
  phone.value = document.querySelectorAll(".phone")[i].textContent;
}
let addInfoContainer = document.querySelector(".add-info-section");
let editInfoContainer = document.querySelector(".edit-info-section");
function doAddInfo() {
  addInfoContainer.classList.add("visible");
}

function doUpdateInfo() {
  editInfoContainer.classList.remove("visible");
}
function doDeleteInfo(i, arr) {
  if (confirm("Do you want to Delete")) {
    let url = "http://localhost:8080/List/info/delete?id=" + i;
    window.location.href = url;
  }
  // fetch(url).then(res=>res.json()).then(data=>console.log(data));
}

function closeEditForm() {
  editInfoContainer.classList.remove("visible");
  addInfoContainer.classList.remove("visible");
}
