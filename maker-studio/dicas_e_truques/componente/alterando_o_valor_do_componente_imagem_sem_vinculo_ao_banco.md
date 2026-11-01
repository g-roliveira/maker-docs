---
title: "Alterando o valor do componente imagem sem vinculo ao banco"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/componente/alterando_o_valor_do_componente_imagem_sem_vinculo_ao_banco.htm"
---

# Alterando o valor do componente imagem sem vínculo com o banco

Neste tópico será demonstrado que é possível alterar o valor de um componente imagem via fluxo, se não estiver vinculada ao banco.

1. Crie o seguinte formulário:

![image1097.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1097.jpg)

Formulário Imagem - Formulário principal, que executará a regra (fluxo).

Formulário Imagem (componente) - Formulário no qual será obtido a imagem.

2. Criar o fluxo.

Para facilitar o raciocínio o fluxo ficará da seguinte forma:

![image1101.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1101.jpg)

1. Defina a seguinte variável.

![image1102.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1102.jpg)

2. Adicione um ![image680.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image680.jpg) e utilize as seguintes funções: Diretório de Arquivos, Concate e Abrir arquivo para escrita.

![image1105.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1105.jpg)

3. Adicione um segundo ![image680.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image680.jpg) e utilize as seguintes funções: Obter valor do componente do formulário e Adicionar a arquivo.

![image936.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image936.jpg)

4. Adicione um terceiro ![image680.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image680.jpg) e utilize a função: Fechar Arquivo.

![image932.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image932.jpg)

5. Adicione um quarto ![image680.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image680.jpg) e utilize a função: Alterar Valor do componente.

![image935.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image935.jpg)

6. Salve o fluxo com destino Servidor.
7. Associe o fluxo ao botão do formulário Formulário Imagem e execute-o no Webrun.

![image1106.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1106.jpg)
