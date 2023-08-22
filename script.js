const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

// Inside your main() function, grab the "root" element, 
// add an h1 element, give it text of "FREELANCERS", 
// and append the HTML document.
// // Continue working inside your main() function 
// to create an unordered list element.
// Loop through the users array cr`eating li elements. 
// Append those elements to your HTML document.
// Style your site using CSS.


function main () {

const root = document.getElementById("root");

const title = document.createElement("h1");
title.innerText = "FREELANCERS";
title.className = "title";
root.appendChild(title);

const list = document.createElement("ul");
root.appendChild(list);

for (const user of users) {
    const names = document.createElement("li");
    const userText = `NAME: ${user.name} || AGE: ${user.age} || OCCUPATION: ${user.occupation}`;
    names.innerText = userText
    list.appendChild(names) 
}

list.className = "list";
}

//call the main function
main();

