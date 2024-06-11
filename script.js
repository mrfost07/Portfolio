document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('header nav ul li a');
    const sections = document.querySelectorAll('section');
    const titles = ['Software Engineer', 'Data Analyst', 'Cyber Security Expert'];
    let titleIndex = 0;
    const animatedTitleElement = document.querySelector('.animated-title');

    function onScroll() {
        const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
        sections.forEach(section => {
            if (section.offsetTop <= scrollPos + window.innerHeight / 2 &&
                section.offsetTop + section.offsetHeight > scrollPos + window.innerHeight / 2) {
                section.classList.add('visible');
                links.forEach(link => {
                    link.classList.remove('active');
                    if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    function cycleTitles() {
        animatedTitleElement.textContent = titles[titleIndex];
        titleIndex = (titleIndex + 1) % titles.length;
        animatedTitleElement.classList.remove('fade-in');
        setTimeout(() => {
            animatedTitleElement.classList.add('fade-in');
        }, 100);
    }

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    window.addEventListener('scroll', onScroll);
    setInterval(cycleTitles, 3000);
    onScroll();
});
