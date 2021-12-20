import Image from 'next/image';
import LoginIcon from '@mui/icons-material/Login';
import { useState } from 'react';

import { useMoralis } from 'react-moralis';

function Login() {
  const { authenticate } = useMoralis();
  const [btnText, setBtnText] = useState('Connect with a wallet');

  return (
    <div className="bg-black relative">
      <div className="flex flex-col absolute h-4/6 items-center justify-center w-full space-y-4">
        <div className="relative top-44 move-img z-10">
          <Image
            src="/images/Metaverse-profile-2.png"
            height={300}
            width={300}
            className="object-cover rounded-full pic_scale"
          />
        </div>
        <button
          onClick={() => {
            authenticate();
            setBtnText('Authenticate with your wallet');
          }}
          className="flex justify-center items-center space-x-2 rounded-lg text-lg  bg-fuchsia-800 p-2 font-thin text-white hover:shadow-[1px_1px_5px,-1px_-1px_5px] hover:shadow-fuchsia-900 cursor-pointer opacity-0 appear"
        >
          <LoginIcon />
          <span> {btnText}</span>
        </button>
      </div>
      <div className="bg-gradient-to-b from-fuchsia-800 to-black h-screen w-1/2 absolute move_up left-0"></div>
      <div className="bg-gradient-to-b from-fuchsia-800 to-black h-screen w-1/2 absolute right-0 move_down"></div>
      <div className="w-full h-screen">
        <video className="object-cover w-full h-screen" autoPlay muted loop>
          <source src="video/metaverse3.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Login;
