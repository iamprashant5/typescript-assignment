// enum Role {Admin,SuperAdmin,Subscriber}
export class Modal {
    // user:data[]
    constructor(fName, mName, lName, pNumber, email, address, role
    // user:data[]
    ) {
        this.firstName = fName;
        this.middleName = mName;
        this.lastName = lName;
        this.phoneNumber = pNumber;
        this.email = email;
        this.address = address;
        this.role = role;
        // this.user=user
    }
    //create new user
    createOrRead(user, length, type) {
        if (!user.length)
            return;
        console.log('hello world');
        const arr = localStorage.getItem("user");
        const u = JSON.parse(arr) ? JSON.parse(arr) : [];
        if (type == "read")
            user = u;
        for (let index = 0; index < user.length; index++) {
            let element = user[index];
            const tabBody = document.querySelector("#table-body");
            const tr = document.createElement("tr");
            const th = document.createElement("th");
            const node = document.createTextNode(type == "add" ? u.length.toString() : (index + 1).toString());
            th.appendChild(node);
            tr.append(th);
            for (let key in element) {
                const td = document.createElement("td");
                const key2 = key;
                td.setAttribute("contenteditable", "false");
                const nodeTd = document.createTextNode(element[key2].toString());
                td.appendChild(nodeTd);
                tr.append(td);
            }
            const td = document.createElement("td");
            td.innerHTML = `
             <button><i class="fa-solid fa-pen-to-square edit${index}" ></i></button>
             <button><i class="fa-solid fa-trash-can delete${index}"></i></button>
             <button class='save${index} d-none'>Save</button>
             <button class='cancel${index} d-none'>Cancel</button>
             `;
            tr.append(td);
            tabBody.append(tr);
        }
    }
    //edit user
    edit(element, index) {
        var _a, _b;
        // for(const [element,index] of user){
        const edit = document.querySelector(`.edit${index}`);
        const remove = document.querySelector(`.delete${index}`);
        const save = document.querySelector(`.save${index}`);
        const cancel = document.querySelector(`.cancel${index}`);
        (_a = edit.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add("d-none");
        (_b = remove.parentElement) === null || _b === void 0 ? void 0 : _b.classList.add("d-none");
        save.classList.remove("d-none");
        cancel.classList.remove("d-none");
        const table = document.querySelector(".table");
        const td1 = table.getElementsByTagName("td");
        const arrs = [...td1];
        const rowLength = Object.keys(element).length;
        console.log(rowLength, "length");
        const editableCells = arrs.slice(index == 0 ? 0 : index * (rowLength + 1), index == 0 ? rowLength : index * (rowLength + 1) + rowLength);
        // console.log(editableCells,"editable")
        let previousValue = [];
        editableCells.forEach((cell) => previousValue.push(cell.innerHTML));
        editableCells.forEach((cell, ind) => {
            cell.contentEditable = "true";
        });
        // handle save button
        let newValues = [];
        save === null || save === void 0 ? void 0 : save.addEventListener("click", () => {
            var _a, _b;
            editableCells.forEach((cell) => {
                cell.contentEditable = "false";
                newValues.push(cell.innerHTML);
            });
            let val = Object.keys(element);
            console.log(newValues);
            for (let i = 0; i < val.length; i++) {
                element[val[i]] = newValues[i];
            }
            const getUser = localStorage.getItem('user');
            const getUserParse = JSON.parse(getUser) ? JSON.parse(getUser) : [];
            const newUser = [...getUserParse.slice(0, index), element, ...getUserParse.slice(index + 1)];
            localStorage.setItem('user', JSON.stringify(newUser));
            (_a = edit.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove("d-none");
            (_b = remove.parentElement) === null || _b === void 0 ? void 0 : _b.classList.remove("d-none");
            save.classList.add("d-none");
            cancel.classList.add("d-none");
        });
        // handle cancel button
        cancel === null || cancel === void 0 ? void 0 : cancel.addEventListener("click", () => {
            var _a, _b;
            editableCells.forEach((cell, index) => {
                cell.contentEditable = "false";
                cell.innerHTML = previousValue[index];
            });
            (_a = edit.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove("d-none");
            (_b = remove.parentElement) === null || _b === void 0 ? void 0 : _b.classList.remove("d-none");
            save.classList.add("d-none");
            cancel.classList.add("d-none");
        });
    }
    //delete user
    delete(element, index) {
        const table = document.querySelector(".table");
        const tr1 = table.getElementsByTagName("tr");
        const user = localStorage.getItem("user");
        const arr = JSON.parse(user) ? JSON.parse(user) : [];
        const ind = arr.findIndex((el) => JSON.stringify(el) == JSON.stringify(element));
        table.deleteRow(ind + 1);
        for (let i = ind + 1; i < tr1.length; i++) {
            const th = tr1[i].firstChild;
            th.innerHTML = (+th.innerHTML - 1).toString();
        }
        const newArr = arr.filter((el, i) => i !== ind);
        localStorage.setItem("user", JSON.stringify(newArr));
    }
}
