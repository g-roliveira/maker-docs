---
title: "Executar Linha De Comando Numa Pasta"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Servidor

## Descrição

Executa uma linha de comando no "SHELL" do SERVIDOR.

## Parâmetro(s)

1. Comando a ser executado e seus argumentos. (Variante)
2. Lista contendo variáveis de ambiente a serem utilizadas para executar o comando. (Variante)
3. Pasta onde será executado o comando ou Nulo para executar no diretório corrente. (Letras)
4. Continuar após terminar o comando? (Lógico)

## Retorno

Resultado do comando executado. (Letras)

## Observações

1. Se o 4° parâmetro estiver verdadeiro, o fluxo só vai continuar após terminar a execução do comando.
2. O comando é executado somente no servidor.
3. Uma vez definido o 4° parâmetro como "Verdadeiro", o resultado do comando será retornado. Caso contrário, retornará Nulo.
4. O diretório corrente é em relação ao servidor de aplicações.

## Exemplo

Assumindo que o comando do 1° parâmetro seja: dir&gt; nome.txt, 2° parâmetro nulo, 3° parâmetro o caminho da pasta, e o 4° parâmetro
"true". o resultado, será a criação do arquivo "nome.txt" com os diretórios do mesmo.
