---
title: "Preview"
source_url: "https://manual.softwell.com.br/docs/maker/componentes/preview"
---

O componente **Preview** permite a exibição de dados em modo **somente leitura**, renderizando uma tabela paginada a partir de uma consulta SQL ou Json Array.

![Componente Preview](https://manual.softwell.com.br/assets/images/preview_1-14a50f6b60542209f8d2b8469d54248b.png)

**Observações:**

1. O componente não permite edição dos dados.
2. A paginação e a busca textual são realizadas no servidor (SQL) ou em memória (JSON), dependendo da fonte de dados configurada.
3. Colunas binárias (imagens) são detectadas automaticamente e exibidas como miniaturas.

**Demonstração:**

[[Componente Preview](https://manual.softwell.com.br/docs/maker/componentes/\videos\preview.mp4)](\videos\preview.mp4)

---

**Propriedades em comum:**

| Propriedade | Descrição | Tipo | Exemplo |
| --- | --- | --- | --- |
| Altura | Define a altura do componente. | Inteiro | 400 |
| Código | Informa o código gerado pelo Maker ao qual o componente/formulário foi associado. De forma geral, não interfere nas características do componente. | Inteiro | 5 |
| Container | Informa em qual container o componente irá ser inserido. | Indefinido |  |
| Dica | Armazena uma dica para o componente, o qual se torna acessível no modo de inserção ou alteração. | Letras | "Informações relativas à 02/2026" |
| Habilitado | Torna o componente possível de ser manipulado. Quando desabilitado, aplica opacidade reduzida e bloqueia interações. | Lógico | Sim |
| Nome | Apresenta o nome do componente. O Maker sugere um nome diferente dos nomes dos componentes existentes no formulário para evitar duplicidade. | Letras | "PreviewPedidos" |
| Posição X e Posição Y | O "X" determina a posição do componente em relação à esquerda do formulário, e o "Y" em relação ao topo. | Inteiro | 100 |
| Tamanho | Determina a largura do componente. | Inteiro | 800 |
| Visível | Selecionando a opção Sim, o componente aparece no formulário. | Lógico | Sim |
| SQL | Consulta SQL que alimenta o componente. Pode conter parâmetros dinâmicos do formulário pai no formato `&#123;campo&#125;`. Quando preenchida, tem prioridade sobre a propriedade Dados JSON. | SQL | `SELECT COD, NOME FROM CLIENTES WHERE EMP = &#123;empresa&#125;` |
| Fonte de Dados | Fonte de dados configurada no projeto a ser usada para executar a consulta SQL. | Conexão | Conexão Principal |
| Paginação | Número de registros exibidos por página. | Inteiro | 10 |

---

**Propriedades específicas do componente Preview:**

| Propriedade | Descrição | Tipo | Exemplo |
| --- | --- | --- | --- |
| Ativar Pesquisa | Exibe o campo de busca textual no cabeçalho do componente. A busca percorre todas as colunas de texto simultaneamente. | Lógico | Sim |
| Altura da Linha | Altura de cada linha da tabela em pixels. | Inteiro | 44 |
| Exibir Imagens | Quando habilitado, colunas binárias são renderizadas como imagens em miniatura. Quando desabilitado, essas colunas são ocultadas. | Lógico | Sim |
| Mensagem Quando Vazia | Mensagem exibida na área da tabela quando não há registros para mostrar. | Letras | "Nenhum registro encontrado." |
| Dados JSON | String JSON com um array de objetos para carregar dados diretamente no componente, sem SQL. As chaves do primeiro objeto definem os cabeçalhos das colunas. | Texto | `[&#123;"Nome":"João","Cargo":"Dev"&#125;]` |

---

**Fontes de dados**

O Preview detecta automaticamente a fonte de dados a utilizar:

1. **SQL (server-side)** : quando a propriedade **SQL** está preenchida. Paginação e busca são realizadas no servidor. Recomendado para consulta de dados dinâmicos.
2. **JSON (client-side)** : quando a propriedade **Dados JSON** está preenchida com um array JSON. Paginação e busca são realizadas em memória.

**Exemplo de JSON:**

```json
[
  {"nome":"Caua Lima S. de Andrade","email":"[email protected]","vaga":"Desenvolvedor Maker NoCode","localizacao":"F1 - Analise","data":"18/02/2026"},
  {"nome":"Caua Lima S. de Andrade","email":"[email protected]","vaga":"Desenvolvedor Maker NoCode","localizacao":"F1 - Analise","data":"18/02/2026"},
  {"nome":"Eduardo Pereira Rocha","email":"[email protected]","vaga":"Desenvolvedor de Sites","localizacao":"F1 - Analise","data":"28/01/2026"},
  {"nome":"Eduardo Pereira Rocha","email":"[email protected]","vaga":"Desenvolvedor Python","localizacao":"F1 - Analise","data":"28/01/2026"},
  {"nome":"Roberto Carlos","email":"[email protected]","vaga":"Desenvolvedor Python","localizacao":"F2 - Entrevista","data":"28/01/2026"},
  {"nome":"Eduardo Pereira Rocha","email":"[email protected]","vaga":"Desenvolvedor Python","localizacao":"F1 - Analise","data":"28/01/2026"},
  {"nome":"Beatriz Oliveira Santos","email":"[email protected]","vaga":"Desenvolvedor Python","localizacao":"F1 - Analise","data":"28/01/2026"},
  {"nome":"Ana Carolina Mendes","email":"[email protected]","vaga":"Analista de Dados","localizacao":"F3 - Aprovado","data":"15/02/2026"},
  {"nome":"Lucas Ferreira Lima","email":"[email protected]","vaga":"DevOps Engineer","localizacao":"F1 - Analise","data":"10/02/2026"},
  {"nome":"Mariana Costa Silva","email":"[email protected]","vaga":"UX Designer","localizacao":"F2 - Entrevista","data":"20/02/2026"}
]
```

> A propriedade **SQL** tem prioridade sobre **Dados JSON** quando ambas estão preenchidas.

---

**Busca textual**

Quando **Ativar Pesquisa** está habilitado, um campo de busca é exibido no cabeçalho.

- É feita uma busca unificada utilizando as colunas visiveis no componente.
- Colunas binárias (imagens) são ignoradas na busca.
- Um badge exibe o total de registros encontrados.
- O botão **[X]** limpa a busca e restaura os dados originais.

---

**Paginação**

O rodapé exibe os controles de navegação:

- **Seletor de tamanho de página**: opções 5, 10, 15, 25, 50 e 100 registros por página.
- **Indicador de página**: exibe a página atual e o total (ex: `1 / 10`).
- **Campo "Ir para"**: aparece automaticamente quando o total de páginas for maior que 5.
- **Botões de navegação**: primeira, anterior, próxima e última página, com botões numéricos ao redor da página atual.

---

- [Propriedades e Eventos em comum aos Objetos](../propriedades_e_eventos_comum)
