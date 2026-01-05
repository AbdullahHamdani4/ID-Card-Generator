// console.log(1);
let form = document.querySelector("form");
let formContainer=document.querySelector(".form-container")
let card=document.querySelector(".id-card")
let nameField=document.querySelector(".name")
let role=document.querySelector(".role")
let id=document.querySelector(".id")
let email=document.querySelector(".email")
let institute=document.querySelector(".institute")
let img=document.querySelector(".img")

function generateCard(e) {
  e.preventDefault()
  nameField.innerText=`${form.children[0].children[0].value} ${form.children[1].children[0].value} `;
  id.innerText=form.children[2].children[0].value;
  role.innerText=form.children[3].children[0].value;
  email.innerText=form.children[4].children[0].value;
  institute.innerText=form.children[5].children[0].value;
  img.src=URL.createObjectURL(form.children[6].children[0].files[0])
 card.classList.toggle("hide")
formContainer.classList.toggle("hide")
 }























// let div=document.querySelector("div")
//   function picSrc(input) {
//     let files=input.files[0]
//     console.log(files);
//     div.children[1].src=URL.createObjectURL(files)
//     console.log(div.children[1].src);
//     return files.name
//  }
//  function generate(e) {
    
//     e.preventDefault()
  
//     let data = {
//         firstName: form.children[0].value,
//         lastName: form.children[1].value,
//         email: form.children[2].value,
//         number: form.children[3].value,
//         course: form.children[4].value,
//         // pic: ""
//     };
//     div.children[1].innerText=`First Name: ${data.firstName}`
//     div.children[2].innerText=`Last Name: ${data.lastName}`
//     div.children[3].innerText=`Email: ${data.email}`
//     div.children[4].innerText=`Number: ${data.number}`
//     div.children[5].innerText=`Course: ${data.course}`
//     // console.log(data);
// }
