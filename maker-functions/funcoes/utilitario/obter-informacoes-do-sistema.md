---
title: "Obter Informações do Sistema"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Servidor

## Descrição

Esta função obtém informações do sistema e da JVM (Java Virtual Machine).

Parâmetro:
Não possui.

## Retorno

Mapa com as informações. (Variante)

## Observação

As chaves do mapa retornado são:
- tMemory = Total de memória atual.
- fMemory = Total de memória livre.
- PercUsageMemory = Percentual de memória em uso.
- CPUUsage = Percentual de CPU em uso.
- JVMUsage = Memória em uso JVM.
- JVMTotal = Memória total JVM.
- JVMVersion = Versão da JVM.
- OSName = Sistema Operacional.
- OSVersion = Versão do Sistema Operacional.
- HostName = Nome do Host.
- IPAddress = IP do Host.
