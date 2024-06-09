// Default export for the app
import Groq from 'groq-sdk';

const groq = new Groq();

async function main() {
  const chatCompletion = await groq.chat.completions.create({
    messages: [{ role: 'user', content: 'Explain the importance of low latency LLMs' }],
    model: 'mixtral-8x7b-32768',
  });

  console.log(chatCompletion.choices[0].message.content);
}

main();
