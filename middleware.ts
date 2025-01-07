import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // Verifique se o usuário está tentando acessar a página de login
    if (req.nextUrl.pathname.startsWith("/login") && req.nextauth.token) {
      // Se o usuário já estiver autenticado, redirecione para a página inicial
      return NextResponse.redirect(new URL("/", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

// Especifique as rotas que devem ser protegidas pelo middleware
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"],
};
