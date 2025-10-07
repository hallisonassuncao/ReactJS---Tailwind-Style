import React, { useState } from "react";
import Endereco from "./Endereco";
import Telefone from "./Telefone";

export default function PessoaFisica() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    cpf: "",
    tituloEleitor: "",
  });

  const [endereco, setEndereco] = useState({
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
  });

  const [telefone, setTelefone] = useState({
    ddd: "",
    numero: "",
    tipo: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Pessoa Física cadastrada:", { ...form, endereco, telefone });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg"
      >
        <h1 className="text-2xl font-bold text-center mb-6">
          Cadastro Pessoa Física
        </h1>

        {/* Campos principais */}
        <div className="space-y-3">
          <input
            name="nome"
            placeholder="Nome completo"
            onChange={handleChange}
            className="border w-full p-2 rounded focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            onChange={handleChange}
            className="border w-full p-2 rounded focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            name="cpf"
            placeholder="CPF"
            onChange={handleChange}
            className="border w-full p-2 rounded focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            name="tituloEleitor"
            placeholder="Título de Eleitor"
            onChange={handleChange}
            className="border w-full p-2 rounded focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Componentes reutilizáveis */}
        <div className="mt-6 space-y-4">
          <Endereco endereco={endereco} setEndereco={setEndereco} />
          <Telefone telefone={telefone} setTelefone={setTelefone} />
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
