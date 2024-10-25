// Comment and uncomment sections as necessary to test each scenario

// POST request
fetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ // Manually converting the object to JSON
    userId: 11,
    id: 202,
    title: 'Try Fetch POST',
    completed: true
  })
})
.then(response => {
  if (!response.ok) { // Manual error handling for HTTP errors
    throw new Error('Error creating post');
  }
  return response.json(); // Manually parsing the response to JSON
})
.then(data => {
  document.getElementById('output').innerHTML = `
    <h2>Post Created:</h2>
    <p>Title: ${data.title}</p>
    <p>Completed status: ${data.completed}</p>
  `;
})
.catch(error => {
  console.error('Error:', error);
  document.getElementById('output').innerHTML = '<p>Error creating post.</p>';
});

// Error handling
/*
fetch('https://jsonplaceholder.typicode.com/invalid_endpoint')
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error('Error:', error.message);
});
*/

// Adding auth token to requests with fetch() wrapper
/*
async function fetchWithAuth(url, options = {}) {
  const token = 'your-token';
  options.headers = {
    ...options.headers,
    'Authorization': `Bearer ${token}`
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
}

fetchWithAuth('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => console.log('Data:', data))
  .catch(error => console.error('Error:', error));
*/

// Request timeout with fetch()
/*
const controller = new AbortController(); 
const signal = controller.signal;

setTimeout(() => controller.abort(), 3000);

fetch('https://jsonplaceholder.typicode.com/todos/1', { signal })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    if (error.name === 'AbortError') {
      console.log('Request timed out');
    } else {
      console.log('Error:', error.message);
    }
  });
*/

