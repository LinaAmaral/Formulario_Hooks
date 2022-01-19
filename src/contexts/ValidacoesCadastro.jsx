import React from "react";
import { validaCpf, validaSenha } from "../models/cadastro";

const ValidacoesCadastro = React.createContext({
  cpf: validaCpf,
  senha: validaSenha,
});

export default ValidacoesCadastro;
