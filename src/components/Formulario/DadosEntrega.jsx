import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

function DadosEntrega({ aoEnviar }) {
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ endereco, numero, cidade });
      }}
    >
      <TextField
        label="Endereço"
        variant="outlined"
        id="endereco"
        fullWidth
        margin="normal"
        value={endereco}
        onChange={(event) => setEndereco(event.target.value)}
      />
      <TextField
        label="Numero"
        variant="outlined"
        id="numero"
        type="number"
        fullWidth
        margin="normal"
        value={numero}
        onChange={(event) => setNumero(event.target.value)}
      />
      <TextField
        label="Cidade"
        variant="outlined"
        id="cidade"
        fullWidth
        margin="normal"
        value={cidade}
        onChange={(event) => setCidade(event.target.value)}
      />
      <Button type="submit" fullWidth variant="contained" color="primary">
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
