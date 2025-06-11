import { myLibrary, addBookToLibrary } from "./model.js";


class View{
    constructor(){
        this.library = document.getElementById('library');


        this.app = this.library;

    }

    displayLibrary(library){
        while(this.library.firstChild){
            this.library.removeChild(this.library.firstChild);
        }

        library.forEach(book => {
            const li = document.createElement('li');
            li.id = book.id;
            li.classList.add('book', 'sb-shadow', 'flex-col');


            const title = document.createElement('h2');
            title.textContent = book.title;
            title.classList.add('book-title');

            const by = document.createElement('p');
            by.textContent = `By ${book.author}`;
            by.classList.add('book-author');

            const pages = document.createElement('p');
            pages.textContent = `${book.pages} pages.`;
            pages.classList.add('book-pages');

            const info = document.createElement('p');
            info.textContent = `${book.info()}`;
            info.classList.add('book-info');

            

            li.append(title, by, pages, info);



            this.library.appendChild(li);

        });
    }
}


export {View}