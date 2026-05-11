// ============================================================
// Desafio - Pós-Graduação em Automação de Testes
// Array de usuários e função de login
// ============================================================

// ---- VETOR DE USUÁRIOS ----
const usuarios = [
  {
    id: 1,
    nome: "Carlos Silva",
    email: "carlos@email.com",
    senha: "senha123",
    expirado: false,
  },
  {
    id: 2,
    nome: "Ana Souza",
    email: "ana@email.com",
    senha: "minhasenha456",
    expirado: false,
  },
  {
    id: 3,
    nome: "João Expirado",
    email: "joao@email.com",
    senha: "senhavelha789",
    expirado: true,
  },
  {
    id: 4,
    nome: "Maria Fernanda",
    email: "maria@email.com",
    senha: "maria2024!",
    expirado: false,
  },
];

// ---- FUNÇÃO DE LOGIN ----
function fazerLogin(email, senha) {
  const usuario = usuarios.find((u) => u.email === email);

  if (!usuario) {
    return "Credenciais incorretas";
  }

  if (usuario.expirado) {
    return "Renove suas credenciais";
  }

  if (usuario.senha !== senha) {
    return "Credenciais incorretas";
  }

  return "Login realizado com sucesso";
}

module.exports = { fazerLogin };
