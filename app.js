function validateForm() {
    const firstName = document.getElementById("firstname").value.trim();
    const lastName = document.getElementById("lastname").value.trim();
    const phone = document.getElementById("Phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();
    const phonePattern = /^[6-9]\d{9}$/;


                                            // method - 1

    if (firstName == "" || lastName == "" || phone == "" || password == "" || confirmPassword == "") {
        alert("Fields cannot be empty");
        return false;
    }
    else if(isNaN(phone)){
        alert("Only numbers are allowed ! Please enter numbers only.");
        return false;
    }
    else if(!phonePattern.test(phone)){
        alert("Phone number should start with the folowing digits : 6, 7, 8, 9");
        return false;
    }
    else if(password != confirmPassword){
        alert("Please enter same password !");
        return false;
    }
    else {
        return true;
    }


                                                // method - 2

    // if (!firstName || !lastName || !phone || !password || !confirmPassword) {
    //     alert("Fields cannot be empty");
    //     return false;
    // }
    // if (!phonePattern.test(phone)) {
    //     alert("Phone number should be a 10-digit number starting with 6, 7, 8, or 9");
    //     return false;
    // }
    // if (password !== confirmPassword) {
    //     alert("Passwords do not match!");
    //     return false;
    // }
    // return true;
}