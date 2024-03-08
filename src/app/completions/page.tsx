'use client';

import { useCompletion } from 'ai/react';

export default function Completions() {
  const { completion, input, handleInputChange, handleSubmit, error } =
    useCompletion();

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <h4 className="text-xl font-bold md:text-xl pb-4 text-white'">
        Completions Example
      </h4>

      {error && (
        <div className="fixed top-0 left-0 w-full p-4 text-center bg-red-500 text-white">
          {error.message}
        </div>
      )}

      {completion}

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
