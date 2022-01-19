function validaCpf(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "Cpf inválido" };
  } else {
    return { valido: true, texto: "" };
  }
}

function validaSenha(senha) {
  if (senha.length < 3) {
    return { valido: false, texto: "Senha inválida" };
  } else {
    return { valido: true, texto: "" };
  }
}

export { validaCpf, validaSenha };
