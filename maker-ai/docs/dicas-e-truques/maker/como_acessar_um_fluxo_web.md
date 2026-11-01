---
title: "Como acessar um Fluxo Web"
source_url: "https://manual.softwell.com.br/docs/dicas-e-truques/maker/como_acessar_um_fluxo_web"
---

## Visão geral

Um **Fluxo Web** é um fluxograma da camada **Servidor** marcado com a propriedade **Web** ativada. Com isso, a regra pode ser chamada por uma página HTML ou por qualquer cliente HTTP, sem necessidade de abrir um formulário no Webrun.

Neste guia, o exemplo cadastra um Estado na tabela `GER_ESTADO` a partir de um botão em uma página HTML simples.

---

## Consultar os fluxos web do projeto

Antes de montar a URL de chamada, você pode verificar quais fluxos estão disponíveis como **Web** no seu projeto, seus parâmetros de entrada e a URL de cada regra.

### Pelo painel administrativo

1. Acesse a **Tela de Configuração** do Webrun.
2. Clique em **Fluxos Web**:

![Opção Fluxos Web na Tela de Configuração](https://manual.softwell.com.br/assets/images/tela_fluxo_web_configuracao-e3e1844d779d7492e0a2d940942e7f68.png)

A tela exibe os sistemas que possuem fluxos marcados como Web, os respectivos fluxos e os parâmetros necessários para a execução de cada um:

![Lista de Fluxos Web](https://manual.softwell.com.br/assets/images/tela_fluxo_web_lista-c04352933f16cfbac7b6d5961596332e.png)

### Pela URL direta

Também é possível acessar a mesma listagem diretamente pelo endereço:

```
http://INSTANCIA:PORTA/CONTEXTO/webRules.jsp
```

Substitua os valores conforme o seu ambiente.

> **Conferência antes de integrar**
>
> Use essa tela para validar o **nome exato** do fluxo (incluindo espaços e acentos) e os **parâmetros de entrada** antes de montar a URL ou o formulário HTML.

---

## Passo a passo

### 1. Criar e publicar o fluxo

#### 1.1 Montar o fluxograma

1. Adicione um processamento ![Processamento](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAA5CAMAAADjlSLrAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpUExURQAAAGKn8QB7/w6B/VSh8xyH+wBgxwF7/wlz5gp26gZq1Qp47wp47gl47gl79QV8/Ahx4QF7/gR49AZ8+gBt4wlw4Ahw3wl68wt78gFjzAly5GbV/////9vA/wR8/Qt68QFhyQJlzwh8+gR8/Al05wFw57ap/5Dq/7b//2Z7/wt47gFiygVq1gh8+Qdx4gV59TrA/9vq/5CS/wCp/wCS/9v////q/zp7///V/wl37AJkzdvV/7bq/wVr2At57why4gNmzwp36wN8/Qht2gl69Ap78wl26QF8/gJ8/gl79AV7+gFiywt36wdu2whu3Ahx4gt47Adu3Qp79Alz5Ad8+gd8+Qhw4AZr2Adw3wp26wpx4Qh68wRn0wh79wp47Qt37Eaa9SqO+QAAAKfDlc4AAABjdFJOU///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AHc1DpsAAAAJcEhZcwAADsIAAA7CARUoSoAAAAJRSURBVGhD7ZpbV9NAEIBDgF00YChYUbtFQaRRRKGi1CsoKFasV7zgle7//xHOzE5PCacQ93g087DfaTeTzG7ydTonfUgjiwzFchhCIdIa5iMyGHZaI7wrhxHU4lgSoMWRLKJRDmQR8VYYQcuHoOVD0PIhaPlQrpZCOM4hQEvnoUTJWmOnTquEGU8mkmTiDCVK1kr1JFXsEBVMyNOawoS43po+i4lytarVc9Uq+zAStFjlMEHrWJzJDLVYqvX5CxeLtWrGmDrH/whdmU3T9JK6PIda80pNXlm4iomTtBbjuAHvvyG7xsFgri9RodQNrdTyTRffwkSB1ko9zlZN87YxsLN2x5hmvGLM3fXcCGWFqmbGtDLTgjV0EJa1XOgWD8SJOK17911cdDvlamVN+tDuBW4P4MKL8cN1nOJGF/Tm8ARYxkt4Mwj16DGwoTafwJf4dEGprfFtShT3FpwSr1Rrrq2iBHx2PAwbyLmRy8NaPKG3y4vdKY+Cfa71M6oShjPPi3+qsVoAnLl/DVctR4NKACOU6ki1gP4S3gzCae28QDBCKPFnWq49sA7UW6aObVanZoNqNXLVchM4rhX0FmnlocQJWv+BvtYsDtPt9nb7JSakaO0mFa1fYY8JuMur3Q7yutNBoTdv1bvl9wK0+G7aY0N90HsCtD5++syg1Zd99XXvm5ifakSp7z/0PsqJ0lr6CTeuX+K0+lCiXK1jCVo+BC0fgpYPQcuHoOVDJOvJa4/ogANZRFai10FkbZdjOXTpyb40ry7/4cBKejI8aq21vwFZN5vOCyTWywAAAABJRU5ErkJggg==) e utilize a função **Executar Atualização**.
2. Ao clicar no parâmetro **SQL Atualização**, a tela **Propriedade** será aberta:

   ![Propriedade SQL Atualização](https://manual.softwell.com.br/assets/images/image721-893b7403360a9b4aecce09b473d4caf4.png)
3. Clique em ![Construtor SQL](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAAeCAIAAABfSUCzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQqSURBVGhD7dhvaFtVFADw+5LVljT945JsrbY0tKSGTlbY3MThxDpW3AeZMLMi6lxhnxS0m2z+Q7CyrQymWakwPwxE2IfVgIKbip2sswyHsJaOrlvX2Jq06dI0GTbLv7ZJvZ6XexqeaVqyZbyXJ/dHCeece3Jv+25veC9CV1eXx+OZn58nnDoVFhZWVVUJnZ2dLS0tRqMRy5zaBAKB7u5uYWZmpry8fG5uDsuc2hQVFc3OzgqJRCIajWKNUyedTifE43G+kWoHG6nBkFM58URGIhHMOHUqLi7mJ/J/QjyR4XAYM9n1HDNgtKT547sYcVnT6/XCwsJCKBTCgrz6Tq5/qd2nLfibECchE4TMJ+LBrw8e2/PZFHZw2SkpKVHso/XXDtPLx2PaAi0hM4T4CKGEPLKmoPzAyd3nPqzAJi5r4kZSJYjrJj4hsQ9I7AtCewn10kQwNPjjH19+t8qvZDAYMMqEja7es7rl74UKg3kSlpKwlNu6OcKNVAyN07u36PAlOvgbcQ0vTPmn3dPP/OR42+kw2q6s294DP9h5PwKBAEY5MxqNMBuT+hZTWgR58u2mkidyufrOT9cbNNVbrfqqdUSj9fXtxO4lfr8fLhwmlKbFMIrJg4LfAaMkaZqafKWetLqcYOk8evwoan12s1W/p7WpoWJNbMDtu/wCDtwnk8nEXlNSdUaaSmPAUjUSotGo1+vFTEbXTlsamho3bCwl00NEW6p579Tzm8r27t/u8dw7ceQiXVyEux/nhaexW6Kurm5sbGyVWFoEaSlglYz9GZtZsFJPxnlkVllZKZ7If5QA65qfOjJ8dezq75FLPeJ/0uWB4FvvXPhr2HX2vA128fYPW7D1v5xOJ1wyCOA1LU6OizOzAEjrEDOsIdUm7ZfGDLydgTeySlpPxnlkBksr+dFavHbuyV0d21q/39E2RH/Z0tNuqiFus7XytV3nYBexKQcWiwU2QBozrJI7mBOjPKDozQ69QWfP0Nuv05vNsfG29z/ve9TyxInDvc0VHdi0gtHRUbiI8JoWM+wvylhkWJyqLB9KgUkwytTPls44j8xg6Xy52Tn67VrvPf2t/sRzj331Yt0oVnNTvwRiuOiYJFOpLIcgXl5kKasDrCZhSS5CJBKZnJzETEbXzzTYjh8kvmtwszPgeXy3/VW/pn5f/dk3zOdvuDQ7Dg1hX96zWq0jIyOYKKS6ulqxE9l44KbjI7v/TnCRCvtO7wxENu7f2v9u05/q2kWg+C4y4ol0u92Yya73VOPFqQ0/Tx/dVtr+imUQKk1t19kQl72amhohHA67XC4sKGHzm67+b8yYcA/EbDYrf7PDd/GhEE/k+Pg4Zpw61dbW5svjB5cjIRQK8ROpdnAihYmJCZ1Op8ijJPdQwENkNBoV7Ha7zWYrKyvDMqc2wWDQ4XD8C58CeAp0d3hrAAAAAElFTkSuQmCC). Abrirá a tela **Construtor SQL: Inserção**. No campo **Tabela**, selecione `GER_ESTADO`.
4. No campo **Código** (`est_cod`), informe o valor desejado:

   ![Campo Código](https://manual.softwell.com.br/assets/images/image723-08049353ab00b03ee5279d07c4460fe3.png)
5. No campo **Nome** (`est_nome`), informe o estado desejado:

   ![Campo Nome](https://manual.softwell.com.br/assets/images/image724-09049fe8aa5bb530d5fb9610f72857fc.png)

   A tela deve ficar assim:

   ![Construtor SQL completo](https://manual.softwell.com.br/assets/images/image725-5f16d104341c239cd16e8bb3591bd708.png)

#### 1.2 Salvar e marcar como Web

1. Salve o fluxo na camada **Servidor**.
2. Na aba **Objeto Fluxos**, clique com o botão direito no fluxo e selecione **Web**:

   ![Marcar fluxo como Web](https://manual.softwell.com.br/assets/images/image726-0eac41b9bda279a021a2b4321e21b36e.png)
3. Salve o projeto.

---

### 2. Criar a página HTML

Abra um editor de texto e crie um arquivo HTML com o código abaixo. Ajuste a URL do `action` conforme o seu ambiente e o nome exato do fluxo:

```html
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<body>
  <form method="POST" action="http://127.0.0.1:202/webrunstudio/Fluxo web.rule?sys=TRB">
    <input type="submit" value="CLIQUE" id="botao" name="botao" />
  </form>
</body>
</html>
```

---

### 3. Testar a integração

1. Abra o arquivo HTML no navegador.
2. Clique no botão **CLIQUE**:

   ![Botão de teste](https://manual.softwell.com.br/assets/images/image727-473e7cdc64d253fbef1f198b385b7d6d.png)
3. Consulte a tabela `TRB_ESTADO` e verifique se o registro foi criado:

   ![Registro criado](https://manual.softwell.com.br/assets/images/image728-187e0845bfcfa42bb07e970ba1957360.png)

---

## Montagem da URL

A URL de chamada segue o padrão:

```
http://[IP]:[Porta]/[Contexto]/[Nome da regra].rule?sys=[Sigla do sistema]
```

| Item | Observação |
| --- | --- |
| **Nome da regra** | Deve ser **exatamente** como definido no fluxo, incluindo espaços, acentos e caracteres especiais |
| **Parâmetro `sys`** | Obrigatório — identifica o código do sistema |
| **Demais parâmetros** | Podem ser enviados via **GET** ou **POST**, com o mesmo nome definido no fluxo |

### Exemplo com parâmetro de entrada

Se o fluxo possui um parâmetro chamado `Código do Cliente`, inclua um campo com o mesmo nome no formulário HTML:

```html
<input type="text" name="Código do Cliente" />
```

Também é possível enviar arquivos como parâmetro de entrada:

```html
<input type="file" name="arquivo" />
```

O retorno da regra é enviado na resposta do POST — pode ser texto (`String`) ou bytes, conforme o retorno definido no fluxo.

> **Parâmetros reservados**
>
> Não utilize como parâmetro de entrada da regra os nomes `sys`, `formID` ou `locale`.

---

## Informações complementares

- Para um exemplo completo de envio de arquivos via Fluxo Web, consulte [Enviando arquivos via fluxo Web](enviando_arquivos_via_fluxo_web).
- O sistema que utilizar Fluxos Web **não deve conter instância** configurada na Área de Trabalho.
