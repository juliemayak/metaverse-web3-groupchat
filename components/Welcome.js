import Image from 'next/image';
import LoginIcon from '@mui/icons-material/Login';
import { useState } from 'react';
import { useMoralis } from 'react-moralis';
import CloseIcon from '@mui/icons-material/Close';
// signin
import Login from './Login';

function Welcome() {
  const { authenticate, isAuthenticated, user } = useMoralis();
  //change button text
  const [btnText, setBtnText] = useState('Connect with a wallet');
  // show signin and signup
  const [showSignin, setShowSignin] = useState();

  return (
    <div className="relative pointer-events-none overflow-hidden">
      <div className="flex flex-col absolute h-4/6 items-center justify-center w-full ">
        <div className={`${showSignin && 'blur-sm'} relative top-44 move-img z-10 mb-4`}>
          <Image
            src="/images/Metaverse-profile-2.png"
            height={400}
            width={400}
            className="object-cover rounded-full pic_scale"
            priority={true}
          />
        </div>
        <button
          onClick={() => {
            authenticate();
            setBtnText('Authenticate with your wallet');
          }}
          className={`flex justify-center items-center space-x-2 w-[250px] rounded-lg text-lg bg-fuchsia-800 p-2 font-thin text-white hover:shadow-[1px_1px_5px,-1px_-1px_5px] hover:shadow-fuchsia-400 cursor-pointer opacity-0 appear pointer-events-auto my-4
          ${showSignin && 'blur-sm'}
          `}
        >
          <LoginIcon />
          <span>{btnText}</span>
        </button>
        {/* sign up with email&pwd */}
        <div
          className={`${
            showSignin && 'blur-sm'
          } transition-blur duration-700 w-[250px] text-white bg-black opacity-75 border-fuchsia-800 border-2 p-2 rounded-xl text-center `}
        >
          <p>Do not have a Wallet?</p>
          <p
            className="cursor-pointer pointer-events-auto hover:underline font-bold"
            onClick={() => setShowSignin(true)}
          >
            Sign in with Email
          </p>
        </div>
        {/* modal signin&signup */}
        <div
          className={`absolute ${
            showSignin ? 'translate-y-[0%]' : 'translate-y-[-200%]'
          } transition-transform duration-500 ease-in top-[40%] z-10 pointer-events-auto`}
        >
          <div
            className="absolute top-4 right-4 z-10 bg-black rounded-full flex
            hover:bg-fuchsia-500 transition-all
            "
          >
            <CloseIcon
              className="text-fuchsia-500 text-3xl p-[2px] text-center cursor-pointer hover:text-black"
              onClick={() => setShowSignin(false)}
            />
          </div>
          <Login />
        </div>
      </div>
      <div className="bg-gradient-to-b from-fuchsia-800 to-black h-screen w-1/2 absolute move_up left-0"></div>
      <div className="bg-gradient-to-b from-fuchsia-800 to-black h-screen w-1/2 absolute right-0 move_down"></div>
      <div className="w-full h-screen">
        <video
          className={`${showSignin && 'blur-sm'} object-cover w-full h-screen`}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="video/metaverse3.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Welcome;
