"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LobbyChat() {

  const [username, setUsername] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    if (username.trim()) {
      localStorage.setItem("chatUsername", username);
      router.push("/chat");
    }
  }

  return (
    <>
      <h1>Lobby Chat</h1>
      <form onSubmit={handleSubmit}>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Ingrese nombre de usuario" required />
        <button>Enviar</button>
      </form>
    </>
  );
}
