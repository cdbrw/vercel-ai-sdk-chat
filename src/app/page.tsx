'use client';

export default function Home() {
  return (
    <div>
      <h1>Links</h1>
      <ul>
        <li>
          <a className="hover:underline" href="/chat">
            - Chat
          </a>
        </li>
        <li>
          <a className="hover:underline" href="/completions">
            - Completions
          </a>
        </li>
        <li>
          <a className="hover:underline" href="/vision">
            - Vision
          </a>
        </li>
      </ul>
    </div>
  );
}
