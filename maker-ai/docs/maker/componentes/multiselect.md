---
title: "MultiSelect"
source_url: "https://manual.softwell.com.br/docs/maker/componentes/multiselect"
---

O componente MultiSelect permite selecionar várias opções em um ComboBox. Os valores escolhidos são gravados no campo vinculado ao componente.

![Componente MultiSelect](https://manual.softwell.com.br/assets/images/componente_multiselect-0c622cf70c42a4004d261b5d8c5bedca.png)

**Propriedades em comum:**

| Propriedade | Descrição | Tipo | Exemplo |
| --- | --- | --- | --- |
| Altura | Altura do componente na tela. | Inteiro | 250 |
| Código | Código interno gerado pelo Maker. | Inteiro | 5 |
| Container | Container em que o componente será inserido. | Indefinido |  |
| Dica | Texto de ajuda exibido ao usuário. | Letras | "Digite o CPF do cliente" |
| Habilitado | Define se o usuário pode interagir com o componente. | Lógico | Sim |
| PosiçãoX e PosiçãoY | Posição horizontal (X) e vertical (Y) no formulário. | Inteiro | 100 |
| Tabulação | Ordem em que o componente recebe foco ao pressionar Tab. | Inteiro | 2 |
| Tabular | Define se o componente participa da navegação por Tab. | Lógico | Sim |
| Tamanho | Largura do componente. | Inteiro | 100 |
| Visível | Define se o componente aparece no formulário. | Lógico | Sim |
| Nome | Nome interno do componente no formulário. | Letras | "Tabela de Consumidores" |
| Descrição | Legenda exibida acima do componente. O Maker pode sugerir automaticamente com base no campo vinculado. | Letras | "Insira aqui a idade do consumidor" |

**Propriedades específicas do componente Multiselect:**

| Propriedade | Descrição | Tipo | Exemplo |
| --- | --- | --- | --- |
| Campo | Campo do formulário onde as opções selecionadas serão gravadas. |  |  |
| Fonte de Dados | Conexão de banco usada para executar a Consulta SQL. |  |  |
| Consulta SQL | Consulta SQL que carrega as opções do componente. Os resultados preenchem Campo Chave e Campo Lista. |  |  |
| Campo Chave | Coluna da consulta que identifica cada opção (valor gravado no banco). |  |  |
| Campo Lista | Coluna da consulta com o texto exibido ao usuário em cada opção. |  |  |
| Lista | Lista estática de opções. Na grade, a coluna **Valor** é gravada no banco e a coluna **Descrição** é exibida ao usuário. | Lista | `&#123;&#123;Marcos&#125;&#123;1&#125;&#125;` |
| Valor | Mesma função da propriedade Lista. | Lista | `&#123;&#123;Marcos&#125;&#123;1&#125;&#125;` |

**Eventos:**

| Evento | Descrição | Parâmetro Automático |
| --- | --- | --- |
| Ao selecionar | Executa o fluxo quando uma opção é selecionada. | Valor |
| Ao remover | Executa o fluxo quando uma opção é removida. | Valor |

O fluxo associado recebe automaticamente o valor da opção selecionada ou removida.

Observação:

1. Se a propriedade *Consulta SQL* estiver preenchida, as propriedades *Lista* e *Valor* são ignoradas.

---

- [Propriedades e Eventos em comum aos Objetos](../propriedades_e_eventos_comum)
