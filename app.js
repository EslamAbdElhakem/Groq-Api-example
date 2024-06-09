// Default export for the app
import Groq from 'groq-sdk';

const apiKey = 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;
const groq = new Groq(apiKey);

async function main() {
  const response = await groq.completion('Hi !');
  console.log(response);
}

main();