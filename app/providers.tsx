"use client";

import { Toaster } from "@/components/ui/toaster";
import { getServerSession } from "next-auth/next";
import { SessionProvider } from "next-auth/react";

import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";

export async function Provider({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();

  return (
    <SessionProvider>
      <NextAuthSessionProvider session={session}>
        {children}
        <Toaster />
      </NextAuthSessionProvider>
    </SessionProvider>
  );
}
