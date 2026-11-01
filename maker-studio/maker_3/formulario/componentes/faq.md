---
title: "FAQ"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/formulario/componentes/faq.html"
---

-

## FAQ

Com o componente FAQ é possivel criar temas específicos e conjuntos de perguntas para os temas e deixar que o componente direcione respostas automáticas sem necessidade de um operador.

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/iconFAQ.png)

Propriedades

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/FAQProprieadades.png)

- Dica

Campo destinado para descrição do componente.

- Posição X e Posição Y

Definem o ponto de ancoragem do componente, com relação ao formulário.

- Altura e Tamanho

São respectivamente a altura e a largura do componente.

- Visível

Define a visibilidade do componente.

- Habilitado

Habilita ou desabilita o componente.

- Nome

Parâmetro para nomear internamente o componente.

- Código

Código interno do componente.

- Senha de Configuração

Senha para primeiro acesso a tela de configuração do componente.

- Percentual mínimo de confiança

Percentual mínimo para exibição das respostas.

- Descrição do FAQ

Texto para descrição do componente.

- Posição da Mensagem

Posição da descrição do componente.

- Conteúdo quando nulo

Texto quando o componente estiver nulo.

- Acessível

Define quando poderá acessar o componente.

Eventos

- Ao enviar mensagem

Evento que será executado quando o usuário do sistema realizar alguma pergunta (será passado 1 parâmetro automático: Pergunta)(Caso o retorno do fluxo seja falso o componente não irá processar a pergunta).

- Ao retornar um tema

Evento que será executado quando o componente estiver retornado o tema da pergunta (serão passados 3 parâmetros automáticos: pergunta, percentual de confiança e o tema)(Caso o retorno do fluxo seja falso, o componente não exibirá a tela de resposta do tema).

Tela de configuração

Nesta tela contém as seguintes abas:

- Configuração
![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/FAQConfiguracao.png)

- **KEY do usuário:** Esta chave é obtida após cadastramento junto com a Softwell
- **Id do FAQ:** Este Id será gerado após processar o Faq
- **Senha de acesso a configuração:** Senha de acesso a tela de configuração do componente (a mesma terá prioridade sobre a senha defina pelo Maker).
- **Nível mínimo de confiança:** percentual mínimo para exibição da resposta do tema (o mesmo terá prioridade sobre o percentual defina pelo Maker)..
- **Respostas:** Resposta quando o percentual for abaixo do que definido.
- **URL:** URL para ser exibida quando o percentual for abaixo do que definido (O mesmo terá prioridade da resposta).
- **Mensagem de interação:** Texto para descrição do componente (O mesmo terá prioridade sobre a propriedade Descrição do FAQ).

- Temas e ações
![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/FAQTemas.png)

- **Temas:** Nome dos temas para as perguntas.
- **Resposta para o tema:** Texto para a resposta caso o percentual de confiança esteja acima do cadastrado.
- **URL:** URL que será exibida caso o percentual de confiança esteja acima do desejado (o mesmo terá propriedade sobre a resposta).
- **Questões:** principais questões para o componente identificar o tema.

  **Obs.:** Para o componente conseguir um percentual de acerto alto é necessário cadastrar pelo menos 50 perguntas

____________________________________________________________________________

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image16.png)
