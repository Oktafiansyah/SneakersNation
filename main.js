const body = document.body;
let lastcroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll  = window.pageYOffset

    if (currentScroll <= 0) {
        navbar.classList.remove("scroll-up")
    }

    if (currentScroll > lastcroll && !body.classList.contains("scroll-down")) {
        navbar.classList.remove("scroll-up")
        navbar.classList.add("scroll-down")
    }

    if (currentScroll > lastcroll && !body.classList.contains("scroll-down")) {
        navbar.classList.remove("scroll-down")
        navbar.classList.add("scroll-up")
    }


    lastcroll = currentScroll;
})