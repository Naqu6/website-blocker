setTimeout(() => {
    let body = document.querySelector("body")

    if (body === null) {
        alert("Something went wrong in blocker!")
        return
    }

    body.innerHTML = "Blocked :/"
    setTimeout(() => alert(":("), 100)
}, 250)
