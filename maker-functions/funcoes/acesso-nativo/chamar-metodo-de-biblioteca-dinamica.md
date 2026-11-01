---
title: "Chamar Método de Biblioteca Dinâmica"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=34"
---

**Categoria:** [Acesso Nativo](../../categorias/acesso-nativo)

**Compatibilidade:** Servidor

## Descrição

Chama um método de uma biblioteca dinâmica.

## Parâmetro(s)

1. Nome da Biblioteca. (Letras)
2. Função. (Letras)
3. Parâmetros para a função. (Variante)
4. Tipo do retorno. (Variante)

## Retorno

Retorna o resultado da chamada. (Variante)

## Observações

1. Os parâmetros são passados como uma lista, sendo que cada elemento da lista é uma lista, representando cada parâmetro da função da biblioteca.
2. A lista interna é composta de 2 elementos, o valor e o tipo (String) do parâmetro.
3. Só podem ser utilizados tipos primitivos.
4. Tipos suportados para o valor de retorno e os parâmetros:
char
short
wchar
bool
int
long
long64
float
double
char *
void *
BYTE
TCHAR
WORD
DWORD
LPCSTR
HANDLE
LPVOID

## Exemplo

1. Chamando a DLL de validação de inscrição estadual:
Parâmetro 1 (Letras): "C:\TEMP\DLL 3\DllInscE32.dll"
Parâmetro 2 (Letras): "ConsisteInscricaoEstadual"
Parâmetro 3 (Variante): Lista [["255188404", "char*"],["BA", "char*"]]
Parâmetro 4 (Letras): "int"
O exemplo retornará 1, o que indica uma inscrição estadual inválida.
