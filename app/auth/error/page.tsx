import { useSearchParams } from "next/navigation";

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Erro de Autenticação</h1>
        <p className="text-red-500">
          {error === "Configuration" && "Houve um problema com a configuração do servidor."}
          {error === "AccessDenied" && "Acesso negado. Você não tem permissão para fazer login."}
          {error === "Verification" && "O token de verificação expirou ou já foi usado."}
          {!error && "Ocorreu um erro desconhecido durante a autenticação."}
        </p>
      </div>
    </div>
  );
}
