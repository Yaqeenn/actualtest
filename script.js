function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-en], [data-ar]');

    elements.forEach(element => {
        if (lang === 'en') {
            element.textContent = element.getAttribute('data-en');
        } else if (lang === 'ar') {
            element.textContent = element.getAttribute('data-ar');
        }
    });
}
