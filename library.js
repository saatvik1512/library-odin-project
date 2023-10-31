const addButton = document.querySelector('.addButton');
const dialog = document.getElementById('favdialog');
const confirmBtn = document.querySelector('.confirmButton');
const cancelBtn = document.querySelector('.cancelButton');
const authorBox = document.querySelector('#book-author');
const titleBox = document.querySelector('#book-title');
const pagesBox = document.querySelector('#book-pages');
const noBox = document.querySelectorAll('input[name="Reading-Status"]');

const myLibrary = [];

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.ReadStatus = function () {
    for (const radioButton of noBox){
        if (radioButton.checked){
            this.readStatus = radioButton.value;
            return this.readStatus;
        }
    }
}

function addBookToLibrary(newBook){
    //if array is empty then place that book
    //else check if it contains book or not
    if(myLibrary.length == 0){
        addToDOM(newBook);
        myLibrary.push(newBook);
    }
    else {
        for (const index in myLibrary){
            if (myLibrary[index].title.toLowerCase() !== newBook.title.toLowerCase() && myLibrary.indexOf(myLibrary[index]) == myLibrary.length - 1){
                addToDOM(newBook);
                myLibrary.push(newBook);
            }
            else if (myLibrary[index].title.toLowerCase() == newBook.title.toLowerCase()){
                console.log("already exist");
                break;
            }
        }
    }
}
function addToDOM(newBook){
    const div = document.createElement('div');
    div.setAttribute('class', 'book-container');

    const autherParagraph = document.createElement('p');
    autherParagraph.setAttribute('class', 'author');

    const titleParagraph = document.createElement('p');
    titleParagraph.setAttribute('class', 'title');
    
    const noOfPages = document.createElement('p');
    noOfPages.setAttribute('class', 'pages');

    titleParagraph.innerText = 'Title: ' + newBook.title;
    autherParagraph.innerText = 'Author: ' + newBook.author;
    noOfPages.innerText = 'Pages: ' + newBook.pages;
    div.append(titleParagraph, autherParagraph, noOfPages, ReadStatusOfBook(newBook));
    document.body.appendChild(div);
}

function ReadStatusOfBook(newBook){
    const input = document.createElement('input');
    input.style.width = '20%';
    input.type = 'range';
    input.max = '1';
    input.setAttribute('id', 'choice');
    input.setAttribute('name', 'choice');

    if (newBook.ReadStatus() == 'yes'){
        input.value = 1;
    }
    else {
        input.value = 0;
    }
    return input;
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
        let newBook = new Book(titleBox.value, authorBox.value, pagesBox.value);
        if(titleBox.value != '' && authorBox.value != ''){
            addBookToLibrary(newBook);
        }
        else {
            event.preventDefault();
        }
})