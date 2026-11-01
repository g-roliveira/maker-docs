---
title: "Permitir Certificados SSL Não Confiáveis"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_utilitario/permitir_certificados_ssl_nao_confiaveis.htm"
---

# Permitir Certificados SSL Não Confiáfeis

Descrição:

Faz a aplicação aceitar ou não certificados SSL inválidos.

Parâmetros:

1. Verdadeiro para aceitar certificados inválidos. Caso contrário, Falso.

![Permitir_Certificados_SSL_Não_Confiáfeis.png](../../../../../assets/images/legacy/Permitir_Certificados_SSL_nao.png)

Retorno:

Não possui.

Observação:

Por padrão o Webrun é pre configurado para aceitar SSL's Inválidos "Vencidos".

Exemplo:

Ao entrar no sistema utilize a função assumindo o parâmetro como "falso", em um formulário utilize

a função "Obter conteúdo da URL". Caso a URL informada estaja com SSL inválido ou vencido o conteúdo

não será acessado e uma janela de erro será apresentada.

Nome Real:

ebfSSLAccept

Compatibilidade:

Servidor
