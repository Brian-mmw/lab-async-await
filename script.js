async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        const container = document.getElementById('posts');

        data.slice(0, 10).forEach(post => {
            const h1 = document.createElement('h1');
            h1.textContent = post.title;

            const p = document.createElement('p');
            p.textContent = post.body;

            container.appendChild(h1);
            container.appendChild(p);
        });

    } catch (error) {
        console.error('Error:', error);
    }
}

getPosts();
 