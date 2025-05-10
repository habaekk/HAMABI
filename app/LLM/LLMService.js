import { H_prompt, S_prompt } from './prompts';


// Message 타입 정의를 JS에서는 생략. 대신 구조만 유지
export const processUserMessage = async (messages) => {

  const prompt = [
    {
      role: 'system',
      content: H_prompt
    }
  ];

  const _messages = [...prompt, ...messages];

  return await chat(_messages, 'Ccat');
};

export const summarizeChat = async (messages) => {

  const prompt = [
    {
      role: 'user',
      content: S_prompt
    }
  ];

  const _messages = [...messages, ...prompt];

  return await chat(_messages, 'Ccat');
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
  let chunkCount = 0;  // 몇 번째 청크인지 세기 위한 변수
  
  while (true) {
    try {
      // 🔥 청크 번호 로그
      // console.log(`📝 Reading chunk #${chunkCount + 1}`);
  
      const { done, value } = await reader.read();
  
      // ✅ 읽기 완료 여부 확인
      if (done) {
        // console.log('✅ Stream reading completed.');
        break;
      }
  
      // 🔥 청크 데이터 로그
      // console.log(`📦 Raw chunk #${chunkCount + 1}:`, value);
  
      const rawjson = new TextDecoder().decode(value);
  
      // 🔥 JSON 변환 로그
      // console.log(`🔍 Decoded JSON from chunk #${chunkCount + 1}:`, rawjson);
  
      let json;
      try {
        json = JSON.parse(rawjson);
      } catch (parseError) {
        // console.error('❌ JSON Parsing Error:', parseError);
        continue;  // JSON 변환 실패 시 다음 청크로 넘어감
      }
  
      // ✅ JSON 구조 확인
      // console.log(`🌟 Parsed JSON #${chunkCount + 1}:`, json);
  
      if (json.done === false) {
        content += json.message.content;
  
        // 🔥 누적된 콘텐츠 로그
        // console.log(`💬 Accumulated content after chunk #${chunkCount + 1}:`, content);
      }
  
      chunkCount++;  // 청크 카운트 증가
    } catch (error) {
      // console.error('❗ Error while reading chunk:', error);
      break;  // 예외 발생 시 반복문 종료
    }
  }
  
  console.log('🌈 Final Content:', content);

  return { role: 'assistant', content: content };
};
