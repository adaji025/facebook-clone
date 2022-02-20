import Head from "next/head";
import { getSession, useSession } from "next-auth/react";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

export default function Home() {
  const { data: session } = useSession();
  if (!session) return <Login />;
  return (
    <div children="flex h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>facebook</title>
      </Head>

      <Header className='z-20'/>

      <main className="flex bg-gray-100">
        {/* sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />

        {/* widget */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
