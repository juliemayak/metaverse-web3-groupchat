import Head from 'next/head';
import Welcome from '../components/Welcome';
import { useMoralis } from 'react-moralis';
import Header from '../components/Header';
import Messages from '../components/Messages';

export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Welcome />;
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-fuchsia-900 to-black overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <Messages />
      </div>
    </div>
  );
}
