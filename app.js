document.getElementById('sendButton').addEventListener('click', async () => {
    const prompt = document.getElementById('promptInput').value;
    const response = await fetch('http://localhost:3000/api/groq-completion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt })
    });
  
    if (!response.ok) {
      const error = await response.text();
      document.getElementById('content').innerText = `Error: ${error}`;
      return;
    }
  
    const data = await response.json();
    document.getElementById('content').innerText = data.completion;
  });
  