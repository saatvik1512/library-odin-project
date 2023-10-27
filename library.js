const addButton = document.querySelector('.addButton');
const dialog = document.getElementById('favdialog');
const confirmBtn = document.querySelector('.confirmButton');
const cancelBtn = document.querySelector('.cancelButton');
const inputBox = document.querySelector('input');

addButton.addEventListener('click', () => {
    dialog.showModal();
})

cancelBtn.addEventListener('click', (e) => {
    dialog.close();
    e.preventDefault();
})