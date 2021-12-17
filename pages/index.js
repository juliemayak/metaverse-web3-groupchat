import Head from 'next/head';
import Login from '../components/Login';
import { useMoralis } from 'react-moralis';
import Info from '../components/Info';
import Header from '../components/Header';
import Messages from '../components/Messages';

export default function Home() {
  const { isAuthenticated } = useMoralis();
  if (!isAuthenticated)
    return (
      <>
        <Login />
        <Info />
      </>
    );
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <Messages />
        {/* messages */}
      </div>
      {/* <button
        onClick={logout}
        className="rounded-lg text-xl bg-fuchsia-800 p-4 w-[200px] ml-3 font-thin text-white"
      >
        Logout
      </button> */}
    </div>
  );
}
