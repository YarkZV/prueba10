function mostrarPag(pageId) {
    const pages = document.querySelectorAll('.pag');
    for (let i=0; i < pages.length; i++) {
        const page = pages[i];
        if (page.id === pageId) {
            page.classList.add('active');
        } else {
            page.classlist.remove('active');
        }
    }
}
function cerrar(){
    window.close
}