import { withAuth } from "next-auth/middleware";

export default withAuth({
  secret: process.env.NEXTAUTH_SECRET, // Certifique-se de definir o segredo no .env
  pages: {
    signIn: "/auth/signin", // Página de login, que será acessada por usuários não autenticados
  },
});

export const config = {
  matcher: ["/dashboard", "/profile", "/settings"], // Páginas protegidas
};
