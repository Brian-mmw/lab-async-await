// Write your code here!
const ul = document.getElementById('post-list');

function displayPosts(posts) {
  const postList = document.getElementById("post-list");

  // Clear list (good practice)
  postList.innerHTML = "";

  posts.forEach(post => {
    const li = document.createElement('li');

    const h1 = document.createElement('h1');
    h1.textContent = post.title;

    const p = document.createElement('p');
    p.textContent = post.body;

    // Append elements
    li.appendChild(h1);
    li.appendChild(p);
    ul.appendChild(li);
  });
}

// Async function to fetch data
async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    // Call display function
    displayPosts(data);

  } catch (error) {
    console.error(error);
  }
}

// Call the function
fetchPosts();