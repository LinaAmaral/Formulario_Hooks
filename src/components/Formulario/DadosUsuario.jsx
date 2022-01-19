import { Button, TextField } from "@material-ui/core";
import React, { useState, useContext } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        id="email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        label="Senha"
        variant="outlined"
        type="senha"
        id="senha"
        name="senha"
        fullWidth
        margin="normal"
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.senha.valido} //se o objeto erros, na chave senha, tiver o campo valido false está errado
        helperText={erros.senha.texto}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={!possoEnviar()}
      >
        Avançar
      </Button>
    </form>
  );
}

export default DadosUsuario;
