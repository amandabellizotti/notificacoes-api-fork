# Registro de Testes de Integração

Aluno: Amanda Silva Bellizotti

Grupo: 01

Data: 15/10/2026

## Banco de teste

Nome do banco de teste: notificacoes_test

Por que ele é separado do banco da API (uma frase): Porque ele garante que os dados criados, alterados ou apagados durante os testes automotizados não poluam ou corrampam os dados reais de desenvolvimento e produção da API.

## Testes escritos

| #   | Arquivo | O que o teste verifica | Verde ou vermelho? |

| --- | ------- | ---------------------- | ------------------ |

| 1   | evento.integration.test.js | Se o evento é gravado com o nome correto no banco de dados.|Verde|

| 2   |participante.integration.test.js|Se a gravação de participante com email inválido.|Verde|

| 3   |participante.integration.test.js|Se a rota e atualiazação realmente salva o nome novo no banco.|Vermelho|

## Resultado

Linha "Tests:" da saída do npm run test:integration:
Tests:       1 failed, 5 passed, 6 total

## Defeito encontrado

Teste: ParticipanteService.atualizar(integração) -> atualiza o nome novo no banco

Esperado: Ana Maria

Obtido: Ana

O que o usuário da API veria (a rota responde 200, mas...):
A api responderia com sucesso, mas a alteração não é persistida de verdade no banco de dados. O nome antigo continua lá.

------------------------------------------------------------

# Ticket de saída — individual

## Por que os testes de integração usam um banco separado do banco da API?
Para não misturar e nem apagar os dados reais do seu sistema. Os testes de integração inserem, alteram e deletam dados o tempo todo (e costumam limpar o banco a cada teste). 

## No Assert, por que buscamos o registro de novo no banco, em vez de conferir o objeto que o service devolveu?
Para garantir que a informação realmente foi salva no disco (banco de dados) e não ficou apenas "na memória" do código.
Às vezes, uma função retorna o objeto atualizado com sucesso no console, mas esquece de executar o comando UPDATE ou SAVE no banco. Buscando direto do banco, você tem 100% de certeza que a persistência funcionou.

## A rota PUT /participantes/:id responde 200. O que o seu teste do desafio mostrou sobre ela?
O teste mostrou que, apesar de a rota responder 200 OK (fingindo que deu tudo certo), ela não estava salvando o nome novo no banco de dados.
Ao buscar o registro no banco após o teste rodar, o nome continuava sendo "Ana" em vez de "Ana Maria". 