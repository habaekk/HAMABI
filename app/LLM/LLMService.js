import { H_prompt, S_prompt } from './prompts';

// Message 타입 정의를 JS에서는 생략. 대신 구조만 유지
export const processUserMessage = async (messages) => {

    return await chat(messages, 'Ccat', H_prompt);
};

export const summarizeChat = async (messages) => {

    return await chat(messages, 'Ccat', S_prompt);
}

const chat = async (messages, _model, _prompt) => {
  const prompt = [
    {
      role: 'system',
      content: _prompt
    }
  ];

  const body = {
    model: _model,
    messages: [...prompt, ...messages]
  };

  const response = await fetch('http://localhost:11434/api/chat', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const reader = response.body?.getReader();
  if (!reader) {
    throw new Error('Failed to read response body');
  }

  let content = '';
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    const rawjson = new TextDecoder().decode(value);
    const json = JSON.parse(rawjson);

    if (json.done === false) {
      content += json.message.content;
    }
  }

  return { role: 'assistant', content: content };
};
