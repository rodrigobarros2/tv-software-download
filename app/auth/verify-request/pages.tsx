export default function VerifyRequestPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Verifique seu e-mail</h1>
        <p className="text-gray-600">
          Um link de login foi enviado para o seu endereço de e-mail. Por favor, verifique sua caixa de entrada e clique
          no link para fazer login.
        </p>
      </div>
    </div>
  );
}
