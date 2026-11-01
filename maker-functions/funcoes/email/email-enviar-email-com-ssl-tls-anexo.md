---
title: "Email - Enviar Email com SSL/TLS - Anexo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=32"
---

**Categoria:** [Email](../../categorias/email)

**Compatibilidade:** Servidor

## Descrição

Envia uma mensagem com anexo(s) para o(s) destinatário(s).

## Parâmetro(s)

1. Servidor. (Letras)
2. Porta. (Letras)
3. Tipo de Autenticação: (Letras)
1 - Sem SSL
2 - Com SSL
3 - Com TLS
4. Usuário. (Letras)
5. Senha. (Letras)
6. Remetente. (Letras)
7. Destinatários. (Variante) (Ver Observação 1)
8. Assunto. (Variante)
9. Mensagem. (Letras)
10. HTML? (Lógico)
11. Lista de anexos. (Variante) (Ver Observação 2)

## Retorno

Não possui.

## Observações

1. Os destinatários podem ser passados separados por "," e serão enviados como "TO". Se for necessário
enviar email como "TO", "CC" e/ou "BCC", é necessário utilizar a função "Email - Criar lista de destinatários".
2. Para passar apenas um anexo, é possível passar apenas o caminho do arquivo. Se for preciso passar
vários anexos, é necessário passar uma lista de caminhos dos arquivos.
3. Caso o 10º parâmetro seja Verdadeiro, a mensagem será renderizada como HTML, obedecendo a todas as
regras da linguagem.
4. O Servidor SMTP do Hotmail só aceita conexões TLS.
5. O 6º parâmetro, além do email do remetente, também pode ser informado o nome do mesmo. Para isso
deve ser informado o nome que será mostrado e em seguida o email. O email deve ser envolvido por &lt;&gt;.
Ex: Passando Nome e email: Carlos Santos &lt;carlos@testes.com&gt;
Passando apenas email: carlos@testes.com
