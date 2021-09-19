addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            // alert('existe');

            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }
})