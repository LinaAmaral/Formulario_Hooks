import { Container, Typography } from "@material-ui/core";
import "./App.css";
import Formulario from "./components/Formulario/Formulario";

function App() {
  function aoEnviar(dados) {
    console.log(dados);
  }

  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center">
        {/* detalhe, posso usar esse component h1 por questão de semantica, 
        embora eu queira o tamanho do h3 */}
        Formulário de Cadastro
      </Typography>
      <Formulario aoEnviar={aoEnviar} />
    </Container>
  );
}

export default App;
