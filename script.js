window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-bottom');
        }
    })
})
observer.observe(document.querySelector('.hero-parent'));
observer.observe(document.querySelector('.about-parent'));
observer.observe(document.querySelector('.skills-parent'));
observer.observe(document.querySelector('.portfolio-parent'));
observer.observe(document.querySelector('.additional-parent'));
observer.observe(document.querySelector('.contact-parent'));