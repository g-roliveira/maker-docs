---
title: "Adicionar Usuário ao Grupo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=24"
---

**Categoria:** [Controle de Acesso](../../categorias/controle-de-acesso)

**Compatibilidade:** Banco de Dados, Servidor

## Descrição

Define a permissão de grupo de usuários.
Se o usuário informar o grupo no primeiro parâmetro a função retorna o código do grupo, se não for informado o grupo no primeiro parâmetro a função cria um grupo e retorna seu codigo.

## Parâmetro(s)

1. Código do grupo. (Inteiro) (Ver observação 1)
2. Login do usuário. (Letras)
3. Nome do usuário. (Letras)
4. Tipo de expiração da senha. (Letras)
5. Quantidade de dias de expiração. (Inteiro)
6. Data que iniciou o login do usuário. (Data)

## Retorno

Controle de acesso do usuário adicionando ao grupo. (Inteiro)

## Observações

1. O 1º Parâmetro pode ser obtido através da tabela fr_grupo.
2. No 4º Parâmetro deve colocar:
"E" - se a senha expira em quantidades de dias determinada.
"T" - se a senha é forçada a ser alterada em quantidade de dias especifica.
" I "- se a senha nunca expira
A função cria o usuário para a sessão e não no banco de dados.
Esta função deve ser utilizada no evento "Ao Entrar" do sistema.
