setTimeout(function () {
    var body = document.querySelector("body");
    if (body === null) {
        alert("Something went wrong in blocker!");
        return;
    }
    body.innerHTML = "Blocked :/";
    setTimeout(function () { return alert(":("); }, 100);
}, 250);
