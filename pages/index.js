import Head from "next/head";
import { getSession, useSession } from "next-auth/react"
import Header from "../components/Header";
import Login from "../components/Login";

export default function Home() {
  const { data: session } = useSession()
  if(!session) return <Login />
  return (
    <div>
      <Head>
        <title>facebook</title>
      </Head>
      
      <Header />

      <main>
        {/* sidebar */}

        {/* Feed */}

        {/* widget */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  return {
    props: {
      session
    }
  }
}