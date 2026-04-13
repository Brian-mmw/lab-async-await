// Write your code here!
// Get the UL element
const ul = document.getElementById('post-list');

function displayPosts(posts) {
  const container = document.getElementById('posts'); // 👈 NOT ul
  container.innerHTML = "<h1>Posts</h1>"; // reset but keep heading

  posts.forEach(post => {
    const h1 = document.createElement('h1');
    h1.textContent = post.title;

    const p = document.createElement('p');
    p.textContent = post.body;

    container.appendChild(h1);
    container.appendChild(p);
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