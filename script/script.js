var tl = gsap.timeline();

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            links.forEach(link => link.classList.remove('active'));
            
            this.classList.add('active');
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

tl.from(".profile_pic .profile", {
    top: -500,
    duration: 1,
    ease: "bounce.out(2, 0.3)",
})

tl.to("nav", {
    top: 0,
    duration: 0.8,
})

tl.from(".nav-list h4", {
    top: -100,
    duration: 0.8,
    stagger: 0.5,
})

