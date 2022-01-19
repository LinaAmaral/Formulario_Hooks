import React, { useState, useContext } from "react";
import { Button, Switch, TextField, FormControlLabel } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes); //aqui eu vou ter um objeto com o estado de cada erro e a função muda o estado desses erros e é chamada no onblur dos campos com validação

  return (
    <form
      /* event.Default eu estou previnindo o comportamento default do meu formulário */
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
        }
        //ao inves de colocar o console log aqui passo ele como props pra deixar esse form reutilizável
      }}
    >
      <TextField
        label="Nome"
        variant="outlined"
        id="nome"
        fullWidth
        margin="normal"
        // essa é a forma indicada para controlar o length do input
        value={nome}
        onChange={(event) => {
          let tmpNome = event.target.value;
          if (tmpNome.length >= 4) {
            tmpNome = tmpNome.substring(0, 4);
          }
          setNome(tmpNome);
        }}
      />
      <TextField
        label="Sobrenome"
        variant="outlined"
        id="sobrenome"
        fullWidth
        margin="normal"
        value={sobrenome}
        onChange={(event) => setSobrenome(event.target.value)}
      />
      <TextField
        label="CPF"
        variant="outlined"
        id="cpf"
        name="cpf"
        fullWidth
        margin="normal"
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        value={cpf}
        onChange={(event) => setCpf(event.target.value)}
        onBlur={validarCampos}
      />

      <FormControlLabel
        label="Promocoes"
        control={
          <Switch
            checked={promocoes}
            name="Promoções"
            default={promocoes}
            color="primary"
            onChange={(event) => setPromocoes(event.target.checked)}
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            name="Novidades"
            checked={novidades}
            onChange={(event) => setNovidades(event.target.checked)}
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Confirmar
      </Button>
    </form>
  );
}
export default DadosPessoais;

//o useEfect é a substituição do did mount, unmount e update
