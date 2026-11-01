---
title: "Alterando o valor do componente imagem sem vinculo ao banco"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/componente/alterando_o_valor_do_componente_imagem_sem_vinculo_ao_banco.htm"
---

# Alterando o valor do componente imagem sem vínculo com o banco

Neste tópico será demonstrado que é possível alterar o valor de um componente imagem via fluxo, se não estiver vinculada ao banco.

1. Crie os seguintes formulários:

![image1097.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1097.jpg)

Formulário Imagem - Formulário principal, que executará a regra (fluxo).

![image1099.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1099.jpg)

Formulário Imagem (componente) - Formulário no qual será obtido a imagem.

2. Criar o fluxo.

Para facilitar o raciocínio o fluxo ficará da seguinte forma:

![image1101.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1101.jpg)

1. Defina a seguinte variável.

![image1102.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1102.jpg)

2. Adicione um ![image680.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image680.jpg) e utilize as seguintes funções: Diretório de Arquivos, Concate e Abrir arquivo para escrita.

![image1105.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1105.jpg)

3. Adicione um segundo ![image680.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image680.jpg) e utilize as seguintes funções: Obter valor do componente do formulário e Adicionar a arquivo.

![image936.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image936.gif)

4. Adicione um terceiro ![image680.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image680.jpg) e utilize a função: Fechar Arquivo.

![image932.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image932.gif)

5. Adicione um quarto ![image680.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image680.jpg) e utilize a função: Alterar Valor do componente.

![image935.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image935.gif)

6. Salve o fluxo com destino Servidor.
7. Associe o fluxo ao botão do formulário Formulário Imagem e execute-o no Webrun.

![image1106.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1106.jpg)

Alterando o valor do componente imagem sem vínculo com o banco - Esta vídeoaula demonstra que é possível alterar o valor de um componente Imagem, se não estiver vinculada com o banco.
