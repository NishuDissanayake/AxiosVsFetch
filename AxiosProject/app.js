// Comment and uncomment sections as necessary to test each scenario

// POST request
axios.post('https://jsonplaceholder.typicode.com/todos', {
  userId: 11,
  id: 201,
  title: "Try Axios POST",
  completed: true
})
.then(response => {
  document.getElementById('output').innerHTML = `
    <h2>Post Created:</h2>
    <p>Title: ${response.data.title}</p>
    <p>Completed status: ${response.data.completed}</p>
  `;
})
.catch(error => {
  console.error('Error:', error);
  document.getElementById('output').innerHTML = '<p>Error creating post.</p>';
});

// Error handling
/*
axios.get('https://jsonplaceholder.typicode.com/invalid_endpoint')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    if (error.response) {
      // Server responded with a status outside of 2xx
      console.log('Error Status:', error.response.status);
      console.log('Error Data:', error.response.data);
    } else if (error.request) {
      // Request was made but no response was received
      console.log('Error Request:', error.request);
    } else {
      // Something else went wrong
      console.log('Error Message:', error.message);
    }
  });
  */

// Adding auth token to requests with Axios
/*
axios.interceptors.request.use(config => {
  const token = 'your-token';
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => console.log('Data:', response.data))
  .catch(error => console.error('Error:', error));
*/

// Request timeout with Axios
/*
axios.get('https://jsonplaceholder.typicode.com/todos/1', {
  timeout: 3000  // (in milliseconds)
})
.then(response => {
  console.log('Data:', response.data);
})
.catch(error => {
  if (error.code === 'ECONNABORTED') {
    console.log('Request timed out:', error.message);
  } else {
    console.log('Error:', error.message);
  }
});
*/
