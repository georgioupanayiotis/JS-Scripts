const newUser = {
    id: 4,
    name: "P G",
    username: "pg2018",
    email: "pg@test.com",
    phone: "",
    website: "www.panayiotisgeorgiou.net",
    password: "¯\_(ツ)_/¯"
};
const newData = [...users, newUser]; // add element at last
or 
const newData = [newUser, ...users]; // add element at first
or 
const newData = users.concat(newUser) // the old way
