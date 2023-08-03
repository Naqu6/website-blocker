let html = document.querySelector("html"); // ts wants this semicolon :)

(html as HTMLElement).style.display = "none"

setTimeout(() => { // incase the website unhides html
    let body = document.querySelector("body")

    if (body === null) {
        alert("Something went wrong in blocker!")
        return
    }

    body.innerHTML = "Blocked :/"
    setTimeout(() => alert(":("), 100)
}, 100)
