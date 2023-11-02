const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const email = document.getElementById("email")
const pass = document.getElementById("pass")
const cpass = document.getElementById("cpass")

const btn = document.getElementById("btn_submit");

btn.addEventListener("click", (e) => {

    e.preventDefault();     

    fname.value = fname.value.trim()
    lname.value = lname.value.trim()
    email.value = email.value.trim()
    pass.value = pass.value.trim()
    cpass.value = cpass.value.trim()

    if (!fname.value)
        return alert("Please fill first name!");

    if (!lname.value)
        return alert("Please fill last name!")

    if (!email.value)
        return alert("Please enter email id!")

    if (!pass.value) return alert("Please enter password!");
    if (!cpass.value) return alert("Please enter confirm password!");

    if (pass.value != cpass.value)
        return alert("Password and Confirm Password do not match");

    const salt = dcodeIO.bcrypt.genSaltSync(10);
    const hashPass = dcodeIO.bcrypt.hashSync(pass.value, salt)

    const user = {
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        password: hashPass
    }

    localStorage.setItem("user", JSON.stringify(user));

    return alert("Successfully Registered!");


});