import { useState } from 'react';
import { useMoralis } from 'react-moralis';

function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState('');
  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;
    const Messages = Moralis.Object.extend('Messages');
    const messages = new Messages();

    messages
      .save({
        message,
        username: user.getUsername(),
        ethAddress: user.get('ethAddress')
      })
      .then(
        (message) => {
          //saved
        },
        (error) => {
          console.log(error.message);
        }
      );

    endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });

    setMessage('');
  };

  return (
    <form className="flex fixed bottom-10 bg-black opacity-50 w-11/12 px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 border-pink-400">
      <input
        type="text"
        className="outline-none bg-transparent text-white  placeholder-gray-400 flex-grow pr-5 "
        placeholder={`Enter a Message ${user.getUsername()}...`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage} className="font-bold text-pink-500">
        Send
      </button>
    </form>
  );
}

export default SendMessage;
