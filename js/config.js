/* ============================================================
   HAMTARO SERVIÇOS AUTOMOTIVOS — config.js
   ------------------------------------------------------------
   ESTE É O ARQUIVO MAIS IMPORTANTE PARA EDITAR O SITE.
   Troque telefone, e-mail, endereço, serviços, horários, FAQ,
   fotos e depoimentos aqui. O resto do site lê estas
   informações automaticamente — não é preciso mexer no HTML.
   ============================================================ */

// -----------------------------------------------------------
// 1. CONTATO — troque aqui e o site inteiro é atualizado
// -----------------------------------------------------------
export const CONTACT = {
  brand: "Hamtaro Serviços Automotivos",
  brandShort: "Hamtaro",

  // Apenas números, com DDI 55 + DDD 48. Usado nos links de WhatsApp.
  whatsappNumber: "5548988645345",
  // Como o número aparece escrito no site.
  phoneDisplay: "(48) 98864-5345",

  email: "hamtarooficina@gmail.com",

  // Versão curta, usada em menções casuais (badge do Hero, texto do Sobre).
  regionShort: "Região de Areias",
  regionFull: "Região de Areias — São José/SC",
  city: "São José",
  state: "SC",

  // Endereço completo — usado em Localização, Contato, rodapé e dados
  // estruturados (JSON-LD) para SEO local.
  street: "R. Ari Barroso, 57",
  neighborhood: "Areias",
  postalCode: "88113-820",
  fullAddress: "R. Ari Barroso, 57 - Areias, São José - SC, 88113-820",

  // Link oficial de "Como chegar" (Google Business).
  mapsUrl: "https://maps.app.goo.gl/qQZsgSxn2kireDnA8",

  // Mapa incorporado sem chave de API, usando as coordenadas exatas da ficha
  // do Google Business (resolvidas a partir do link oficial acima).
  mapsEmbedSrc: "https://www.google.com/maps?q=-27.5516669,-48.6290672&z=17&output=embed",

  // ⚠️ EDITAR: link de avaliações do Google (Perfil da Empresa > Peça avaliações > copiar link curto).
  googleReviewsUrl: "",

  // Deixe em branco para ocultar o ícone no rodapé.
  instagramUrl: "https://www.instagram.com/hamtarooficina/",
  facebookUrl: "",
};

// Mensagem padrão enviada ao WhatsApp a partir dos botões gerais do site.
export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Encontrei a Hamtaro Serviços Automotivos pelo site e gostaria de solicitar um orçamento.";

// Monta o link do WhatsApp com uma mensagem pré-preenchida.
export function buildWhatsAppLink(message = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// -----------------------------------------------------------
// 2. HORÁRIO DE FUNCIONAMENTO
// -----------------------------------------------------------
// "editable: true" mostra um aviso visual de que o dado precisa de confirmação.
export const BUSINESS_HOURS = [
  { day: "Segunda a sexta", time: "8h às 18h (pausa de 12h às 13h30)" },
  { day: "Sábado", time: "Fechado" },
  { day: "Domingo", time: "Fechado" },
];

// -----------------------------------------------------------
// 3. MENU DE NAVEGAÇÃO
// -----------------------------------------------------------
// "requiresTestimonials: true" só aparece no menu quando TESTIMONIALS
// (mais abaixo neste arquivo) tiver pelo menos 1 depoimento real.
export const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Galeria", href: "#galeria" },
  { label: "Depoimentos", href: "#depoimentos", requiresTestimonials: true },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

// -----------------------------------------------------------
// 4. SERVIÇOS
// -----------------------------------------------------------
// "icon" precisa bater com uma das chaves do objeto ICONS em js/icons.js.
// Para adicionar um serviço nnovo, copie um bloco, troque o texto e escolha um ícone existente.
export const SERVICES = [
  {
    icon: "checklist",
    title: "Revisão automotiva",
    desc: "Revisão completa do veículo, verificando os principais sistemas para garantir segurança e desempenho.",
  },
  {
    icon: "oil",
    title: "Troca de óleo",
    desc: "Troca de óleo e filtros com peças originais, seguindo a periodicidade recomendada pelo fabricante.",
  },
  {
    icon: "brake",
    title: "Freios",
    desc: "Serviço completo de freios — pastilhas, discos e fluido — com peças originais e garantia de 3 meses.",
  },
  {
    icon: "suspension",
    title: "Suspensão",
    desc: "Reparo de suspensão e direção para mais conforto e segurança ao dirigir, com diagnóstico detalhado.",
  },
  {
    icon: "engine",
    title: "Motor",
    desc: "Diagnóstico e reparo de motor, identificando a causa do problema com equipamento de scanner automotivo.",
  },
  {
    icon: "coolant",
    title: "Sistema de arrefecimento",
    desc: "Manutenção do sistema de arrefecimento e identificação de vazamentos, evitando o superaquecimento do motor.",
  },
  {
    icon: "scanner",
    title: "Diagnóstico automotivo",
    desc: "Diagnóstico eletrônico computadorizado (scanner) para identificar com precisão as necessidades do veículo.",
  },
  {
    icon: "wrench",
    title: "Manutenção preventiva",
    desc: "Manutenção preventiva e corretiva completa para veículos de todas as marcas e modelos.",
  },
];

// -----------------------------------------------------------
// 5. DIFERENCIAIS
// -----------------------------------------------------------
export const DIFFERENTIALS = [
  {
    icon: "scanner",
    title: "Diagnóstico computadorizado",
    desc: "Usamos scanner automotivo para identificar com precisão o que o seu veículo realmente precisa.",
  },
  {
    icon: "shield",
    title: "Peças originais e garantia",
    desc: "Trabalhamos com peças originais e oferecemos 3 meses de garantia nos serviços realizados.",
  },
  {
    icon: "lift",
    title: "Estrutura própria",
    desc: "Dois elevadores em box organizado, pensados para dar agilidade e cuidado no seu atendimento.",
  },
  {
    icon: "chat",
    title: "Comunicação transparente",
    desc: "Você acompanha o diagnóstico e aprova o orçamento antes de qualquer serviço ser iniciado.",
  },
  {
    icon: "coffee",
    title: "Ambiente para aguardar",
    desc: "Espaço de espera confortável, com cafeteria e banheiro à disposição durante o atendimento.",
  },
  {
    icon: "card",
    title: "Formas de pagamento",
    desc: "Aceitamos PIX, dinheiro, cartão de débito e crédito parcelado — você escolhe a melhor opção.",
  },
];

// -----------------------------------------------------------
// 6. COMO FUNCIONA
// -----------------------------------------------------------
export const HOW_IT_WORKS = [
  { title: "Entre em contato", desc: "Fale com a gente pelo WhatsApp ou pelo formulário do site." },
  { title: "Solicite seu orçamento", desc: "Conte o que o veículo está apresentando para prepararmos o atendimento." },
  { title: "Leve o veículo até a Hamtaro", desc: "Combine o melhor horário e traga o carro até a nossa oficina." },
  { title: "Avaliação e diagnóstico", desc: "Fazemos a inspeção e o diagnóstico eletrônico antes de qualquer serviço." },
  { title: "Execução do serviço", desc: "Com o orçamento aprovado por você, realizamos o serviço combinado." },
  { title: "Entrega do veículo", desc: "Você retira o veículo com o serviço concluído e as explicações do que foi feito." },
];

// -----------------------------------------------------------
// 7. GALERIA
// -----------------------------------------------------------
// Cada foto vem em 3 tamanhos (480/960/1600px) e 2 formatos (webp/jpg),
// gerados a partir do arquivo original e salvos em /assets/gallery/ com o
// padrão "{base}-{largura}.{formato}". Para trocar ou adicionar uma foto,
// gere os mesmos 6 arquivos (ver README) e aponte "base" para o nome comum.
// "pos" é o object-position usado no recorte quadrado do card (ajuste se o
// assunto principal da foto ficar cortado).
export const GALLERY = [
  {
    base: "assets/gallery/hamtaro-fachada",
    label: "Fachada da Hamtaro Serviços Automotivos, com placa de identificação",
    tag: "Fachada",
    pos: "50% 56%",
  },
  {
    base: "assets/gallery/hamtaro-elevador-veiculo",
    label: "Elevador automotivo com veículo em atendimento no box da oficina",
    tag: "Estrutura",
    pos: "50% 62%",
  },
  {
    base: "assets/gallery/hamtaro-box-atendimento",
    label: "Vista interna do box de atendimento, com portão aberto para a rua",
    tag: "Estrutura",
    pos: "50% 55%",
  },
  {
    base: "assets/gallery/hamtaro-organizacao-ferramentas",
    label: "Prateleiras organizadas com produtos e parede de ferramentas",
    tag: "Organização",
    pos: "50% 58%",
  },
  {
    base: "assets/gallery/hamtaro-entrada",
    label: "Entrada da oficina vista da rua",
    tag: "Fachada",
    pos: "50% 68%",
  },
];

// -----------------------------------------------------------
// 8. DEPOIMENTOS
// -----------------------------------------------------------
// Adicione objetos aqui somente com avaliações reais de clientes.
// Formato: { name: "Nome do cliente", text: "Texto da avaliação", rating: 5 }
// Enquanto a lista estiver vazia, o site mostra um espaço preparado
// para receber as primeiras avaliações.
export const TESTIMONIALS = [];

// -----------------------------------------------------------
// 9. PERGUNTAS FREQUENTES
// -----------------------------------------------------------
// "editable: true" adiciona um aviso de que a resposta pode precisar de ajuste.
export const FAQ = [
  {
    q: "Como solicitar um orçamento?",
    a: "É simples: preencha o formulário de orçamento na seção de contato deste site ou fale diretamente com a gente pelo WhatsApp (48) 98864-5345. Respondemos com as informações necessárias para preparar seu atendimento.",
  },
  {
    q: "Preciso agendar antes de levar o veículo?",
    a: "Recomendamos entrar em contato antes pelo WhatsApp para confirmar o melhor horário e evitar espera.",
    editable: true,
  },
  {
    q: "Quais veículos vocês atendem?",
    a: "Atendemos veículos de todas as marcas e modelos.",
  },
  {
    q: "Como funciona o diagnóstico?",
    a: "Utilizamos equipamento de diagnóstico eletrônico (scanner automotivo) para identificar com precisão o que o veículo precisa antes de qualquer serviço ser iniciado.",
  },
  {
    q: "Quanto tempo demora um serviço?",
    a: "O prazo varia de acordo com o serviço e a disponibilidade de peças. Após a avaliação, informamos um prazo estimado antes de iniciar o trabalho.",
    editable: true,
  },
  {
    q: "Vocês oferecem garantia nos serviços?",
    a: "Sim, oferecemos 3 meses de garantia nos serviços realizados.",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "Aceitamos PIX, dinheiro, cartão de débito e cartão de crédito com parcelamento.",
  },
  {
    q: "Onde fica a Hamtaro?",
    a: "Estamos na R. Ari Barroso, 57 - Areias, São José/SC, CEP 88113-820. Veja o mapa e o botão \"Como chegar\" na seção de localização deste site.",
  },
  {
    q: "Como posso entrar em contato?",
    a: "Pelo WhatsApp (48) 98864-5345 ou pelo e-mail hamtarooficina@gmail.com. Os dois estão sempre visíveis no topo e no rodapé do site.",
  },
];

// -----------------------------------------------------------
// 10. SEO / METADADOS
// -----------------------------------------------------------
export const SEO = {
  siteUrl: "https://hamtaro-servicos-automotivos.pages.dev", // ⚠️ EDITAR após publicar (ver README)
  title: "Hamtaro Serviços Automotivos | Oficina Mecânica em São José/SC",
  description:
    "Oficina mecânica na região de Areias, São José/SC. Diagnóstico eletrônico, peças originais e garantia de 3 meses. Solicite seu orçamento pelo WhatsApp.",
};
