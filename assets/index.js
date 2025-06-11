import {addBookToLibrary, myLibrary, Model} from './model.js'
import {View} from './view.js'

class Controller {
    constructor(model, view){
        this.model = model;
        this.view = view;


        this.displayLibrary(this.model.library)

    }


    displayLibrary(library){
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