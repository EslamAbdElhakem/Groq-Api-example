// Replace with your actual GROQ AI API endpoint and token
const API_ENDPOINT = 'https://api.groq.com/v1/query'; // This is a placeholder URL. Replace with actual endpoint.
const API_TOKEN = 'your-api-token-here'; // Replace with your actual API token

async function fetchGroqData(query) {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: query })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Response Data:', data);
    displayData(data);
  } catch (error) {
    console.error('Error fetching data from GROQ AI API:', error);
  }
}

function displayData(data) {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = JSON.stringify(data, null, 2);
}

// Example GROQ query
const exampleQuery = `
  *[_type == "post"]{
    title,
    body
  }
`;

// Fetch data using the example query
fetchGroqData(exampleQuery);
