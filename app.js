// Replace with your actual GROQ AI API endpoint and token
const API_ENDPOINT = 'https://api.groq.com/v1/query'; // This is a placeholder URL. Replace with the actual endpoint.
const API_TOKEN = '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'; // Replace with your actual API token

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
  contentDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
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
