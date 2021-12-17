import Image from 'next/image';

import { useMoralis } from 'react-moralis';

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative">
      <div className="flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-4">
        <Image
          src="/images/Metaverse-profile-2.png"
          height={200}
          width={200}
          className="object-cover rounded-full"
        />
        <button
          onClick={authenticate}
          className="rounded-lg text-xl bg-fuchsia-800 p-4 font-thin animate-pulse text-white"
        >
          LOGIN TO THE METAVERSE
        </button>
      </div>
      <div className="w-full h-screen">
        <video className="object-cover w-full h-screen" autoPlay muted loop>
          <source src="video/metaverse3.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Login;
