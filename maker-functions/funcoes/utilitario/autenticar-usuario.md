---
title: "Autenticar Usuário"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Cliente, Servidor

## Descrição

Esta função efetua a autenticação de um usuário.

## Parâmetro(s)

1. Usuário. (Letras)
2. Senha. (Letras)
3. Redirecionar para o formulário principal? (Apenas na Camada Servidor, Lógico)
4. Conexão-Ponte. (DataConnection, Letras, Opcional)

## Retorno

"True" quando a autenticação for realizada com sucesso, "false" quando não for realizada com sucesso (Ver observação 4). (Lógico)

## Observações

1. Caso a função seja utilizada na camada servidor, o sistema não pode possuir o evento "Ao Autenticar" definido. Caso
o tenha, deve-se utilizar esta função na camada cliente.
2. O parâmetro de redirecionamento apenas tem efeito na camada servidor. Na camada cliente, sempre será
redirecionado para o formulário principal.
3. A conexão ponte pode ser obtida através da função "Obter Lista de Conexões-Ponte". Este parâmetro serve para
definir qual a ENTIDADE que será utilizada para acessar o sistema.
4. O retorno da função só poderá ser obtido quando o terceiro parâmetro da função for definido como falso e estiver na camada servidor, visto que, caso verdadeiro, ocorrerá o redirecionamento automático da página.
