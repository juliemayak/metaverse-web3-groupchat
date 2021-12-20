import { useState } from 'react';

function Accordion({ title, content }) {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className="w-full mb-10 relative overflow-hidden">
      <button
        className="w-full h-20 relative p-2 rounded-md text-[25px] text-center bg-transparent cursor-pointer bg-purple-200 mb-1 hover:bg-purple-400 transition-all ease-linear font-light"
        onClick={() => setIsShowing(!isShowing)}
        type="button"
      >
        <p>{title}</p>
      </button>
      {isShowing && (
        <div className="w-full p-5 text-[20px] rounded-md text-center bg-purple-200 hover:bg-purple-300 transition duration-300 ease-linear font-light">
          {content}
        </div>
      )}
    </div>
  );
}

export default Accordion;
