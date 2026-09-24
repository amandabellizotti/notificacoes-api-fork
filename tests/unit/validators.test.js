// tests/unit/validators.test.js
// 1. Importa as funções que vamos testar
const { isEmail, minLength } = require("../../src/helpers/validators");

// 2. describe = agrupa os testes de uma função
describe("validators.minLength", () => {
    it("não deve retornar erro quando o e-mail atinge o mínimo de 3 caracteres", () => {
        const nomeCampo = 'Email';
        const minimo = 3;
        const valorValido = 'an'; // 3 caracteres (atinge o mínimo)
        
        const resultado = minLength(valorValido, minimo, nomeCampo);

        expect(resultado).toBeNull();
    });

    it("deve retornar erro quando o e-mail NÃO atinge o mínimo de 3 caracteres", () => {
        const nomeCampo = 'Email';
        const minimo = 3;
        const valorInvalido = 'an'; // 2 caracteres (menor que o mínimo)

        const resultado = minLength(valorInvalido, minimo, nomeCampo);

        // Garante que ele REJEITA o valor gerando a mensagem exata
        expect(resultado).toBe('Email deve ter pelo menos 3 caracteres');
    });
});

describe("validators.isEmail", () => {
    it("não retorna erro para um e-mail válido", () => {
        const email = "ana@senai.br";
        const resultado = isEmail(email);
        expect(resultado).toBeNull();
    });

    it("retorna mensagem de erro para e-mail sem @", () => {
        const resultado = isEmail("ana.senai.br");
        expect(resultado).toBe("E-mail inválido");
    });
});
