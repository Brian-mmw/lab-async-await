// Write your code here!
const bookList = document.querySelector('#book-list');
function renderBooks(booksArray) {
    booksArray.forEach(book => {
        // Create the elements
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const img = document.createElement('img');

        // Add the content from the book object
        h3.textContent = book.title;
        p.textContent = book.author;
        img.src = book.imageUrl; // Make sure 'U' is capitalized!

        // Put them inside the book-list div
        bookList.appendChild(h3);
        bookList.appendChild(p);
        bookList.appendChild(img);
    });
}
renderBooks(bookStore.books);