"use client"; // Para estrutura com app router, se estiver usando app/

import { signIn, signOut, useSession } from "next-auth/react";

export default function SignInPage() {
  const { data: session } = useSession();

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Autenticação com NextAuth</h1>
      {!session ? (
        <>
          <p>Você não está logado.</p>
          <button
            onClick={() => signIn("email")}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#0070f3",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Entrar com E-mail
          </button>
          <button
            onClick={() => signIn("google")}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#0070f3",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Entrar com Google
          </button>
        </>
      ) : (
        <>
          <p>
            Logado como: <strong>{session.user?.email}</strong>
          </p>
          <button
            onClick={() => signOut()}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#ff0000",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Sair
          </button>
        </>
      )}
    </div>
  );
}
