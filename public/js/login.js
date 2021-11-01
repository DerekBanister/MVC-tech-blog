async function loginForm(event) {
    event.preventDefault();
    //inputs i need for login
    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();

    //make sure these have content
    if (email && password) {
        //fetch from my route
        const response = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify({
                email,
                password,
            }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            console.log(response, " Logged in successfully!");
            document.location.replace("/");
        } else {
            alert(response.statusText);
        }
    }
}

async function signupForm(event) {
    event.preventDefault();
    //inputs I need from signup
    const username = document.querySelector("#username-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();

    if (username && email && password) {
        const response = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({
                username,
                email,
                password,
            }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            console.log(response);
        } else {
            alert(response.statusText);
        }
        //
        const responseTwo = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify({
                email,
                password,
            }),
            headers: { "Content-Type": "application/json" },
        });

        if (responseTwo.ok) {
            console.log(response, " Logged in successfully!");
            document.location.replace("/");
        } else {
            //alert sending response from login attempt
            alert(response.statusText);
        }
    }
}
//login working! user is being created. cant test if logout then log back in yet, but userdata is saved in /api/users

document
    .querySelector("#login-btn")
    .addEventListener("click", loginForm);

document
    .querySelector("#signup-btn")
    .addEventListener("click", signupForm);