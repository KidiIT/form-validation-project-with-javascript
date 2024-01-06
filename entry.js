let entryForm = document.forms.def
let usersInput = document.querySelectorAll("input")
entryForm.onsubmit=(e)=>{
    e.preventDefault()
 let  formErr= {
    usernameErr: '',
    passwordErr: '',
    aspiringErr: '',
    contactErr: '',

    }
    let username = entryForm.username.value.trim();
    let password = entryForm.password.value.trim();
    let aspiring = entryForm.aspiring.value.trim();
    let contact = entryForm.contact.value.trim();
    if(username == ''){
        formErr.usernameErr= 'please fill in the blank';
    }else if(username.length < 8 || username.includes("[A-Z]")){
        formErr.usernameErr= 'must start with a uppercase[A-Z] with more than 8 characters';

    }else if(password == ''){
        formErr.passwordErr='please fill in the blank';

    }else if(password.length < 8 || password.includes("@$#%*!")){
        formErr.passwordErr='must be more than 8 characters with any of the special characters["@$#%*!]';

    }else if(aspiring == ''){
        formErr.aspiringErr='invalid password';

    }else if(contact == ''){
        formErr.contactErr = 'this field is requried';

    }else{
       alert("Congratulation you've successfully submitted your application,Thanks for time your ");

    }
    let errElement = document.querySelectorAll('.err')
    console.log(errElement)
    for(let i=0; i < errElement.length; i++){
        let errElements = errElement[i];

        console.log(formErr);
        errElements.innerHTML = formErr[""+errElements.dataset.err+""]

    }

}
