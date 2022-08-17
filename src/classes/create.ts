import { data } from "../data";
// enum Role {Admin,SuperAdmin,Subscriber}
export class Modal {
  firstName: string;
  middleName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  address: string;
  role: string;
  // user:data[]
  constructor(
    fName: string,
    mName: string,
    lName: string,
    pNumber: string,
    email: string,
    address: string,
    role: string
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

  createOrRead(user: data[], length: number, type: string) {
    if (!user.length) return;
    console.log('hello world')
    const arr = localStorage.getItem("user")!;
    const u = JSON.parse(arr) ? JSON.parse(arr) : [];
    if (type == "read") user = u;
    for (let index = 0; index < user.length; index++) {
      let element = user[index];
      const tabBody = document.querySelector("#table-body")!;
      const tr = document.createElement("tr");
      const th = document.createElement("th");
      const node = document.createTextNode(
        type == "add" ? u.length.toString() : (index + 1).toString()
      );
      th.appendChild(node);
      tr.append(th);

      type ObjectKey = keyof typeof element;

      for (let key in element) {
        const td = document.createElement("td");
        const key2 = key as ObjectKey;
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

  edit(element: data, index: number) {
    // for(const [element,index] of user){
    const edit = document.querySelector(`.edit${index}`)!;
    const remove = document.querySelector(`.delete${index}`)!;
    const save = document.querySelector(`.save${index}`)!;
    const cancel = document.querySelector(`.cancel${index}`)!;

    edit.parentElement?.classList.add("d-none");
    remove.parentElement?.classList.add("d-none");
    save.classList.remove("d-none");
    cancel.classList.remove("d-none");

    const table = document.querySelector(".table")!;
    const td1 = table.getElementsByTagName("td")!;

    const arrs = [...td1];
    const rowLength = Object.keys(element).length;
    console.log(rowLength, "length");
    const editableCells = arrs.slice(
      index == 0 ? 0 : index * (rowLength + 1),
      index == 0 ? rowLength : index * (rowLength + 1) + rowLength
    );
    // console.log(editableCells,"editable")
    let previousValue: string[] = [];
    editableCells.forEach((cell) => previousValue.push(cell.innerHTML));

    editableCells.forEach((cell,ind) => {
      cell.contentEditable = "true";
      
    });
// handle save button

let newValues :(string)[] =[]
    save?.addEventListener("click", () => {
      editableCells.forEach((cell) => {
        cell.contentEditable = "false";
         newValues.push(cell.innerHTML)
      });
      let val = Object.keys(element)
      type ObjectKey = keyof typeof element;

      console.log(newValues)
     for(let i =0;i<val.length;i++){
       element[val[i] as ObjectKey] = newValues[i]
     }
  
     const getUser = localStorage.getItem('user')!
     const getUserParse = JSON.parse(getUser)?JSON.parse(getUser):[]
     const newUser = [...getUserParse.slice(0,index),element,...getUserParse.slice(index+1)]
     
      localStorage.setItem('user',JSON.stringify(newUser))
      edit.parentElement?.classList.remove("d-none");
      remove.parentElement?.classList.remove("d-none");
      save.classList.add("d-none");
      cancel.classList.add("d-none");
    });
// handle cancel button
    cancel?.addEventListener("click", () => {
      editableCells.forEach((cell, index) => {
        cell.contentEditable = "false";
        cell.innerHTML = previousValue[index];
      });

      edit.parentElement?.classList.remove("d-none");
      remove.parentElement?.classList.remove("d-none");
      save.classList.add("d-none");
      cancel.classList.add("d-none");
    });
  }

  //delete user

  delete(element: data, index: number) {
    const table = document.querySelector(".table")! as HTMLTableElement;
    const tr1 = table.getElementsByTagName("tr")!;

    const user = localStorage.getItem("user")!;
    const arr = JSON.parse(user) ? JSON.parse(user) : [];
    const ind = arr.findIndex((el: data) => JSON.stringify(el) == JSON.stringify(element));

    table.deleteRow(ind + 1);

    for(let i=ind+1;i<tr1.length;i++){
          const th = tr1[i].firstChild as HTMLTableCellElement
          th.innerHTML = (+th.innerHTML-1).toString()
    }

    const newArr = arr.filter((el: data, i: number) => i !== ind);
    localStorage.setItem("user", JSON.stringify(newArr));
  }
}
