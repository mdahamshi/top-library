function Book(title, author, pages){
    if(!new.target)
        throw Error("You muse use new to call this function !");

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = false;
    this.id = crypto.randomUUID();
    this.info = function(){
        return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead ? 'has been read' : 'not read yet'}.`;
    }
}
Book.prototype.toggleReadState = function(){
    this.isRead = ! this.isRead;
};


const myLibrary = [];

function addBookToLibrary(title, author, pages){
    let book = new Book(title, author, pages);
    myLibrary.push(book);
}

const sampleData = [
    ['Emotional Intelegence', 'Daniel Golman', '298'],
    ['The Prince', 'David Laren', '321'],
    ['Happy Life', 'Sarah Dahamshi', '234'],
    ['Smile and Dad', 'Salmah Dahamshi', '213'],
    ['Sarah in Rawda', 'Sarah Dahamshi', '123']
];

function loadSampleData(){
    sampleData.forEach(element => addBookToLibrary(
        element[0],
        element[1],
        element[2]
    ));
}
loadSampleData();



class Model{
    constructor(){
        this.library = myLibrary;

        this.addBookToLibrary = addBookToLibrary;
    }
    _refresh(library){
        this.onLibraryChange(library);
    }
    bindLibraryChanged(callback){
        this.onLibraryChange = callback;
    }

    deleteBook(id){
        this.library = this.library.filter(book => book.id !== id);
        this._refresh(this.library);
    }

    toggleReadState(id){
        this.library = this.library.map(book => {
            if(book.id === id)
                book.toggleReadState();
            return book;
        });

        this._refresh(this.library);
    }
}


export {addBookToLibrary, myLibrary, Model}