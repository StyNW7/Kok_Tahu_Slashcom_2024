// Slider

const signUpButton = document.getElementById('signUp');

const signInButton = document.getElementById('signIn');

const main = document.getElementById('main');

signUpButton.addEventListener('click', () => {
    main.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    main.classList.remove("right-panel-active");
});

// Sign In Button

const loginAcc = document.getElementById('loginAcc');

loginAcc.addEventListener("click", () => {

    const email = document.getElementById("signInEmail").value;
    const password = document.getElementById("signInPassword").value;

    if (email == "stanley.n.wijaya7@gmail.com" && password == "stanleyLibrarium"){

        // Developer Section

        console.log("Welcome Dev :)")

        window.open("../index.html");
        

    }

    else if (email == "customer@gmail.com" && password == "ELibrariumCustomer"){

        // Customer Section

        console.log("Hai Customer")

    }

    else {
        console.log("Who're You?")
    }

})



// Sign Up Button

const createAcc = document.getElementById('createAcc');



// Archieved

// const fs = require("fs");

// function checkCredentials(email, password, callback) {
//     fs.readFile("database.txt", "utf8", (err, data) => {
//         if (err) {
//             return callback(err);
//         }

//         const users = data.split('\n');
//         let isEmailRegistered = false;

//         for (const user of users) {
//             const [storedEmail, storedPassword] = user.split('#');

//             if (storedEmail === email) {
//                 isEmailRegistered = true;
//                 if (storedPassword === password) {
//                     return callback(null, true);
//                 }
//             }
//         }

//         return callback(null, false, isEmailRegistered);

//     });
// }

// document.getElementById("loginBtn").addEventListener("click", () => {
//     const email = document.getElementById("emailInput").value;
//     const password = document.getElementById("passwordInput").value;

//     checkCredentials(email, password, (err, success, isEmailRegistered) => {
//         if (err) {
//             console.error(err);
//             // Handle error
//         } else if (success) {
//             console.log("Login successful");
//             // Redirect or perform further actions for successful login
//         } else if (isEmailRegistered) {
//             console.log("Incorrect password");
//             // Inform the user that the password is incorrect
//         } else {
//             console.log("Email is not registered");
//             // Inform the user that the email is not registered
//         }
//     });
// });