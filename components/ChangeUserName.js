import { useMoralis } from 'react-moralis';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

function ChangeUserName() {
  const { user, setUserData, isUserUpdating, userError } = useMoralis();
  const setUserName = () => {
    const username = prompt(`Enter your Username (current: ${user?.getUsername()})`);
    if (!username) return;
    setUserData({
      username
    });
  };
  return (
    <div className="absolute top-5 right-5 p-2 bg-transparent rounded-2xl bg-black hover:scale-105">
      <button
        disabled={isUserUpdating}
        onClick={() => setUserName()}
        className="flex items-center space-x-2
          hover:text-pink-700 
         "
      >
        <ModeEditOutlineOutlinedIcon />
        <span className="text-sm">Change Username</span>
      </button>
    </div>
  );
}

export default ChangeUserName;
