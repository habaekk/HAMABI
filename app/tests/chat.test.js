// chat.test.js
import { processUserMessage, summarizeChat } from '../api/chat';

describe('Chat API Functions', () => {
  // Mocking the fetch API
  global.fetch = jest.fn(() =>
    Promise.resolve({
      body: {
        getReader: () => ({
          async read() {
            return { done: true, value: new TextEncoder().encode(JSON.stringify({ done: false, message: { content: "Test response" } })) };
          },
        }),
      },
    })
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('processUserMessage should return a valid response', async () => {
    const messages = [
      { role: 'user', content: 'Hello, Hamami!' }
    ];

    const response = await processUserMessage(messages);

    expect(fetch).toHaveBeenCalledWith(
      'http://localhost:11434/api/chat',
      expect.objectContaining({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    );

    expect(response).toEqual({ role: 'assistant', content: 'Test response' });
  });

  test('summarizeChat should return a valid response', async () => {
    const messages = [
      { role: 'user', content: 'Today I went for a walk.' },
      { role: 'assistant', content: 'That sounds refreshing!' }
    ];

    const response = await summarizeChat(messages);

    expect(fetch).toHaveBeenCalledWith(
      'http://localhost:11434/api/chat',
      expect.objectContaining({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    );

    expect(response).toEqual({ role: 'assistant', content: 'Test response' });
  });

  test('Handles fetch error gracefully', async () => {
    fetch.mockImplementationOnce(() => Promise.reject(new Error('Network error')));

    const messages = [
      { role: 'user', content: 'This should fail.' }
    ];

    await expect(processUserMessage(messages)).rejects.toThrow('Network error');
  });
});
