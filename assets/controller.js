import {Model} from './model.js'
import {View} from './view.js'

class Controller {
    constructor(model, view){
        this.model = model;
        this.view = view;


        this.displayLibrary(this.model.library);
        this.view.bindDeleteBook(this.handleDeleteBook);
        this.view.bindReadState(this.handleReadState)
        this.model.bindLibraryChanged(this.onLibraryChange);
        this.model.bindUpdateBook(this.onBookUpdate);
        this.view.bindAddBook(this.handleAddBook);

    }


    displayLibrary = library => {
        this.view.displayLibrary(library);
    }

    handleDeleteBook = id => {
        this.model.deleteBook(id);
    }
    handleAddBook = (title, author, pages) => {
        this.model.addBook(title, author, pages);
    }
    handleReadState = id => {
        this.model.toggleReadState(id);
    }

    onLibraryChange = library =>{
        this.view.displayLibrary(library);
    }
    onBookUpdate = book => {
        this.view.updateBook(book);
    }
}


new Controller(new Model(), new View());
