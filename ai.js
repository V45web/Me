import { pipeline } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.0.0';

async function runQA() {
  const ai = await pipeline('question-answering', 'Xenova/distilbert-base-cased-distilled-squad');

  const context = "OpenAI created ChatGPT, a powerful AI language model that can assist with various tasks.";
  const question = "Who created ChatGPT?";

  const answer = await ai(question, context);

  console.log(answer);
  document.getElementById("output").innerHTML = answer.answer; // show just the answer text
}

runQA();
