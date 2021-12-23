import Image from 'next/image';
import { useMoralis } from 'react-moralis';

function Avatar({ username, logoutOnPress }) {
  const { user, logout, isAuthenticating } = useMoralis();
  return (
    <Image
      layout="fill"
      objectFit="cover"
      src={`https://avatars.dicebear.com/api/pixel-art/${username || user?.get('username')}.svg`}
      onClick={() => logoutOnPress && logout()}
      className="rounded-full bg-black cursor-pointer "
      disabled={isAuthenticating}
    />
  );
}

export default Avatar;
