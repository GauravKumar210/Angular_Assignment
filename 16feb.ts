//Fetch the jsonplaceholder API using the concept of async and await in Typescript(16 Feb).

// Import 'node-fetch' library
import fetch from 'node-fetch';

// Define the Post interface
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Async function to fetch posts
async function fetchPosts(): Promise<Post[]> {
  try {
    // Make a GET request to the JSONPlaceholder API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON response as an array of Post objects
    const posts: Post[] = await response.json();

    // Return the array of posts
    return posts;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
}

// Async function to execute the main logic
async function main() {
  try {
    // Fetch the posts
    const posts = await fetchPosts();

    // Log the fetched posts to the console
    console.log('Fetched posts:', posts);
  } catch (error) {
    // Handle any errors that occur during the execution
    console.error('An error occurred:', error);
  }
}

// Run the main function
main();
