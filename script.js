async function getPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    const container = document.getElementById('posts');

    data.slice(0, 5).forEach(post => {
      const p = document.createElement('p');
      p.textContent = post.title;
      container.appendChild(p);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

getPosts();