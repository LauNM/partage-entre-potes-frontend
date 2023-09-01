"use client";

import { useState, FormEvent } from "react";

export default function Login() {

  const [username, setUsername] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          placeholder={"Username"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type={"submit"}>Envoyer</button>
      </form>
    </>
  );
}