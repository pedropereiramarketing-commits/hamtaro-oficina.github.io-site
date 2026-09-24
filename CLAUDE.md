# CLAUDE.md — Site Hamtaro Serviços Automotivos

Contexto fixo para qualquer trabalho futuro neste projeto. Leia antes de editar
conteúdo, texto ou dados da empresa.

## Dados oficiais da empresa

- **Nome:** Hamtaro Serviços Automotivos
- **Endereço:** R. Ari Barroso, 57 - Areias, São José - SC, 88113-820
- **Google Maps (link oficial):** https://maps.app.goo.gl/qQZsgSxn2kireDnA8
  (coordenadas resolvidas: -27.5516669, -48.6290672 — usadas no mapa incorporado
  sem chave de API em `CONTACT.mapsEmbedSrc`, `js/config.js`)
- **WhatsApp / telefone:** (48) 98864-5345
- **E-mail:** hamtarooficina@gmail.com
- **Instagram:** @hamtarooficina — https://www.instagram.com/hamtarooficina/
- **Horário:** segunda a sexta, 8h–12h e 13h30–18h. Sábado e domingo: fechado.

Toda essa informação vive em `CONTACT` e `BUSINESS_HOURS`, no topo de
`js/config.js`. É o único lugar que deveria ser editado quando algum desses
dados mudar — o resto do site lê a partir daí.

## Serviços que a Hamtaro NÃO oferece

Removidos do site em 2026-09: **Sistema elétrico** e **Injeção eletrônica**
(não são serviços prestados pela oficina). Não reintroduzir esses cards em
`SERVICES` (`js/config.js`) sem confirmação explícita.

"Diagnóstico eletrônico" (scanner automotivo) **é** um serviço oferecido e
deve permanecer — não confundir os dois.

Serviços relacionados que apareceram associados ao item removido (bateria,
alternador, arranque) não são oferecidos como itens próprios hoje. Só
adicionar de volta se a oficina confirmar que passou a prestar esse serviço.

## Regra de ouro: nunca inventar depoimentos

`TESTIMONIALS` (`js/config.js`) só recebe avaliações **reais** de clientes,
copiadas de uma fonte verificável (Google, WhatsApp, etc.). Nunca gerar nomes,
notas ou textos fictícios — nem como placeholder, nem como exemplo "temporário".

Quando `TESTIMONIALS` está vazio, a seção "Depoimentos" e o link
correspondente no menu ficam **ocultos automaticamente** (não aparece nenhum
estado "em breve"). Isso é intencional — não altere essa lógica sem motivo.

## Galeria

As fotos em `assets/gallery/` são reais, tiradas na oficina. Cada foto tem 3
tamanhos (480/960/1600px) em WebP + JPEG, gerados uma vez a partir dos
arquivos originais em alta resolução. Para adicionar uma foto nova, gerar o
mesmo conjunto de 6 arquivos (ver README.md) — nunca usar fotos de banco de
imagens ou genéricas.

## Ilustração do carro (Hero)

O contorno do carro no painel "SCANNER OK" (`index.html`, seção Hero) é
derivado do ícone `car` da [Tabler Icons](https://tabler.io/icons), licença
MIT (Copyright (c) 2020-2026 Paweł Kuna). As coordenadas foram reescaladas
para o viewBox do painel — mesma forma, sem alterações de desenho. A fonte e
a licença estão documentadas em comentário direto no `index.html`.

## Histórico de ajustes relevantes

- 2026-09: remoção de serviços não oferecidos, correção de sobreposição no
  card da seção Sobre em telas estreitas, substituição da ilustração do
  carro, galeria com fotos reais, depoimentos condicionais, endereço/horário
  completos e mapa incorporado. Ver commits na branch `ajustes-site-hamtaro`
  para o detalhe de cada mudança.
