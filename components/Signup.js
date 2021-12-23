import { useMoralis } from 'react-moralis';
import { useState } from 'react';
import LoginIcon from '@mui/icons-material/Login';

function Signup() {
  const { signup, error } = useMoralis();
  // signup state
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      className="flex flex-col justify-center items-center space-y-4 w-[250px]"
      onSubmit={(e) => e.preventDefault()}
    >
      <h1 className="text-white text-2xl mb-8">SIGN UP</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="text-fuchsia-100 rounded-md p-2 w-[80%] bg-[#715f75] placeholder-fuchsia-400 outline-none focus:scale-105 transition-all"
        placeholder="Username"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="text-fuchsia-100 rounded-md p-2 w-[80%] bg-[#715f75] placeholder-fuchsia-400 outline-none focus:scale-105 transition-all"
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="text-fuchsia-100 rounded-md p-2 w-[80%] bg-[#715f75] placeholder-fuchsia-400 outline-none focus:scale-105 transition-all"
        placeholder="Password"
      />
      <button
        onClick={() => signup(username, password, email)}
        className="flex justify-center items-center space-x-2 rounded-lg text-lg bg-fuchsia-800 p-2 font-thin text-white hover:shadow-[1px_1px_5px,-1px_-1px_5px] hover:shadow-fuchsia-400 cursor-pointer my-4 w-[80%]"
      >
        <LoginIcon />
        <span>Create account</span>
      </button>
    </form>
  );
}

export default Signup;
