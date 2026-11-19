# Registro de Testes de Endpoint
Aluno: Amanda Silva Bellizotti
Grupo: 01
## Testes escritos
| # | Verbo e rota | Com token? | Status esperado | Verde ou vermelho? |
| --- | ------------ | ---------- | --------------- | ------------------ |
| 1 |GET/eventos | Não | 200 | Verde |
| 2 |GET/eventos | Não | 401 | Verde |
| 3 |GET/eventos | Sim | 201| Verde |
| 4 |GET/eventos/:id | Não | 404| Verde|
| 5 |GET/eventos/:idabc | Não | 400 | Vermelho|
## Resultado
Linha "Tests:" da saída do npm run test:endpoint:
Tests: 3 passed, 3 total
Tests: 4 passed, 4 total
Tests: 5 passed, 5 total
## Defeito encontrado
Teste:  GET /eventos/:id — responde 404 quando o evento não existe.
Esperado:"Evento não encontrado".
Obtido:"Evento não encontrado(a)".
Em qual aula esse mesmo defeito já tinha aparecido, e como: Na aula da atividade 4, o antigo quando mudava o nome de algum participante ele não atualizava. 