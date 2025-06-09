
"use client";
import { useState } from "react";
import { X } from "lucide-react";

const ModalLogin = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const mockLogin = () => {
    if (user === "aluno" && pass === "1234") {
      alert("Login mockado com sucesso!");
      setOpen(false);
    } else {
      alert("Usuário ou senha inválidos.");
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-20 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-md z-50 hover:bg-blue-700"
      >
        Acessar Plataforma AVA
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full shadow-lg relative">
            <button onClick={() => setOpen(false)} className="absolute top-2 right-2">
              <X />
            </button>
            <h2 className="text-xl font-bold mb-4">Login AVA</h2>
            <input
              type="text"
              placeholder="Usuário"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="w-full border px-3 py-2 rounded mb-3"
            />
            <input
              type="password"
              placeholder="Senha"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="w-full border px-3 py-2 rounded mb-4"
            />
            <button
              onClick={mockLogin}
              className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
            >
              Entrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalLogin;
