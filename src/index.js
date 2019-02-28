document.querySelectorAll('*[data-href]').forEach((tag) => {
    tag.addEventListener('click', (e) => {
        console.log('click');
        document.querySelector(tag.dataset.href).scrollIntoView({
            behavior: 'smooth',
        });
    });
});
