
const email = document.getElementById("email")
const password = document.getElementById("password")
const btnSubmit = document.getElementById("btn_login")



btnSubmit.addEventListener("click",(e)=>{
    // console.log(email.value, password.value);

    email.value = email.value.trim()
    password.value = password.value.trim()

    if(!email.value)
        return alert("Please fill email field!");
    
    if(!isEmail(email.value))
    return alert("Invalid email please try again!");

    if(!password.value)
    return alert("Please fill password field!")


    if(email.value == "k@gmail.com" && password.value == "kartikay")
    {
        alert("Log in successfull!")
    }
    else
    {
        alert("Login Id/Password is Incorrect!");
    }
});


function isEmail(email) {
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
 }
