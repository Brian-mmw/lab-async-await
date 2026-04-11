// Write your code here!
const bookList = document.getElementById("posts");

function renderBooks(booksArray) {
  booksArray.slice(0, 5).forEach(book => {
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    h3.textContent = book.title;
    p.textContent = book.body;

    bookList.appendChild(h3);
    bookList.appendChild(p);
  });
}

// Fetch data and call function properly
async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  renderBooks(data); // ✅ FIX: pass data directly
}

getPosts();