// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { Modal } from "./classes/create";
import { userKey, Role } from "./data";
//
const form = document.querySelector(".form");
const firstName = document.querySelector("#fName");
const middleName = document.querySelector("#mName");
const lastName = document.querySelector("#lName");
const phoneNumber = document.querySelector("#pNo");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const role = document.querySelector("#role");
// const amount = document.querySelector('#pNo') as HTMLInputElement;
const user = localStorage.getItem("user");
const head = document.querySelector("#heading");
const arr1 = Object.keys(userKey[0]);
arr1.push("perform");
for (const col of arr1) {
    const th = document.createElement("th");
    const node = document.createTextNode(col);
    th.appendChild(node);
    th.setAttribute("scope", "col");
    head.append(th);
}
const m1 = new Modal(firstName.value, middleName.value, lastName.value, phoneNumber.value, email.value, address.value, role.value);
const arr = localStorage.getItem("user");
const users = JSON.parse(arr) ? JSON.parse(arr) : [];
users.forEach((el) => { el.role = +el.role; });
const userRead = users;
m1.createOrRead(userRead, userRead.length, "read");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const arr = localStorage.getItem("user");
    const user = JSON.parse(arr) ? JSON.parse(arr) : [];
    console.log(arr, "user1");
    const newUser = {
        firstName: firstName.value,
        middleName: middleName.value,
        lastName: lastName.value,
        phoneNumber: phoneNumber.value,
        email: email.value,
        address: address.value,
        role: Role[role.value],
    };
    user.push(newUser);
    localStorage.setItem("user", JSON.stringify(user));
    m1.createOrRead([newUser], userRead.length, "add");
    firstName.value = "";
    middleName.value = "";
    lastName.value = "";
    phoneNumber.value = "";
    email.value = "";
    address.value = "";
    role.value = "";
    // m1.read()
});
for (let index = 0; index < userRead.length; index++) {
    let element = userRead[index];
    const edit = document.querySelector(`.edit${index}`);
    const remove = document.querySelector(`.delete${index}`);
    edit.addEventListener("click", () => {
        console.log("doing edit", index);
        m1.edit(element, index);
    });
    remove.addEventListener("click", () => {
        m1.delete(element, index);
    });
}
