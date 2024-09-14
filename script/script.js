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
