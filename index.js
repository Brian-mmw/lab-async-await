// Write your code here!
// Get the UL element
const ul = document.getElementById('post-list');

// Function to display posts
function displayPosts(posts) {
  ul.innerHTML = ""; // clear list

  posts.forEach(post => {
    const li = document.createElement('li');

    const h1 = document.createElement('h1');
    h1.textContent = post.title;

    const p = document.createElement('p');
    p.textContent = post.body;

    // ✅ Correct order: append to li FIRST
    li.appendChild(h1);
    li.appendChild(p);

    // ✅ THEN append li to ul
    ul.appendChild(li);
  });
}

// Async function to fetch posts
async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    // ✅ IMPORTANT: call displayPosts
    displayPosts(data);

  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

// ✅ IMPORTANT: call the function
fetchPosts();