function hideHomeFeed() {
    var mainFeed = document.querySelector("main[aria-label=\"Main Feed\"]");
    if (mainFeed === null) {
        setTimeout(hideHomeFeed, 100);
    }
    else {
        mainFeed.style.display = "none";
    }
}
hideHomeFeed();
