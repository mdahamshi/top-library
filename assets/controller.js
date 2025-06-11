import {addBookToLibrary, myLibrary, Model} from './model.js'
import {View} from './view.js'

class Controller {
    constructor(model, view){
        this.model = model;
        this.view = view;


        this.displayLibrary(this.model.library);
        this.view.bindDeleteBook(this.handleDeleteBook);
        this.view.bindReadState(this.handleReadState)
        this.model.bindLibraryChanged(this.onLibraryChange);

    }


    displayLibrary = library => {
        this.view.displayLibrary(library);
    }

    handleDeleteBook = id => {
        this.model.deleteBook(id);
    }

    handleReadState = id => {
        this.model.toggleReadState(id);
    }

    onLibraryChange = library =>{
        this.view.displayLibrary(library);
    }
}
const TOPLib = {
    addBookToLibrary,
    myLibrary
};

new Controller(new Model(), new View());
document.TOPLib = TOPLib;
export {TOPLib}