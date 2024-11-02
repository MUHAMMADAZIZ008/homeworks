class BookList {
    constructor(books, favoriteBook){
        this.books = [{"title": books[0], "author": books[1]}]
        this.favoriteBook = favoriteBook
    }
    addBook(title, author){
        this.books.push({"title": title, "author": author})
    }
    setFavoriteBook(title){
        this.favoriteBook = title
    }
    getBooksList(){
        let bookList = ""
        for(let item of this.books){
            bookList += `title: ${item["title"]}\nauthor: ${item["author"]}\n`
        }
        console.log(bookList);
    }
    getFavoriteBook(){
        console.log(`favorite book: ${this.favoriteBook}`);
    }
}

let book1 = new BookList(["o'tgan kunlar", "abdulla qodiry"], "men")
book1.addBook("sariq", "gafur")
book1.getBooksList()
book1.setFavoriteBook("sariq")
book1.getFavoriteBook()
