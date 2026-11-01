---
title: "Histórico de alterações - API"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/historico_de_alteracoes/historico_de_alteracoes_api.htm"
---

**API 1.1.18**

**Problemas corrigidos:**

1. - Correção na função: **É Nulo** Apresentava problemas com alguns objetos na camada cliente;

**API 1.1.17**

**Problemas corrigidos:**

1. - Correção na função: **É Nulo ou Vazio** Apresentava problemas com alguns objetos na camada cliente;

**API 1.1.16**

Novas Funções:

1. - Alterar título do formulário corrente
   - Definir Permissão do Formulário
   - Definir Permissões do Componente
   - Definir Permissões do Menu
   - Definir Permissões do Relatório
   - Grade - Obter Posição Atual da Paginação
   - Grade - Ir Para Página
   - Botão - Alterar Imagem
   - Alterar tamanho do formulário
   - Abrir Conexão Postgres Definindo Porta
   - Texto Longo - Novo
   - Grade - Desabilitar Componente Grade
   - Gravar Alterações Registro Corrente Assíncrono
   - Listar Atributos de um elemento XML
   - Incluir Dados Registro Corrente(+) Assíncrono
   - Incluir Dados Registro Corrente Assíncrono
   - Enviar Envelope Soap 1.2
   - Obter XML com a Estrutura do Menu
   - XML - Validar Schema
   - Inicia com?
   - Termina com?

**Problemas corrigidos:**

1. - Correção na função: Alterar Imagem do Componente - Não atualizava a imagem caso o componente ligado a banco estivesse vazio.
   - Correção na função: FTP - Modo Passivo - Não permitia a listagem de diretórios.
   - Correção na função: Grade - Alterar Valor de um Componente CheckBox - Não mantinha a posição da barra de rolagem.
   - Correção na função: Alterar Valor do Componente e Mascarar - A máscara aplicada tinha comportamento diferente entre Cliente e Servidor.
   - Correção na função: Remover botão de gravar e gravar+ - Não removia o botão de gravar para o modo de alteração.
   - Correção na função: Alterar Valor do Componente - Na camada servidor, não alterava o valor de componentes criados dinamicamente.
   - Correção na função: Incluir Dados Corrente Assíncrono - Não verificava os campos obrigatórios no subformulário.
   - Correção na função: É nulo ou vazio - Forçava conversão para String em objetos Lista ou Mapa.
   - Correção na função: É nulo - Apresentava erro na depuração com objetos XML no IE9.
   - Correção na função: Obter String Biométrica - Problema nos navegadores FF e Chrome.
   - Correção na função: Abrir Leitor digital - Problema nos navegadores FF e Chrome.
   - Correção na função: Obter Xml com Estrutura do Menu - Montava o XML inválido quando o menu possui separador.
   - Correção na função: Email - Enviar Email com SSL/TLS - Anexo - Não funcionava quando utilizada no Webrun.net.
   - Correção na função: Alterar Valor do Componente e Mascarar - A máscara não estava sendo aplicada ao valor inserido via fluxo.
   - Correção na função: Upload - Apresentava erros não tratados quando o bloqueador de pop-ups estava habilitado.
   - Correção na função: Criptografia Simétrica - Decriptografar Mensagem - Problema com chave contendo caracter acentuado.
   - Correção na função: Executar fluxo no formulário numa moldura - No primeiro parâmetro informava Formulário só que não ficava claro a qual formulário o parâmetro se referia.
   - Correção na função: Executar fluxo - Problema quando utilizado em fluxo cliente.
   - Correção na função: Grade - Executar fluxo ao paginar - Não funcionava com fluxos na camada cliente.
   - Correção na função: Obter valor do componente em outro formulário - problema com vários níveis de forms modais.
   - Correção na função: Diferenças de dias - a mesma retornava um número fracionado.
   - Correção na função: Tornar Componente Acessível - Deixar o componente Memo, acessível em modo navegação quando o mesmo estiver como Texto Rico ou Texto Básico.

**API 1.1.15**

Novas Funções:

1. - [Grade - Executar fluxo ao paginar.](../maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_grade/grade_executar_fluxo_ao_paginar)
   - [Transformar Memo em Texto Rico Básico.](../maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_componente/transformar_memo_em_texto_rico_basico.)

**Problemas corrigidos:**

1. - Correção na função: **Lista de valores mapa** - não retornava o objeto corretamente.
   - Correção nas funções: **Executar procedure, Executar procedure In Out** e **Executar procedure com Retornos complexos** - apresentavam problemas ao retornar cursores.
   - Correção na função: **Transformar Memo em Texto Rico Avançado** - suporte a tabulação e foco ao componente.
   - Correção nas funções: **Definir variável de sessão**, **Obter variável de sessão** e **Remover variável de sessão** - compatibilização com Webrun 2.6.
   - Modificação do nome da função **Transformar Memo em Texto Rico** para **Transformar Memo em Texto Rico Avançado**.
   - Correção na função: **Upload** - o endereço de destino do arquivo, disponível na URL, era exibido. Era permitido upload que qualquer tipo de arquivo.

**API 1.1.14**

Novas Funções:

- [Permitir certificados SSL não confiáveis.](../maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_utilitario/permitir_certificados_ssl_nao_confiaveis)
- [Alterar valor do componente e Mascarar](../maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_formulario/alterar_valor_do_componente_e_mascarar).
- [Definir Variável de Formulário](../maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_formulario/definir_variavel_de_formulario).
- [Obter Variável de Formulário](../maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_formulario/obter_variavel_de_formulario)
- [Resposta Web: Atribuir Valor ao Cabeçalho](../maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_scripts_web/resposta_web_aribuir_valor_ao_cabecalho).
- [Obter Formulário Chamador Principal.](../maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_formulario/obter_formulario_chamador_principal)
- [Remover pasta de arquivos.](../maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_arquivo/Remover_Pasta_de_Arquivos)
- [Tornar consulta não gerenciável.](../maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_banco_de_dados/tornar_consulta_nao_gerenciavel)
- [Ler Todo Arquivo Definindo Charset.](../maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_utilitario/Ler_Todo_Arquivo_Definindo_Charset)

**Problemas corrigidos:**

- Correção na função: **Agendar execução de fluxo** e **Agendar execução do fluxo sem pai** - passagem do caracter ' (aspas simples) para camada cliente não funcionava corretamente.
- Correção nas funções: **Definir variável de sessão**, **Obter variável de sessão** e **Remover variável de sessão** - utilização de caracteres especiais não funcionava corretamente no Firefox.
- Correção na função: **Imagem - Alterar URL da Imagem** - Problema 01: O valor CENTRALIZADO, da propriedade Exibição disponível no componente IMAGEM, não era aplicado após utilização desta função. Problema 02: a função não alterava a URL da imagem quando a propriedade Exibição estava como Centralizado.
- Correção na função: **Alterar Valor do Componente em Outro Formulário** - esta função funcionava apenas entre formulários com parentesco.
- Correção na função: **Enviar Envelope Soap** - problema com valores nulo no Action Operation.
- Correção na função: **Email - Remetente da Mensagem** - caracteres especiais eram apresentados quando o nome do remetente possuía acentos.
- Correção na função: **Semáforo - Liberar** - depois de liberado o semáforo e atualizado o formulário que chama essa função, o semáforo não era adquirido novamente.
- Correção na função: **Árvore - Remover Elemento** - o nome real da função não era igual ao nome interno no código.
- Correção na função: **Executar Fluxo no Formulário** -  Não funcionava quando utilizava um sub-fluxo.
- Correções nas funções: **Alterar Valor do Componente em Outro Formulário, Obter Valor do Componente em Outro Formulário, Atualizar Componente em Outro Formulário, Atualizar Formulário na Moldura - Outro Formulário, Obter Janela do Formulário** e **Formulário está aberto?** - Problema 01: a referência do formulário pai não era armazenada; Problema 02: Funcionamento incorreto quando há mais de um formulário modal aberto.
- Correção na função: **Agendar Execução de Fluxo Sem Pai** - fluxo agendado por esta função não abria o formulário.
- Correção na função: **Grade - Voltar ao modo de navegação** - esta função não funcionava caso fosse chamada pelo evento Ao navegar do formulário principal.
- Correção na função: **Obter o valor do elemento XML** - espaços em branco eram removidos do valor a ser obtido.
- Correção na função: **Árvore - Alterar Fonte** - após alterar a fonte do componente, era necessário atualizar o componente para visualizar a fonte aplicada.
- Correção na função: **Fim do Arquivo** - quando um arquivo aberto para escrita era enviado para esta função, a mensagem de tratamento estava errada.
- Correção nas funções da categoria **Mapeamento** - as funções não funcionavam corretamente caso o objeto Mapa fosse definido numa camada diferente da camada em que a função foi utilizada.
