import { useMoralis } from 'react-moralis';
import TimeAgo from 'timeago-react';
import Avatar from './Avatar';

function Message({ message }) {
  const { user } = useMoralis();

  const isUserMessage = message.get('ethAddress')
    ? message.get('ethAddress') === user.get('ethAddress')
    : message.get('email') === user.get('email');

  return (
    <div className={`flex items-end move-msg space-x-2 relative ${isUserMessage && 'justify-end'}`}>
      <div className={`relative h-8 w-8 ${isUserMessage && 'order-last'} ml-2 `}>
        <Avatar username={message.get('username')} />
      </div>

      <div
        className={`flex space-x-4 p-3 rounded-lg 
        
        ${isUserMessage ? 'rounded-br-none bg-pink-300' : 'rounded-bl-none bg-violet-300'}`}
      >
        <p className="">{message.get('message')}</p>
      </div>

      <TimeAgo
        className={`text-[10px] italic text-gray-400 ${isUserMessage && 'order-first pr-1'}`}
        datetime={message.createdAt}
      />

      <p
        className={`absolute -bottom-5 text-xs  ${
          isUserMessage ? 'text-pink-300' : 'text-violet-300'
        }`}
      >
        {message.get('username')}
      </p>
    </div>
  );
}

export default Message;
