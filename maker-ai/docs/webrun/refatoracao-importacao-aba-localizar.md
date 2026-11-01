---
title: "Importação de Dados pela Aba Localizar"
source_url: "https://manual.softwell.com.br/docs/webrun/refatoracao-importacao-aba-localizar"
---

O processo de importação acontece em três etapas:

### 1. Pré-análise

Após selecionar o(s) arquivo(s), o sistema lê a estrutura do arquivo e identifica os cabeçalhos (colunas, chaves ou tags, dependendo do formato).

### 2. Mapeamento (De/Para)

O sistema **sugere automaticamente** a correspondência entre os cabeçalhos do arquivo e os campos do formulário. A sugestão ignora diferenças de maiúsculas/minúsculas e acentos — por exemplo, a coluna `codigo` do arquivo casa automaticamente com o campo `CODIGO` do formulário.

Você pode revisar e ajustar o mapeamento antes de confirmar. Cabeçalhos sem correspondência ficam marcados como **"Não Importar"** e podem ser ignorados ou associados manualmente.

> Ao importar **múltiplos arquivos**, é possível definir um mapeamento único para todos ou um mapeamento individual por arquivo (útil quando os arquivos têm estruturas diferentes).

### 3. Importação

O sistema aplica o mapeamento e insere os registros na grade do formulário.

---

[[Componente Preview](https://manual.softwell.com.br/docs/webrun/\videos\importacao_dados.mp4)](\videos\importacao_dados.mp4)

---

### Formatos suportados

| Formato | Extensões |
| --- | --- |
| Excel | `.xlsx`, `.xls` |
| CSV | `.csv` |
| JSON | `.json` |
| XML | `.xml` |
| Imagem | `.jpeg`, `.jpg`, `.png` |

> O sistema identifica o tipo do arquivo pelo seu **conteúdo**, não apenas pela extensão.

---

### Como preparar o arquivo para importação

Cada formato exige uma estrutura mínima para que o sistema consiga identificar os dados corretamente.

---

### Excel (`.xlsx` / `.xls`)

- A **primeira linha deve ser o cabeçalho** — cada coluna com o nome ou descrição do campo de destino.
- Apenas a **primeira aba** do arquivo é lida.
- A ordem das colunas não importa.
- Colunas extras (não mapeadas) são ignoradas.
- Linhas completamente vazias são descartadas automaticamente.

**Dicas**

- Células formatadas como **Data** no Excel são reconhecidas automaticamente. Datas salvas como texto simples são importadas como texto.
- **Fórmulas são avaliadas** — o valor calculado é importado, não a fórmula em si.

**Exemplo de estrutura**

| Produto | Código | Validade | Observação (ignorado) |
| --- | --- | --- | --- |
| Leite Integral | 789001 | 30/11/2025 | - |
| Pão de Forma | 789002 | 15/11/2025 | - |

---

### CSV (`.csv`)

- A **primeira linha deve ser o cabeçalho**.
- O **separador** (`,` ou `;`) é detectado automaticamente.
- A **codificação** do arquivo também é detectada automaticamente. Para evitar problemas com acentuação, salve o arquivo em **UTF-8**.
- Valores que contenham o separador devem estar entre aspas duplas.
- Linhas completamente vazias são descartadas automaticamente.

**Exemplo de estrutura**

```csv
Produto;Código;Validade
Leite Integral;789001;30/11/2025
Pão de Forma;789002;15/11/2025
```

---

### JSON (`.json`)

- O arquivo deve ser uma **lista de objetos** na raiz (`[&#123;...&#125;, &#123;...&#125;]`).
- As **chaves** de cada objeto são os identificadores das colunas.
- Os campos disponíveis para mapeamento são lidos **a partir do primeiro objeto** da lista. Certifique-se de que o primeiro objeto contenha todas as chaves que precisam ser mapeadas.
- Registros com todos os campos mapeados vazios ou nulos são descartados automaticamente.

**Exemplo de estrutura**

```json
[
  { "Produto": "Leite Integral", "Código": "789001", "Validade": "2025-11-30" },
  { "Produto": "Pão de Forma", "Código": "789002", "Validade": "2025-11-15" }
]
```

---

### XML (`.xml`)

- O arquivo deve ter um **elemento raiz único** (ex.: `&lt;dados&gt;`).
- Dentro da raiz, deve haver elementos repetidos, **um por registro** (ex.: `&lt;registro&gt;`).
- As **tags filhas** de cada registro são os identificadores das colunas.
- Os campos disponíveis para mapeamento são lidos **a partir do primeiro registro**.
- Registros com todos os campos mapeados vazios são descartados automaticamente.

**Exemplo de estrutura**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<dados>
  <registro>
    <Produto>Leite Integral</Produto>
    <Codigo>789001</Codigo>
    <Validade>30/11/2025</Validade>
  </registro>
  <registro>
    <Produto>Pão de Forma</Produto>
    <Codigo>789002</Codigo>
    <Validade>15/11/2025</Validade>
  </registro>
</dados>
```

---

### Imagem (`.jpeg` / `.jpg` / `.png`)

- Requer o **módulo de IA** ativo no sistema.
- Todas as imagens selecionadas são enviadas juntas para análise.
- O sistema tenta extrair os dados visíveis nas imagens e apresenta os resultados para mapeamento.
- A qualidade da extração depende da clareza e da estrutura das imagens.

> Imagens não podem ser misturadas com outros formatos na mesma importação.

---

### Regras gerais

- Colunas do arquivo **sem mapeamento** são ignoradas e não afetam a importação.
- Campos do formulário **sem coluna mapeada** ficam em branco no registro importado.
- Linhas onde **todos os campos mapeados estão vazios** são descartadas automaticamente.
- O mapeamento é **sugerido automaticamente** e pode ser ajustado antes de confirmar.
