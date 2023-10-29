const addButton = document.querySelector('.addButton');
const dialog = document.getElementById('favdialog');
const confirmBtn = document.querySelector('.confirmButton');
const cancelBtn = document.querySelector('.cancelButton');
const authorBox = document.querySelector('#book-author');
const titleBox = document.querySelector('#book-title');

const myLibrary = [];

function Book(title, author){
    this.title = title;
    this.author = author;
}

function addBookToLibrary(newBook){
    //if array is empty then place that book
    //else check if it contains book or not
    if(myLibrary.length == 0){
        addToDOM(newBook);
        myLibrary.push(newBook);
    }
    else {
        //go through each book
        //if book contains
    }
}

function addToDOM(newBook){
    const div = document.createElement('div');
    div.setAttribute('class', 'book-container');
    const autherParagraph = document.createElement('p');
    autherParagraph.setAttribute('class', 'author');
    const titleParagraph = document.createElement('p');
    titleParagraph.setAttribute('class', 'title');
    div.append(titleParagraph, autherParagraph);
    titleParagraph.innerText = 'Title: '+ newBook.title;
    autherParagraph.innerText = 'Author: '+ newBook.author;
    document.body.appendChild(div);
}

addButton.addEventListener('click', () => {
    dialog.showModal();
})

cancelBtn.addEventListener('click', (e) => {
    dialog.close();
    e.preventDefault();
})


//When the confirm book button is clicked
//new book is created and displayed in new tab
confirmBtn.addEventListener('click', (event) => {
        let newBook = new Book(titleBox.value, authorBox.value);
        if(titleBox.value != '' && authorBox.value != ''){
            addBookToLibrary(newBook)
        }
        else {
            event.preventDefault();
        }
})