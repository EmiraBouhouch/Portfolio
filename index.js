
function Empty() {
  
    let Name = document.getElementById('name').value

    let email = document.getElementById('email').value

    let comments = document.getElementById('comments').value

    if (Name.length === 0 || email.length === 0 || comments.length === 0) {
        alert("please fill in all the empty fields")

    }

    if (Name.length === 0) {
        document.getElementById('name').style.border = "2px solid red"
    }

    else {
        document.getElementById('name').style.border = "2px solid green"
    }


    if (comments.length === 0) {
        document.getElementById('comments').style.border = "2px solid red"
    }

    else {
        document.getElementById('comments').style.border = "2px solid green"
    }
    

    if (email.length === 0) {
        document.getElementById('email').style.border = "2px solid red"
    }
    else {
        document.getElementById('email').style.border = "2px solid green"
    }


}

document.getElementById("send").addEventListener("click", Empty);


function emailValidation() {

    let email = document.getElementById('email').value
    if (email.length > 0) {
        let regexEmail = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
        let email = document.getElementById('email').value
        if (!regexEmail.test(email)) {
            alert("this is not a valid e-mail adress")
            document.getElementById('email').style.border = "2px solid red"

        }
        else {
            document.getElementById('email').style.border = "2px solid green"
        }


    }
}
document.getElementById("send").addEventListener("click", emailValidation);
