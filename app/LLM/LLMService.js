import { H_prompt, S_prompt } from './prompts';


// Message 타입 정의를 JS에서는 생략. 대신 구조만 유지
export const processUserMessage = async (messages) => {

  const prompt = [
    {
      role: 'system',
      content: H_prompt
    }
  ];

  const messagesWithPrompt = [...prompt, ...messages];

  return await chat(messagesWithPrompt, 'Ccat');
};

export const summarizeChat = async (messages) => {

  const prompt = [
    {
      role: 'user',
      content: S_prompt
    }
  ];

  const messagesWithPrompt = [...messages, ...prompt];

  return await chat(messagesWithPrompt, 'Ccat');
}

const chat = async (messages, _model) => {
  
  console.log("inside LLM input", messages);
  
  const body = {
    model: _model,
    messages: messages
  };

  const response = await fetch('http://127.0.0.1:11434/api/chat', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  console.log("This is response in LLM", response);

  const reader = response.body?.getReader();
  if (!reader) {
    throw new Error('Failed to read response body');
  }

  let content = '';
  
  while (true) {
    try {
      const rawjson = new TextDecoder().decode(value);

      let json;
      try {
        json = JSON.parse(rawjson);
      } catch (parseError) {
        console.error('❌ JSON Parsing Error:', parseError);
        continue;  // JSON 변환 실패 시 다음 청크로 넘어감
      }
      if (json.done === false) {
        content += json.message.content;
      }
  
    } catch (error) {
      console.error('❗ Error while reading chunk:', error);
      break;  // 예외 발생 시 반복문 종료
    }
  }
  
  console.log('🌈 Final Content:', content);

  return { role: 'assistant', content: content };
};
