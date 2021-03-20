// typing animation script
var typed = new Typed(".typing",{
    strings: ["YouTuber", "Designer", "Developer", "Blogger", "Frelancer"],
    typeSpeed: 110,
    backSpeed: 65,
    loop: true
});

// typing animation script-2
var typed = new Typed(".typing-2",{
    strings: ["YouTuber", "Designer", "Developer", "Blogger", "Frelancer"],
    typeSpeed: 110,
    backSpeed: 65,
    loop: true
});

// navigation menu script

(() =>{

    const humburgerBtn = document.querySelector(".humburger-btn"),
    navBarMenu = document.querySelector(".navbar-menu"),
    closeNavBtn = navBarMenu.querySelector(".close-navbar-menu");

    humburgerBtn.addEventListener("click", showNavMenu);
    closeNavBtn.addEventListener("click", hideNavMenu);

    function showNavMenu(){
        navBarMenu.classList.add("visible");
        bodyScrollingToggle();
    }
    function hideNavMenu(){
        navBarMenu.classList.remove("visible");
        fadeOutEffect();
        bodyScrollingToggle();
    }
    function fadeOutEffect(){
        document.querySelector(".fade-out-effect").classList.add("active");
        setTimeout(() =>{
            document.querySelector(".fade-out-effect").classList.remove("active");
        },300)
    }
    // attach an event handler to document
    document.addEventListener("click", (event) =>{
        if(event.target.classList.contains('nav-link')){
            /* make sure event.target.hash has a value before overridding default behavior */
            if(event.target.hash !==""){
                // prevent defult anchor click behavior
                event.preventDefault();
                const hash = event.target.hash;
                // deactivate existing active 'section'
                document.querySelector(".section.active").classList.add("hide");
                document.querySelector(".section.active").classList.remove("active");
                // activate new 'section'
                document.querySelector(hash).classList.add("active");
                document.querySelector(hash).classList.remove("hide");
                /* deactivate existing active navigation menu 'nav-link' */
                navBarMenu.querySelector(".active").classList.add("outer-shadow","hover-shadow");
                navBarMenu.querySelector(".active").classList.remove("active","inner-shadow");
                /* if clicked 'nav-link is contained within the navigation menu' */
                if(navBarMenu.classList.contains("visible")){
                    // activate new navigation menu 'nav-link'
                    event.target.classList.add("active","inner-shadow");
                    event.target.classList.remove("outer-shadow","hover-shadow");
                    // hide navigation menu
                    hideNavMenu();
                }else{
                    let navLinks = navBarMenu.querySelectorAll(".nav-link");
                    navLinks.forEach((item) =>{
                        if(hash === item.hash){
                            // activate new navigation menu 'nav-link'
                            item.classList.add("active","inner-shadow");
                            item.classList.remove("outer-shadow","hover-shadow");
                        }
                    })
                    fadeOutEffect();
                }
                // add hash (#) to url
                window.location.hash = hash;
            }
        }
    })

})();

function bodyScrollingToggle(){
    document.body.classList.toggle("hidden-scrolling");
}


(() =>{

    const sections = document.querySelectorAll(".section");
    sections.forEach((section) =>{
        if(!section.classList.contains("active")){
            section.classList.add("hide");
        }

    })

})();
