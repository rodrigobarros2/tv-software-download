import Link from "next/link";
import { getServerSession } from "next-auth/next";

export default async function Home() {
  const session = await getServerSession();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Bem-vindo à nossa aplicação</h1>
      {session ? (
        <>
          <p>Você está logado como {session.user?.email}</p>
          <div className="mt-4">
            <Link href="/dashboard" className="text-blue-500 hover:underline mr-4">
              Dashboard
            </Link>
            <Link href="/profile" className="text-blue-500 hover:underline">
              Perfil
            </Link>
          </div>
        </>
      ) : (
        <Link href="/login" className="text-blue-500 hover:underline">
          Faça login
        </Link>
      )}
    </div>
  );
}
