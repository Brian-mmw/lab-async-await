// Write your code here!
// Get the UL element
const ul = document.getElementById('post-list');

function displayPosts(posts) {
  ul.innerHTML = "";

  posts.forEach(post => {
    const li = document.createElement('li');

    const h1 = document.createElement('h1');
    h1.textContent = post.title;

    const p = document.createElement('p');
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    ul.appendChild(li);
  });
}
async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    displayPosts(data); // THIS LINE IS CRITICAL
  } catch (error) {
    console.error(error);
  }
}

fetchPosts();