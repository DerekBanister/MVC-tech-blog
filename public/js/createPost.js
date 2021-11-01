async function createPostHandler(event) {
    event.preventDefault();
    //get info we need
    const title = document.querySelector("#post-title").value.trim();
    const body = document.querySelector("#post-body").value.trim();
    //if response
    if (body) {
        const response = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({
                title,
                body,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });


        if (response.ok) {
            document.location.replace("/");
        } else {
            alert(response.statusText);
        }
    }
}

document
    .querySelector("#create-post-btn")
    .addEventListener("click", createPostHandler);
