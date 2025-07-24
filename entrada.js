const form = document.getElementById('entradaForm');
const msgErro = document.getElementById('msgErro');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const cpf = form.cpf.value.trim();
  const nome = form.nome.value.trim();
  const telefone = form.telefone.value.trim();

  // Simulação de base de moradores (no caso real usaria arquivo JSON)
  const moradores = [
    {
      cpf: "983.899.900-90",
      nome: "Matheus Henrique",
      telefone: "43 99615-9550"
    }
  ];

  // Verifica se o usuário está cadastrado (pode validar só pelo cpf)
  const existe = moradores.some(morador => morador.cpf === cpf);

  if (!existe) {
    msgErro.textContent = 'Usuário não existe';
    return;
  }

  msgErro.textContent = '';
  alert(`Entrada liberada para ${nome}!`);
  form.reset();
});
