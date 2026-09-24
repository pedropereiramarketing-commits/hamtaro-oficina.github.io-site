# Site — Hamtaro Serviços Automotivos

Site institucional de uma página (one-page), responsivo, rápido e orientado para gerar
contatos e orçamentos pelo WhatsApp. Feito em **HTML + CSS + JavaScript puro** — sem
framework, sem build, sem instalação. Basta abrir o `index.html` ou publicar a pasta
inteira em qualquer hospedagem estática gratuita.

---

## 1. Estrutura de arquivos

```
SITE HAMTARO/
├── index.html              ← Estrutura de todas as seções do site
├── robots.txt               ← Indexação para o Google
├── sitemap.xml               ← Mapa do site para o Google
├── css/
│   ├── base.css              ← CORES, FONTES e variáveis de marca (edite aqui as cores)
│   └── styles.css            ← Estilo visual de cada seção/componente
├── js/
│   ├── config.js              ← ⭐ ARQUIVO PRINCIPAL PARA EDITAR: telefone, e-mail,
│   │                             endereço, serviços, horários, FAQ, galeria, depoimentos
│   ├── icons.js               ← Conjunto de ícones SVG próprios (linha, sem biblioteca externa)
│   └── app.js                 ← Interatividade (menu, formulário, galeria, FAQ, animações)
└── assets/
    ├── fonts/                 ← Fonte oficial Cabinet Grotesk (auto-hospedada)
    ├── gallery/                ← (crie esta pasta) fotos reais da oficina entram aqui
    └── logo/                   ← Logos, favicon e imagem de compartilhamento (Open Graph)
```

**Por que não usei React/Vite ou outro framework?** Uma oficina não precisa de build
step: sem framework, o site abre direto no navegador, publica em qualquer lugar
gratuito sem configuração, carrega mais rápido e é mais fácil de manter no longo
prazo. Toda a informação editável está centralizada em **`js/config.js`** — o
restante do site lê esses dados automaticamente.

---

## 2. O que editar (e onde)

| O que mudar | Arquivo | O que fazer |
|---|---|---|
| WhatsApp, e-mail, região | `js/config.js` → `CONTACT` | Troque os valores entre aspas |
| Horário de funcionamento | `js/config.js` → `BUSINESS_HOURS` | Edite o sábado assim que confirmado |
| Serviços (adicionar/remover) | `js/config.js` → `SERVICES` | Copie um bloco `{ icon, title, desc }` e edite |
| Diferenciais | `js/config.js` → `DIFFERENTIALS` | Mesma lógica dos serviços |
| Perguntas frequentes | `js/config.js` → `FAQ` | Edite pergunta/resposta; remova `editable: true` quando confirmar |
| Fotos da galeria | `js/config.js` → `GALLERY` + pasta `assets/gallery/` | Veja o passo a passo abaixo |
| Depoimentos | `js/config.js` → `TESTIMONIALS` | Só adicione avaliações reais (veja abaixo) |
| Instagram / Facebook | `js/config.js` → `CONTACT.instagramUrl` | Cole o link; o ícone aparece sozinho no rodapé |
| Endereço completo + mapa | `js/config.js` → `CONTACT.mapsEmbedSrc` | Veja "Endereço e mapa" abaixo |
| Cores da marca | `css/base.css` (topo do arquivo) | Troque o valor hexadecimal da variável |
| Logo | `assets/logo/` + `index.html` | Substitua o arquivo mantendo o mesmo nome |

Você **não precisa mexer no HTML** para atualizar telefone, serviços, FAQ, galeria ou
depoimentos — tudo isso é lido automaticamente de `js/config.js`.

### Adicionar uma foto real na galeria
1. Crie a pasta `assets/gallery/` (se ainda não existir) e coloque a foto lá, por
   exemplo `assets/gallery/oficina-01.jpg`.
2. Abra `js/config.js`, encontre `GALLERY` e preencha o campo `src` do item
   correspondente: `src: "assets/gallery/oficina-01.jpg"`.
3. Pronto — o quadro de "placeholder" vira a foto real automaticamente, com efeito de
   ampliação ao clicar.

### Adicionar um depoimento real
Nunca invente avaliações. Quando tiver uma avaliação real (ex.: copiada do Google),
adicione em `TESTIMONIALS` no `js/config.js`:
```js
export const TESTIMONIALS = [
  { name: "Nome do cliente", text: "Texto da avaliação.", rating: 5 },
];
```
Enquanto a lista estiver vazia, o site mostra automaticamente um aviso elegante de
"em breve" — nunca um espaço quebrado ou depoimento falso.

### Endereço completo e mapa
Como o endereço completo (rua e número) ainda não foi definido, o site usa por
enquanto uma busca no Google Maps pelo nome da oficina + região (o botão **"Como
chegar"** já funciona hoje). Quando o endereço definitivo estiver no Google
Business:
1. Abra o local no Google Maps → **Compartilhar** → **Incorporar um mapa** → copie
   o link que aparece dentro de `src="..."`.
2. Cole esse link em `CONTACT.mapsEmbedSrc`, no `js/config.js`.
3. O mapa incorporado substitui automaticamente o cartão ilustrado da seção
   "Localização".

---

## 3. Pontos que ainda faltam confirmar (⚠️)

Endereço completo, horário de sábado, mapa incorporado, Instagram e fotos reais
já foram preenchidos. O que ainda está em aberto, com aviso visual no próprio
site (badge laranja "confirmar"):

- **Se é necessário agendamento ou atendimento por ordem de chegada** — `js/config.js` → `FAQ`
- **Prazo médio de um serviço** — `js/config.js` → `FAQ`
- **Link de avaliações do Google** — `js/config.js` → `CONTACT.googleReviewsUrl`
- **Facebook** (se houver) — `js/config.js` → `CONTACT.facebookUrl`
- **Depoimentos reais de clientes** — a seção fica oculta automaticamente até o
  primeiro depoimento ser adicionado em `TESTIMONIALS` (ver seção 2 acima)

Depois de preencher, procure por `editable: true` e pelo texto `⚠️ EDITAR` dentro de
`js/config.js` e remova as marcações que não forem mais necessárias. Veja também
o `CLAUDE.md` na raiz do projeto para os dados oficiais e regras fixas da empresa.

---

## 4. Publicando o projeto no GitHub (passo a passo)

O GitHub é o lugar onde o código do site fica guardado e de onde a hospedagem
gratuita (próximo passo) vai publicar o site. Não é necessário saber programar.

### 4.1. Criar uma conta no GitHub
1. Acesse **github.com** e clique em **Sign up**.
2. Cadastre-se com o e-mail `hamtarooficina@gmail.com` (ou outro de sua preferência),
   escolha um nome de usuário e uma senha.
3. Confirme o e-mail que o GitHub enviar.

### 4.2. Criar o repositório (onde o site vai morar)
1. Já logado, clique no **+** no canto superior direito → **New repository**.
2. **Repository name**: `hamtaro-site` (pode ser outro nome, sem espaços).
3. Deixe como **Public**.
4. **Não** marque "Add a README file" (já temos um).
5. Clique em **Create repository**.

### 4.3. Enviar os arquivos do site (upload pela interface, sem usar comandos)
1. Na página do repositório recém-criado, clique no link **uploading an existing
   file** (ou vá em **Add file → Upload files**).
2. Abra a pasta `SITE HAMTARO` no seu computador e **arraste todos os arquivos e
   pastas** (`index.html`, `robots.txt`, `sitemap.xml`, `css/`, `js/`, `assets/`,
   este `README.md`) para dentro da área de upload do GitHub.
3. Role até o final da página, escreva uma mensagem como `Primeira versão do site`
   no campo de commit, e clique em **Commit changes**.
4. Aguarde o upload terminar — para verificar, clique em **Code** e confira se as
   pastas `css`, `js` e `assets` aparecem na listagem.

> 💡 Alternativa para quem já usa Git no computador: `git init`, `git add .`,
> `git commit -m "Primeira versão do site"`, `git branch -M main`,
> `git remote add origin <URL do repositório>`, `git push -u origin main`.

---

## 5. Colocando o site no ar de graça (GitHub Pages)

Pesquisei as opções gratuitas atuais (GitHub Pages, Cloudflare Pages, Netlify,
Vercel). Todas oferecem HTTPS automático e são gratuitas. Como este site **não tem
build step** (não precisa "compilar" nada), o **GitHub Pages** é a opção mais simples:
publica direto do repositório que você acabou de criar, sem precisar de mais uma
conta em outro serviço.

### 5.1. Ativar o GitHub Pages
1. No repositório, clique em **Settings** (aba no topo).
2. No menu à esquerda, clique em **Pages**.
3. Em **Source**, selecione **Deploy from a branch**.
4. Em **Branch**, selecione **main** e a pasta **/ (root)** → clique em **Save**.
5. Aguarde 1–2 minutos. Atualize a página: vai aparecer uma faixa verde com o link do
   site, algo como:
   `https://SEU-USUARIO.github.io/hamtaro-site/`
6. Abra esse link — o site já está no ar, gratuitamente, com HTTPS.

### 5.2. Ajustar os links do site para o endereço definitivo
Depois de publicar, atualize estes três lugares com o link real do passo anterior
(substitua `hamtaro-servicos-automotivos.pages.dev` pelo endereço do GitHub Pages, ou
pelo seu domínio próprio quando tiver um):
- `index.html`: `<link rel="canonical" ...>` e as tags `og:image` / `twitter:image`
- `js/config.js`: `SEO.siteUrl`
- `robots.txt` e `sitemap.xml`: a linha com a URL

Isso garante que o preview do link (WhatsApp, Instagram, Google) mostre a imagem e o
título corretos.

### Alternativas gratuitas (caso prefira)
| Plataforma | Quando escolher |
|---|---|
| **GitHub Pages** (usado acima) | Mais simples: publica do mesmo repositório, sem outra conta. |
| **Cloudflare Pages** | Deploy contínuo a cada alteração no GitHub, painel um pouco mais completo, mesma gratuidade. |
| **Netlify** | Também permite arrastar a pasta do site direto no navegador (sem GitHub), ótimo se quiser publicar antes de aprender Git. |
| **Vercel** | Boa opção também, fluxo parecido com o Netlify/Cloudflare Pages. |

Todas suportam domínio próprio e HTTPS grátis — a diferença é só o fluxo de
publicação. Para este projeto, GitHub Pages já resolve tudo com uma conta só.

---

## 6. Domínio próprio vs. endereço gratuito

- **Endereço gratuito** (ex.: `seu-usuario.github.io/hamtaro-site`): grátis para
  sempre, HTTPS incluso, funciona imediatamente — é o que você acabou de configurar.
- **Domínio próprio** (ex.: `www.hamtaro.com.br`): precisa ser comprado (em torno de
  R$ 40–70/ano em registradores como Registro.br, para domínios `.com.br`) e depois
  **apontado** para o GitHub Pages.

Comece com o endereço gratuito — é exatamente para isso que ele serve. Quando quiser
um domínio próprio:
1. Compre o domínio em um registrador (ex.: registro.br, GoDaddy, Namecheap).
2. No repositório do GitHub, vá em **Settings → Pages → Custom domain** e digite o
   domínio (ex.: `www.hamtarooficina.com.br`).
3. No painel do registrador, crie os registros de DNS que o próprio GitHub Pages
   indicar (normalmente um registro `CNAME` apontando para
   `SEU-USUARIO.github.io`).
4. Aguarde a propagação do DNS (de minutos a algumas horas) e marque **Enforce
   HTTPS** nas configurações do Pages assim que o domínio for reconhecido.

---

## 7. Como atualizar o site depois de publicado

Sempre que quiser mudar um texto, serviço, foto ou cor:
1. Edite o arquivo correspondente na sua cópia local do projeto (veja a seção 2).
2. No GitHub, abra o repositório → **Add file → Upload files** → arraste o(s)
   arquivo(s) alterado(s) → **Commit changes**.
   (Ou, se preferir editar direto no navegador: abra o arquivo no GitHub, clique no
   ícone de lápis, altere e clique em **Commit changes**.)
3. O GitHub Pages publica a nova versão automaticamente em 1–2 minutos — não é
   preciso repetir a configuração da seção 5.

---

## 8. Checklist final antes de divulgar

- [ ] Testei o menu no celular, tablet e computador
- [ ] Todos os botões abrem o WhatsApp com a mensagem correta
- [ ] O e-mail abre o programa de e-mail corretamente
- [ ] Testei o formulário de orçamento até o WhatsApp abrir
- [ ] Preenchi (ou removi) o link de avaliações do Google
- [ ] Adicionei os primeiros depoimentos reais (quando existirem)
- [ ] Atualizei a URL definitiva em `index.html`, `js/config.js`, `robots.txt` e `sitemap.xml`
- [ ] Testei o site publicado (link do GitHub Pages) no celular de verdade
- [ ] Testei o botão "Como chegar" e confirmei que abre no Google Maps corretamente
- [ ] Revisei a ortografia de todos os textos

---

Qualquer ajuste futuro de conteúdo passa por `js/config.js` — é o único arquivo que
precisa ser revisitado com frequência.
