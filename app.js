// console.log(1);
let form = document.querySelector("form");
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
    console.log(data);
}
