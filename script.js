function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-en], [data-ar]');

    elements.forEach(element => {
        if (lang === 'en') {
            element.innerHTML = element.getAttribute('data-en');
        } else {
            element.innerHTML = element.getAttribute('data-ar');
        }
    });
}
