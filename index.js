import fetch from 'node-fetch';



const url = "https://api.openai.com/v1/completions"


fetch(url, {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
  },
  body: JSON.stringify({
      'model': 'gpt-3.5-turbo-instruct',
      'prompt': 'What is the capital of Spain?'
  })
}).then(response => response.json()).then(data => console.log(data))