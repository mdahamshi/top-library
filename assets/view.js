import { myLibrary, addBookToLibrary } from "./model.js";


class View{
    constructor(){
        this.library = document.getElementById('library');


        this.app = this.library;

    }
    createBook(book){
        const li = document.createElement('li');
        li.id = book.id;
        li.classList.add('book', 'sb-shadow', 'flex-col');


        const title = document.createElement('h2');
        title.textContent = book.title;
        title.classList.add('book-title');

        const by = document.createElement('p');
        by.append('By ');

        const em = document.createElement('em');
        em.textContent = book.author; // this escapes automatically

        by.append(em);
        by.classList.add('book-author');


        const pages = document.createElement('p');
        pages.textContent = `${book.pages} pages.`;
        pages.classList.add('book-pages');

        const wrapper = document.createElement('div');
        wrapper.append(by, pages);

        const info = document.createElement('p');
        info.textContent = `${book.info()}`;
        info.classList.add('book-info');

        

        
        const toolbar = document.createElement('div');
        toolbar.book_id = book.id;
        toolbar.classList.add('book-toolbar', 'flex-row');
        toolbar.innerHTML = `
        <img id="book-read" src="assets/img/eye-plus-outline.svg" alt="">
        <img id="book-delete" src="assets/img/delete-circle.svg" alt="">
        `;
        
        li.append(title, wrapper, info, toolbar);
        return li;

    }
    displayLibrary(library){
        while(this.library.firstChild){
            this.library.removeChild(this.library.firstChild);
        }

        library.forEach(book => {
        
            let book_item = this.createBook(book);
            this.library.appendChild(book_item);

        });
    }

    bindDeleteBook(handler){
        this.library.addEventListener('click', event => {
            if(event.target.id === 'book-delete'){
                const id = event.target.parentElement.book_id;
                handler(id);
                document.getElementById(id).remove();
            }
        });
    }
    updateBook(book){
        let old_book = document.getElementById(book.id);
        if(old_book){
            let new_book = this.createBook(book);
            this.library.replaceChild(new_book, old_book);
        }
    }
    bindReadState(handler){
        this.library.addEventListener('click', event => {
            if(event.target.id === 'book-read'){
                const id = event.target.parentElement.book_id;
                handler(id);

            }
        });
    }
}


export {View}