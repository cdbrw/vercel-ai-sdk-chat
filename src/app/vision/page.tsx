'use client';

import { useChat } from 'ai/react';
import ChatBubble from '../components/ChatBubble';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/vision',
  });

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <h4 className="text-xl font-bold md:text-xl pb-4 text-white'">
        Vision Example
      </h4>

      {messages.length > 0
        ? messages.map((m) => (
            <ChatBubble
              key={m.id}
              role={m.role === 'user' ? 'User' : 'AI'}
              content={m.content}
            />
          ))
        : null}

      <form
        onSubmit={(e) => {
          handleSubmit(e, {
            data: {
              imageUrl:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Field_sparrow_in_CP_%2841484%29_%28cropped%29.jpg/733px-Field_sparrow_in_CP_%2841484%29_%28cropped%29.jpg',
            },
          });
        }}
      >
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl text-black"
          value={input}
          placeholder="What does the image show..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
