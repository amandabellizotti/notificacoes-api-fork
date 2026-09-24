# Registro de Testes Unitários
Aluno: Amanda Silva Bellizotti
Grupo: 01
Data: 24/09/2026
## Testes escritos

| # | Arquivo | O que o teste verifica | Tipo |
| - | ----- | ----- | ----- |
| 1 | `ambientes.test` | Se o seu ambiente de testes está configurado corretamente. | sucesso |
| 2 | `validators.test` | O validador bloqueia e-mails com menos de 3 caracteres. | sucesso |
| 3 | `parseID.test` | Valida se o sistema rejeita IDs inválidos que não sejam números puros. | sucesso / erro |
| 4 | `validators` | Fornece funções para validar se os dados existem. | helpers |

## Resultado
Passaram:ambientes.test,
Falharam:validators.test, validators.js
## Defeito encontrado
Teste: parseId.test
Esperado: Iniciar o erro ao ter letras e numeros juntos no Id.
Obtido: Ele aceitou o valor e executou o resto.
## Cobertura
% Lines da linha "helpers": 55.55 
Em uma frase, o que esse número significa: Significa que quase metade do código do arquivo helpers não foi executada pelos testes.