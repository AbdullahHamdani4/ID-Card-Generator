// console.log(1);
let form = document.querySelector("form");
let div=document.querySelector("div")
// function picSrc(input) {
//     let files=input.files[0]
//     return files.name
//  }
 function generate(e) {
    e.preventDefault()
    let data = {
        firstName: form.children[0].value,
        lastName: form.children[1].value,
        email: form.children[2].value,
        number: form.children[3].value,
        course: form.children[4].value,
        // pic: ""
    };
    div.children[1].innerText=`First Name: ${data.firstName}`
    div.children[2].innerText=`Last Name: ${data.lastName}`
    div.children[3].innerText=`Email: ${data.email}`
    div.children[4].innerText=`Number: ${data.number}`
    div.children[5].innerText=`Course: ${data.course}`
    // console.log(data);
}
