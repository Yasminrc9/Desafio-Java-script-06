class contato {
  constructor(nome, sobrenome, email, cpf, telefone, contato, mensagem) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.cpf = cpf;
    this.telefone = telefone;
    this.contato = contato;
    this.mensagem = mensagem;
  }
}

function Post(form) {
  let data = new contato(
    form.elements.namedItem("nome").value,
    form.elements.namedItem("sobrenome").value,
    form.elements.namedItem("email").value,
    form.elements.namedItem("cpf").value,
    form.elements.namedItem("telefone").value,
    form.elements.namedItem("contato").value,
  );

  console.log(data);

  alert("Formulário enviado com sucesso!");
}
