import { useMoralis } from 'react-moralis';
import Image from 'next/image';
import Avatar from './Avatar';
import ChangeUserName from './ChangeUserName';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

function Header() {
  const { user, logout } = useMoralis();
  const styles = {
    fontFamily: 'Montserrat'
  };
  const [hideHeader, setHideHeader] = useState(false);
  return (
    <div
      style={styles}
      className={`sticky top-0 p-5 z-50 bg-[#2d252f] bg-opacity-75 shadow-sm border-b-2 border-pink-500 text-pink-500 ${
        hideHeader ? 'slideHeaderUp' : 'slideHeaderDown'
      }`}
    >
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
              className="absolute z-20 bg-black text-lg font-[800] h-48 w-48 rounded-full top-[-8px] left-[-8px] flex justify-center items-center opacity-0 hover:opacity-70 transition duration-500 cursor-pointer border-8 border-pink-500"
              onClick={logout}
            >
              LOGOUT
            </div>
            <Avatar logoutOnPress />
          </div>
          <h1 className="text-2xl md:text-3xl inline-block pt-2 typewriter">
            WELCOME TO THE METAVERSE
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold p-2 mb-3 truncate">
            {user?.getUsername()}
          </h2>

          <ChangeUserName />
        </div>
      </div>
      <div
        className=" absolute bottom-[-14px] left-[48%] bg-black rounded-xl w-[40px] text-center hover:cursor-pointer hover:scale-x-110 hover:-translate-y-1 transition-all"
        onClick={() => setHideHeader(!hideHeader)}
      >
        {hideHeader ? (
          <KeyboardArrowDownIcon className="text-3xl" />
        ) : (
          <KeyboardArrowUpIcon className="text-3xl" />
        )}
      </div>
    </div>
  );
}

export default Header;
