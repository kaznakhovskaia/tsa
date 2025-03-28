document.querySelectorAll('#top_list a[href^="#"], header .outline_button, #welcome .filled_button').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const headerHeight = document.querySelector('header').offsetHeight;
        
        window.scrollTo({
            top: targetElement.offsetTop - headerHeight,
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    // Add 'scrolled' class when page is scrolled (after 50px)
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});