var html = document.querySelector("html"); // ts wants this semicolon :)
html.style.display = "none";
setTimeout(function () {
    var body = document.querySelector("body");
    if (body === null) {
        alert("Something went wrong in blocker!");
        return;
    }
    body.innerHTML = "Blocked :/";
    setTimeout(function () { return alert(":("); }, 100);
}, 100);
