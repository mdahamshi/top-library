import { sb_utils } from "./utils.js";
const sb = sb_utils;


class Book{
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = false;
        this.id = sb.generateID('library');
    }
    toggleReadState = () => {
        this.isRead = ! this.isRead;
    };
    info =  () => {
            return `The '${this.title}' by ${this.author}, ${this.pages} pages, ${this.isRead ? 'has been read' : 'not read yet'}.`;
        }



}


class Model{
    constructor(){
        this.library = this.myLibrary;

        this.loadSampleData();

    }
    myLibrary = [];


    addBookToLibrary(title, author, pages){
        let book = new Book(title, author, pages);
        this.myLibrary.push(book);
    }

    sampleData = [
        ['بابا بحب سارة وسلمى', 'بابا', '314'],
        ['Emotional Intelegence', 'Daniel Golman', '298'],
        ['The Prince', 'David Laren', '321'],
        ['Happy Life', 'Sarah Dahamshi', '234'],
        ['Smile and Dad', 'Salmah Dahamshi', '213'],
        ['Sarah in Rawda', 'Sarah Dahamshi', '123']
    ];

    loadSampleData(){
        this.sampleData.forEach(element => this.addBookToLibrary(
            element[0],
            element[1],
            element[2]
        ));
    }

    _refresh(library){
        this.onLibraryChange(library);
    }
    bindLibraryChanged(callback){
        this.onLibraryChange = callback;
    }
    bindUpdateBook(callback){
        this.onBookUpdate = callback;
    }
    deleteBook(id){
        this.library = this.library.filter(book => book.id !== id);
    }
    addBook(title, author, pages){
        let book = new Book(title, author, pages);
        this.library.unshift(book);
        this.onBookUpdate(book);

    }

    toggleReadState(id){
        this.library = this.library.map(book => {
            if(book.id === id){
                book.toggleReadState();
                this.onBookUpdate(book);
            }
            return book;
        });

    }
}

export {Model};