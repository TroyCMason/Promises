// fetch ('https://jsonplaceholder.typicode.com/users/1')
const emalRef = document.querySelector(".email");

//1. Then
// fetch("https://jsonplaceholder.typicode.com/users/1")
// .then((response) => {
//   return response.json();
// })
// .then(data =>{
//     console.log(data);
//     emailRef.innerHTML = data.email
// });

//2.Async/Await (Best Practice)
async function main() {
const response = await fetch ('https://jsonplaceholder.typicode.com/users/1')
const data = await response.json()
console.log(data)
emailRef.innerHTML = data.email
}

main();

// Only wite response.json if we're talking to a backend server