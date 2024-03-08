type ChatBubbleProps = {
  key: string;
  content: string;
  role: 'User' | 'AI';
};

export default function ChatBubble({ key, content, role }: ChatBubbleProps) {
  return (
    <div key={key} className="flex flex-col gap-1 w-fit max-w-[410px] mb-4">
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <span className="text-sm font-semibold text-gray-900 dark:text-white">
          {role}
        </span>
      </div>
      <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
        <p className="text-sm font-normal text-gray-900 dark:text-white">
          {content}
        </p>
      </div>
    </div>
  );
}
