import Head from 'next/head';
import Login from '../components/Login';
import { Moralis, useMoralis } from 'react-moralis';

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();
  if (!isAuthenticated) return <Login />;
  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse</title>
      </Head>

      <Login />
      <button onClick={logout}>Logout</button>
    </div>
  );
}
