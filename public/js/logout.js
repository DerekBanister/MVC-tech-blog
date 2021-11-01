async function logout() {
    const response = await fetch("/api/users/logout", {
        method: "POST",
        headers: { "content-type": "application/json" },
    });

    if (response.ok) {
        document.location.replace("/");
    } else {
        alert(response.statusText);
    }
}
//not sure if this is even working correctly
document.querySelector("#logout-btn").addEventListener("click", logout);