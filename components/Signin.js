import { useMoralis } from 'react-moralis';
import { useState } from 'react';
import LoginIcon from '@mui/icons-material/Login';
import Signup from './Signup';

function Signin() {
  const { login } = useMoralis();
  // signup state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // show sign up modal
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="border-4 p-6 bg-[#332a35] opacity-90 border-fuchsia-700 rounded-lg pointer-events-auto h-[350px] w-[310px] sm:h-[400px] sm:w-[360px] flex justify-center items-center flex-col">
      {showSignup ? (
        <Signup />
      ) : (
        <form className="flex flex-col justify-center items-center space-y-4 w-[250px]">
          <h1 className="text-white text-2xl mb-8">SIGN IN</h1>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-fuchsia-100 rounded-md p-2 w-[80%] outline-none focus:scale-105 transition-all bg-[#715f75] placeholder-fuchsia-400"
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-fuchsia-100 rounded-md p-2 w-[80%] outline-none focus:scale-105 transition-all bg-[#715f75] placeholder-fuchsia-400"
            placeholder="Password"
          />

          <button
            onClick={() => login(email, password)}
            className="flex justify-center items-center space-x-2 rounded-lg text-lg bg-fuchsia-800 p-2 font-thin text-white hover:shadow-[1px_1px_5px,-1px_-1px_5px] hover:shadow-fuchsia-400 cursor-pointer my-4 w-[80%]"
          >
            <LoginIcon />
            <span>Log In</span>
          </button>
          <p className="text-white pt-5 flex flex-col">
            Do not have an account?{' '}
            <span
              className="hover:underline font-bold cursor-pointer text-white"
              onClick={() => setShowSignup(true)}
            >
              Sign up here
            </span>
          </p>
        </form>
      )}
      {showSignup && (
        <p
          className="text-white  cursor-pointer inline-flex mt-4 hover:underline"
          onClick={() => setShowSignup(false)}
        >
          I already have an account
        </p>
      )}
    </div>
  );
}

export default Signin;
