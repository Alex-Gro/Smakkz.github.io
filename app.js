const navSlide = () => {
    const burger = document.querySelector(".menuBurger");
    const nav = document.querySelector(".navLinks");
    const navLinks = document.querySelectorAll("nav .navLinks li");
    
    
    
    for(i=0; i<navLinks.length; i++) {
        navLinks[i].addEventListener("click", ()=>{
            if(window.matchMedia("(max-width: 768px)").matches) { // NavbarLinks lösen Animation etc nur aus, wenn im BurgerMenu (768px)
                nav.classList.toggle("nav-active");
                document.body.style.overflowY = document.body.style.overflowY === "hidden" ? "" : "hidden";
                document.body.style.touchAction = document.body.style.touchAction === "none" ? "" : "none";
                nav.style.opacity = 1;
                // Animate Links
                navLinks.forEach((link, index)=>{
                    if(link.style.animation) {
                        link.style.animation = ``;
                    } else {
                        link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.3}s`;
                    }
                });
                // Burger Animation
                burger.classList.toggle("toggle");
            }
        });
    } 

    // Toggle Nav
    burger.addEventListener("click", ()=>{
        nav.classList.toggle("nav-active");
        document.body.style.overflowY = document.body.style.overflowY === "hidden" ? "" : "hidden";
        document.body.style.touchAction = document.body.style.touchAction === "none" ? "" : "none";
        nav.style.opacity = 1;
        // Animate Links
        navLinks.forEach((link, index)=>{
            if(link.style.animation) {
                link.style.animation = ``;
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        // Burger Animation
        burger.classList.toggle("toggle");
    });
}

const cardClick = () => {
    const singleProjects = document.querySelectorAll(".singleProjects");
    const hoverCards = document.querySelectorAll(".hoverCards");
    
    hoverCards.forEach(element => {
        element.addEventListener("click", (e) => {
            e.stopPropagation();
        });
        element.querySelector(".fa-times").addEventListener("click", () => {
            element.classList.remove("toggleHoverCards");
        });
    });

    singleProjects.forEach(element => {
        element.addEventListener("click", (e) => {
            e.stopPropagation();
            element.querySelector(".hoverCards").classList.add("toggleHoverCards");
        });
    });
    window.addEventListener("click", () => {
        hoverCards.forEach(element => {
            element.classList.remove("toggleHoverCards");
        });
    });
}

const app = () => {
    navSlide();
    cardClick();
}

app();