const tableData = document.querySelector(".table-data");
let item_id = document.querySelector("#id");
let item_name = document.querySelector("#name");
let item_user = document.querySelector("#user_name");
let item_email = document.querySelector("#email");
let item_phone = document.querySelector("#phone");
async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    headers: {},
  });
  const data = await res.json();
  let tableObject = "";
  data.forEach(function render(value) {
    tableObject += `
        <tr id="Item${value.id}">
              <td id="id">${value.id}</td>
              <td id="name">${value.name}</td>
              <td id="user_name">${value.username}</td>
              <td id="email">${value.email}</td>
              <td id="phone">${value.phone}</td>
              <td>
              <button class="del" onclick="delItem(${value.id})">Remove</button>
              <button class="edit">Edit</button>
              </td>
          </tr>
          `;
    tableData.innerHTML = tableObject;
  });
  render();
}
fetchData();

function delItem(id) {
  fetch("https://jsonplaceholder.typicode.com/users/" + id, {
    method: "DELETE",
  }).then(() => {
    const item = document.querySelector(`#Item${id}`);
    item.remove();
  });
}

function addItem() {}

function edit(id) {}
