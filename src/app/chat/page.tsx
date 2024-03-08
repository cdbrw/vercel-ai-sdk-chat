'use client';

import { useChat } from 'ai/react';
import ChatBubble from '../components/ChatBubble';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <h4 className="text-xl font-bold md:text-xl pb-4 text-white'">
        Chat Example
      </h4>

      {messages.map((m) => (
        <ChatBubble
          key={m.id}
          role={m.role === 'user' ? 'User' : 'AI'}
          content={m.content}
        />
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl text-black"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
