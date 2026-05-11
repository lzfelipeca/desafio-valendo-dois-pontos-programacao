const assert = require("assert");
const { fazerLogin } = require("../src/login");

// ============================================================
// Desafio - Pós-Graduação em Automação de Testes
// Testes com Mocha
// ============================================================

describe("Testes de Login", () => {

  it("1) Sucesso - login com credenciais corretas", () => {
    assert.strictEqual(
      fazerLogin("carlos@email.com", "senha123"),
      "Login realizado com sucesso"
    );
  });

  it("2) Credencial expirada", () => {
    assert.strictEqual(
      fazerLogin("joao@email.com", "senhavelha789"),
      "Renove suas credenciais"
    );
  });

  it("3) Usuário não encontrado", () => {
    assert.strictEqual(
      fazerLogin("naoexiste@email.com", "qualquersenha"),
      "Credenciais incorretas"
    );
  });

  it("4) Senha incorreta para usuário encontrado", () => {
    assert.strictEqual(
      fazerLogin("ana@email.com", "senhaerrada"),
      "Credenciais incorretas"
    );
  });

});
