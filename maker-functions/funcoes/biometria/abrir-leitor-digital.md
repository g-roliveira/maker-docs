---
title: "Abrir Leitor Digital"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=25"
---

**Categoria:** [Biometria](../../categorias/biometria)

**Compatibilidade:** Cliente

## Descrição

Essa função ativa o aparelho de leitura/captura de uma digital.

Parâmetro:
1. Nome do Fluxo. (Letras)

## Retorno

Não possui.

## Observações

1. O fluxo que for passado por parâmetro, deve possuir um parâmetro de entrada do tipo inteiro, e deve estar
associado a um outro fluxo que tenha como parâmetro de entrada do tipo Letras.
2. Se a propriedade impressão digital do componente imagem estiver selecionado, a função "Abrir Leitor Digital" é executada automaticamente.
3. Insira um componente imagem no formulário, configure as propriedades da imagem, selecionando a propriedade 'campo' de tipo byte e a propriedade 'impressão digital' um campo do tipo inteiro.
4. Para utilizar essa função é necessário instalar o Servidor de Digitais e o Driver do Dispositivo. O Servidor de Digitais se encontra no DVD de instalação e pode também ser obtido com a Softwell Solutions. O Driver de Dispositivo deve ser obtido junto com o seu fabricante (http://www.fingertech.com.br/downloads/drivers)
5. Apenas será identificado o usuário que esteja cadastrado no Servidor de Digitais.
Este servidor deve estar na mesma máquina onde se encontra o banco de dados da aplicação.
6. Quando o retorno é igual a -2, sabe-se que o Servidor de Digitais não foi encontrado.
Quando o retorno é igual a -1, sabe-se que o usuário não está cadastrado no Servidor de Digitais.
Caso contrário, será retornado o inteiro equivalente à impressão digital.
7. Configure corretamente seu aparelho de leitor de digitais, verificando se o mesmo foi instalado corretamente.
