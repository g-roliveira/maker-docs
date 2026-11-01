---
title: "Novas implementações de Segurança para Aplicações Maker"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/novidades/ajustesseguranca.html"
---

# Melhorias de Segurança para Aplicações Maker

A partir da versão 3.9.2.34, novas melhorias de segurança serão aplicadas para as aplicações Maker.

Verificamos que muitos clientes não deixam ativo por padrão o parâmetro ["VersaoSeguranca"](http://suporte.softwell.com.br/maker/manual_3/pt/dicas_e_truques/webrun/como_aumentar_a_seguranca_de_sua_aplicacao.htm), existente desde a versão 2.7, e com isso, poderão representar falhas de segurança na aplicação.

Para aumentar a segurança das aplicações desenvolvidas com o Maker, as seguintes restrições serão aplicadas:

- Fluxos somente serão executados (quando o usuário não estiver autenticado) caso estejam marcados como ["Acesso Externo"](../maker_3/paleta_objetos#externo);
- Fluxos somente serão executados (quando o usuário não estiver autenticado) caso estejam associado diretamente ao formulário (através dos eventos)

As regras citadas acima serão aplicadas quando o projeto não estiver em modo de desenvolvimento (não é compilado com JAR/WAR).

RECOMENDADO PUBLICAR WAR/JAR quando for utilizar em homologação ou produção!

Os fluxos dos Templates (Mac, PortalLight, Office, entre outros) deverão ter os fluxos do Recaptcha marcados como externos.

- Cabe lembrar que estas restrições se aplicam apenas aos fluxos da camada servidor.

É importante observar também para detalhes simples de segurança tais como:

Senhas padrão (sistema)

Usuário: master
Senha: 1

Painel de Admin Webrun

Usuário: admin
Senha: webrun

Acesso ao AutoTest:

Usuário: admin
Senha: z102030
