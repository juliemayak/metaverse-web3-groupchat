import { useMoralis } from 'react-moralis';

function ChangeUserName() {
  const { user, setUserData, isUserUpdating, userError } = useMoralis();
  const setUserName = () => {
    const username = prompt(`Enter your Username (current: ${user.getUsername()})`);
    if (!username) return;
    setUserData({
      username
    });
  };
  return (
    <div>
      <button
        disabled={isUserUpdating}
        onClick={() => setUserName()}
        className="text-sm absolute top-5 right-5 hover:text-pink-700"
      >
        Change Username
      </button>
    </div>
  );
}

export default ChangeUserName;
