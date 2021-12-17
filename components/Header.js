import { useMoralis } from 'react-moralis';
import Image from 'next/image';
import Avatar from './Avatar';
import ChangeUserName from './ChangeUserName';

function Header() {
  const { user, logout } = useMoralis();
  return (
    <div className="sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-pink-500 text-pink-500">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            layout="fill"
            className="rounded-full"
            objectFit="cover"
            src="/images/Metaverse-profile-2.png"
          />
        </div>
        <div className="col-span-4 text-left lg:text-center">
          <div className="h-48 w-48 relative lg:mx-auto border-pink-500 border-8 rounded-full">
            <div
              className="absolute z-20 bg-white text-lg font-bold  h-48 w-48 rounded-full top-[-8px] left-[-8px] flex justify-center items-center opacity-0 hover:opacity-70 transition duration-500 cursor-pointer border-8 border-pink-500"
              onClick={logout}
            >
              LOGOUT
            </div>
            <Avatar />
          </div>
          <h1 className="text-3xl">WELCOME TO THE METAVERSE</h1>
          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>

          <ChangeUserName />
        </div>
      </div>
    </div>
  );
}

export default Header;
