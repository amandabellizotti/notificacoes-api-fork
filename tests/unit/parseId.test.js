// tests/unit/parseId.test.js
const parseId = require("../../src/helpers/parseId");
const { ValidationError } = require("../../src/errors/AppError");
describe("parseId", () => {
    // Para testar ERRO, o expect recebe uma função: () => ...
    it("lança ValidationError quando o id não é número", () => {
        expect(() => parseId("abc")).toThrow(ValidationError);
    });

    it("lança ValidationError quando o id contém letras misturadas com números (Ex: '12abc')", () => {
        // A nossa expectativa é que ele REJEITE e lance o erro, pois não é um número puro
        expect(() => parseId("12abc")).toThrow(ValidationError);
    });
});
