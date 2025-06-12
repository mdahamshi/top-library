import { myLibrary, addBookToLibrary } from "./model.js";


class View{
    constructor(){
        this.library = document.getElementById('library');

        this.dialog = document.getElementById('dialog-add-book');
        let dialog_close = document.getElementById('dialog-close');
        let new_book = document.getElementById('new-book');
        this.app = this.library;

        dialog_close.addEventListener("click", () => {
            this.dialog.close();
        });
        new_book.addEventListener('click', () => {
            this.dialog.showModal();
        })

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
        let hidden = book.isRead ? '' : 'hidden';
        toolbar.innerHTML = `
        <img id="book-read-check" class="${hidden}" src="assets/img/check-all.svg" alt="">
        <img id="book-read" src="assets/img/eye-plus-outline.svg" alt="">
        <i id="book-delete" class="fa-regular fa-trash-can"></i>
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
    bindAddBook(handler){
        this.dialog.addEventListener('click', event => {
            if(event.target.id == 'button-add-book'){
                event.preventDefault();

                let title = document.getElementById('book-title').value;
                let author = document.getElementById('book-author').value;
                let pages = document.getElementById('book-pages').value;


                this.dialog.close();

                handler(title, author, pages);
            }
        });
    }
    updateBook(book){
        let old_book = document.getElementById(book.id);
        let new_book = this.createBook(book);
        if(old_book){
            this.library.replaceChild(new_book, old_book);
        }
        else {
            this.library.insertBefore(new_book, this.library.firstChild);
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