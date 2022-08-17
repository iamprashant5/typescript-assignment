/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/app.js":
/*!*********************!*\
  !*** ./dist/app.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/create */ \"./dist/classes/create.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./dist/data.js\");\n// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'\n\n\n//\nconst form = document.querySelector(\".form\");\nconst firstName = document.querySelector(\"#fName\");\nconst middleName = document.querySelector(\"#mName\");\nconst lastName = document.querySelector(\"#lName\");\nconst phoneNumber = document.querySelector(\"#pNo\");\nconst email = document.querySelector(\"#email\");\nconst address = document.querySelector(\"#address\");\nconst role = document.querySelector(\"#role\");\n// const amount = document.querySelector('#pNo') as HTMLInputElement;\nconst user = localStorage.getItem(\"user\");\nconst head = document.querySelector(\"#heading\");\nconst arr1 = Object.keys(_data__WEBPACK_IMPORTED_MODULE_1__.userKey[0]);\narr1.push(\"perform\");\nfor (const col of arr1) {\n    const th = document.createElement(\"th\");\n    const node = document.createTextNode(col);\n    th.appendChild(node);\n    th.setAttribute(\"scope\", \"col\");\n    head.append(th);\n}\nconst m1 = new _classes_create__WEBPACK_IMPORTED_MODULE_0__.Modal(firstName.value, middleName.value, lastName.value, phoneNumber.value, email.value, address.value, role.value);\nconst arr = localStorage.getItem(\"user\");\nconst users = JSON.parse(arr) ? JSON.parse(arr) : [];\nusers.forEach((el) => { el.role = +el.role; });\nconst userRead = users;\nm1.createOrRead(userRead, userRead.length, \"read\");\nform.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    const arr = localStorage.getItem(\"user\");\n    const user = JSON.parse(arr) ? JSON.parse(arr) : [];\n    console.log(arr, \"user1\");\n    const newUser = {\n        firstName: firstName.value,\n        middleName: middleName.value,\n        lastName: lastName.value,\n        phoneNumber: phoneNumber.value,\n        email: email.value,\n        address: address.value,\n        role: _data__WEBPACK_IMPORTED_MODULE_1__.Role[role.value],\n    };\n    user.push(newUser);\n    localStorage.setItem(\"user\", JSON.stringify(user));\n    m1.createOrRead([newUser], userRead.length, \"add\");\n    firstName.value = \"\";\n    middleName.value = \"\";\n    lastName.value = \"\";\n    phoneNumber.value = \"\";\n    email.value = \"\";\n    address.value = \"\";\n    role.value = \"\";\n    // m1.read()\n});\nfor (let index = 0; index < userRead.length; index++) {\n    let element = userRead[index];\n    const edit = document.querySelector(`.edit${index}`);\n    const remove = document.querySelector(`.delete${index}`);\n    edit.addEventListener(\"click\", () => {\n        console.log(\"doing edit\", index);\n        m1.edit(element, index);\n    });\n    remove.addEventListener(\"click\", () => {\n        m1.delete(element, index);\n    });\n}\n\n\n//# sourceURL=webpack://assisgment-1-/./dist/app.js?");

/***/ }),

/***/ "./dist/classes/create.js":
/*!********************************!*\
  !*** ./dist/classes/create.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": () => (/* binding */ Modal)\n/* harmony export */ });\n// enum Role {Admin,SuperAdmin,Subscriber}\nclass Modal {\n    // user:data[]\n    constructor(fName, mName, lName, pNumber, email, address, role\n    // user:data[]\n    ) {\n        this.firstName = fName;\n        this.middleName = mName;\n        this.lastName = lName;\n        this.phoneNumber = pNumber;\n        this.email = email;\n        this.address = address;\n        this.role = role;\n        // this.user=user\n    }\n    //create new user\n    createOrRead(user, length, type) {\n        if (!user.length)\n            return;\n        console.log('hello world');\n        const arr = localStorage.getItem(\"user\");\n        const u = JSON.parse(arr) ? JSON.parse(arr) : [];\n        if (type == \"read\")\n            user = u;\n        for (let index = 0; index < user.length; index++) {\n            let element = user[index];\n            const tabBody = document.querySelector(\"#table-body\");\n            const tr = document.createElement(\"tr\");\n            const th = document.createElement(\"th\");\n            const node = document.createTextNode(type == \"add\" ? u.length.toString() : (index + 1).toString());\n            th.appendChild(node);\n            tr.append(th);\n            for (let key in element) {\n                const td = document.createElement(\"td\");\n                const key2 = key;\n                td.setAttribute(\"contenteditable\", \"false\");\n                const nodeTd = document.createTextNode(element[key2].toString());\n                td.appendChild(nodeTd);\n                tr.append(td);\n            }\n            const td = document.createElement(\"td\");\n            td.innerHTML = `\n             <button><i class=\"fa-solid fa-pen-to-square edit${index}\" ></i></button>\n             <button><i class=\"fa-solid fa-trash-can delete${index}\"></i></button>\n             <button class='save${index} d-none'>Save</button>\n             <button class='cancel${index} d-none'>Cancel</button>\n             `;\n            tr.append(td);\n            tabBody.append(tr);\n        }\n    }\n    //edit user\n    edit(element, index) {\n        var _a, _b;\n        // for(const [element,index] of user){\n        const edit = document.querySelector(`.edit${index}`);\n        const remove = document.querySelector(`.delete${index}`);\n        const save = document.querySelector(`.save${index}`);\n        const cancel = document.querySelector(`.cancel${index}`);\n        (_a = edit.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add(\"d-none\");\n        (_b = remove.parentElement) === null || _b === void 0 ? void 0 : _b.classList.add(\"d-none\");\n        save.classList.remove(\"d-none\");\n        cancel.classList.remove(\"d-none\");\n        const table = document.querySelector(\".table\");\n        const td1 = table.getElementsByTagName(\"td\");\n        const arrs = [...td1];\n        const rowLength = Object.keys(element).length;\n        console.log(rowLength, \"length\");\n        const editableCells = arrs.slice(index == 0 ? 0 : index * (rowLength + 1), index == 0 ? rowLength : index * (rowLength + 1) + rowLength);\n        // console.log(editableCells,\"editable\")\n        let previousValue = [];\n        editableCells.forEach((cell) => previousValue.push(cell.innerHTML));\n        editableCells.forEach((cell, ind) => {\n            cell.contentEditable = \"true\";\n        });\n        // handle save button\n        let newValues = [];\n        save === null || save === void 0 ? void 0 : save.addEventListener(\"click\", () => {\n            var _a, _b;\n            editableCells.forEach((cell, ind) => {\n                cell.contentEditable = \"false\";\n                newValues.push(cell.innerHTML ? cell.innerHTML : '');\n            });\n            let val = Object.keys(element);\n            console.log(newValues);\n            const newObj = {\n                firstName: '',\n                middleName: '',\n                lastName: '',\n                phoneNumber: '',\n                email: '',\n                address: '',\n                role: ''\n            };\n            for (let i = 0; i < val.length; i++) {\n                //  console.log(newValues[i],newObj[val[i]as ObjectKey],\"bb\")\n                newObj[val[i]] = newValues[i];\n            }\n            // const object  =  val.reduce((acc,el,ind)=>{\n            //     return {...acc ,[el]:ind}\n            //   })\n            const getUser = localStorage.getItem('user');\n            const getUserParse = JSON.parse(getUser) ? JSON.parse(getUser) : [];\n            const newUser = [...getUserParse.slice(0, index), newObj, ...getUserParse.slice(index + 1)];\n            localStorage.setItem('user', JSON.stringify(newUser));\n            (_a = edit.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove(\"d-none\");\n            (_b = remove.parentElement) === null || _b === void 0 ? void 0 : _b.classList.remove(\"d-none\");\n            save.classList.add(\"d-none\");\n            cancel.classList.add(\"d-none\");\n        });\n        // handle cancel button\n        cancel === null || cancel === void 0 ? void 0 : cancel.addEventListener(\"click\", () => {\n            var _a, _b;\n            editableCells.forEach((cell, index) => {\n                cell.contentEditable = \"false\";\n                cell.innerHTML = previousValue[index];\n            });\n            (_a = edit.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove(\"d-none\");\n            (_b = remove.parentElement) === null || _b === void 0 ? void 0 : _b.classList.remove(\"d-none\");\n            save.classList.add(\"d-none\");\n            cancel.classList.add(\"d-none\");\n        });\n    }\n    //delete user\n    delete(element, index) {\n        const table = document.querySelector(\".table\");\n        const tr1 = table.getElementsByTagName(\"tr\");\n        const user = localStorage.getItem(\"user\");\n        const arr = JSON.parse(user) ? JSON.parse(user) : [];\n        const ind = arr.findIndex((el) => JSON.stringify(el) == JSON.stringify(element));\n        table.deleteRow(ind + 1);\n        for (let i = ind + 1; i < tr1.length; i++) {\n            const th = tr1[i].firstChild;\n            th.innerHTML = (+th.innerHTML - 1).toString();\n        }\n        const newArr = arr.filter((el, i) => i !== ind);\n        localStorage.setItem(\"user\", JSON.stringify(newArr));\n    }\n}\n\n\n//# sourceURL=webpack://assisgment-1-/./dist/classes/create.js?");

/***/ }),

/***/ "./dist/data.js":
/*!**********************!*\
  !*** ./dist/data.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Role\": () => (/* binding */ Role),\n/* harmony export */   \"userKey\": () => (/* binding */ userKey)\n/* harmony export */ });\nvar Role;\n(function (Role) {\n    Role[Role[\"Admin\"] = 0] = \"Admin\";\n    Role[Role[\"SuperAdmin\"] = 1] = \"SuperAdmin\";\n    Role[Role[\"Subscriber\"] = 2] = \"Subscriber\";\n})(Role || (Role = {}));\n// interface valueType {\n// }\nlet userKey = [\n    { firstName: 'rahul',\n        middleName: '',\n        lastName: 'kasana',\n        phoneNumber: '987654321',\n        email: 'rahul@mail.com',\n        address: 'eeerdkfd',\n        role: Role.Admin,\n    },\n];\n// export default user\n\n\n//# sourceURL=webpack://assisgment-1-/./dist/data.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./dist/app.js");
/******/ 	
/******/ })()
;