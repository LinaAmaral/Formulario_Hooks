import { StepLabel, Stepper, Typography, Step } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function Formulario({ aoEnviar, validacoes }) {
  const [etapaAtual, setEtapa] = useState(0);
  const [dadosColetados, setDadosColetados] = useState("");

  useEffect(() => {
    if (etapaAtual === formulario.length - 1) aoEnviar(dadosColetados);
  });

  const formulario = [
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant="h5" align="center">
      Obrigada por se cadastrar!
    </Typography>,
  ];

  function coletarDados(dados) {
    setDadosColetados({ ...dadosColetados, ...dados });
    proximoStep();
  }
  function proximoStep() {
    setEtapa(etapaAtual + 1);
  }
  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Endereco</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formulario[etapaAtual]}
    </>
  );
}
export default Formulario;
