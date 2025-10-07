import React, { useState } from "react";
import Endereco from "./Endereco";
import Telefone from "./Telefone";

export default function PessoaJuridica() {
  const [form, setForm] = useState({
    razaoSocial: "",
    nomeFantasia: "",
    email: "",
    cnpj: "",
    inscricaoEstadual: "",
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
    console.log("Pessoa Jurídica cadastrada:", { ...form, endereco, telefone });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg"
      >
        <h1 className="text-2xl font-bold text-center mb-6">
          Cadastro Pessoa Jurídica
        </h1>

        {/* Campos principais */}
        <div className="space-y-3">
          <input
            name="razaoSocial"
            placeholder="Razão Social"
            onChange={handleChange}
            className="border w-full p-2 rounded focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            name="nomeFantasia"
            placeholder="Nome Fantasia"
            onChange={handleChange}
            className="border w-full p-2 rounded focus:ring-2 focus:ring-blue-400"
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
            name="cnpj"
            placeholder="CNPJ"
            onChange={handleChange}
            className="border w-full p-2 rounded focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            name="inscricaoEstadual"
            placeholder="Inscrição Estadual"
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
