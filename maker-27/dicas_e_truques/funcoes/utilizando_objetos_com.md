---
title: "Utilizando objetos COM"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/dicas_e_truques/funcoes/utilizando_objetos_com.htm"
---

Objetos COM são usados para fazer uma chamada diretamente com o usuário SYSTEM através do CLSID do programa. A API do Maker possui funções específicas para uso destes objetos. O primeiro passo para utilizar estas funções é encontrar o CLSID do programa, este CLSID pode ser obtido através do registro do Windows.

Neste exemplo utilizaremos o aplicativo Excel, o qual irá criar um arquivo e adicionará uma planilha ao mesmo. Para seguir essa linha de raciocínio, siga os passos abaixo:

Para um melhor entendimento o fluxo ficará da seguinte forma:

![image1914.gif](../../image1914.gif)

1. No 1º processamento deverá ser utilizada a função Criar Objeto COM a qual tem como parâmetro o CLSID do programa. Esta função retornará a referência do objeto Excel que será utilizada para executar os métodos.

![image1755.jpg](../../image1755.jpg)

2. No 2º processamento defina a propriedade visible do objeto utilizando a função Definir propriedade de um objeto COM.

Observação: Quem está executando os métodos é o usuário do servidor de aplicações (geralmente usuário SYSTEM, portanto o aplicativo não fica visível e sim em background).

![image1756.jpg](../../image1756.jpg)

3. No 3º processamento obtenha a propriedade Workbooks utilizando a função Obter propriedade de um objeto COM.

O objeto Workbook representa uma pasta de trabalho do Microsoft Excel. O objeto Workbook é um membro da coleção Workbooks, esta coleção contém todos os objetos Workbook atualmente abertos no Microsoft Excel.

![image1757.jpg](../../image1757.jpg)

4. O próximo passo é obter a propriedade add do Workbooks a qual retorna uma variável do tipo variante. Armazene a referência na variável xlbook.

O xlbook é a referência do arquivo em uso.

![image1758.jpg](../../image1758.jpg)

5. O próximo passo é obter a propriedade do xlbook chamada worksheet.

O objeto Worksheet representa uma planilha, este objeto é um membro da coleção Worksheets. A coleção Worksheets contém todos os objetos Worksheet em uma pasta de trabalho.

![image1759.jpg](../../image1759.jpg)

6. Utilize a função Executar Método de um objeto COM para adicionar uma planilha ao documento.

![image1760.jpg](../../image1760.jpg)

7. Salve o documento e passe como parâmetros a referência do arquivo em execução, o nome do método SaveAs e uma lista contendo o nome do arquivo com sua extensão.

![image1761.jpg](../../image1761.jpg)

Por padrão o documento é salvo em:

\WINDOWS\system32\config\systemprofile\Meus documentos\

8. Feche o arquivo.

![image1762.jpg](../../image1762.jpg)

9. Finalize o Excel.

![image1763.jpg](../../image1763.jpg)

10. Para finalizar, destrua a referência do objeto COM criado.

![image1764.jpg](../../image1764.jpg)

11. Salve o fluxo e associe-o a um botão, que ao executado criará um arquivo Excel com 4 planilhas.
