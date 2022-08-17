export var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["SuperAdmin"] = 1] = "SuperAdmin";
    Role[Role["Subscriber"] = 2] = "Subscriber";
})(Role || (Role = {}));
// interface valueType {
// }
export let userKey = [
    { firstName: 'rahul',
        middleName: '',
        lastName: 'kasana',
        phoneNumber: '987654321',
        email: 'rahul@mail.com',
        address: 'eeerdkfd',
        role: Role.Admin,
    },
];
// export default user
