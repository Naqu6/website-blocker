function hideHomeFeed() {
    let mainFeed = document.querySelector(`main[aria-label="Main Feed"]`)

    if (mainFeed === null) {
        setTimeout(hideHomeFeed, 100)
    } else {
        (mainFeed as HTMLElement).style.display = "none"
    }
}

hideHomeFeed()
