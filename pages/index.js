import Head from 'next/head';
import Login from '../components/Login';
import { useMoralis } from 'react-moralis';
import Info from '../components/Info';

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();
  if (!isAuthenticated)
    return (
      <>
        <Login />
        <Info />
      </>
    );
  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <h1 className="text-normal">Welcome to the App</h1>
      <button
        onClick={logout}
        className="rounded-lg text-xl bg-fuchsia-800 p-4 w-[200px] ml-3 font-thin text-white"
      >
        Logout
      </button>
    </div>
  );
}
