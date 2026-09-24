/* ============================================================
   HAMTARO — app.js
   Toda a interatividade do site e a renderização das seções
   que vêm de js/config.js (serviços, diferenciais, FAQ, etc).
   Sem frameworks e sem build: só é preciso abrir o index.html
   (ou publicar os arquivos) para tudo funcionar.
   ============================================================ */

import {
  CONTACT,
  WHATSAPP_DEFAULT_MESSAGE,
  buildWhatsAppLink,
  BUSINESS_HOURS,
  NAV_LINKS,
  SERVICES,
  DIFFERENTIALS,
  HOW_IT_WORKS,
  GALLERY,
  TESTIMONIALS,
  FAQ,
} from "./config.js";
import { icon } from "./icons.js";

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

/* ------------------------------------------------------------
   1. Links de contato (WhatsApp / telefone / e-mail)
   ------------------------------------------------------------ */
function setupContactLinks() {
  const defaultLink = buildWhatsAppLink();

  $("#location-address").textContent = CONTACT.fullAddress;
  $("#contact-address").textContent = CONTACT.fullAddress;

  $("#header .header__phone").innerHTML =
    icon("phone") + `<span>${CONTACT.phoneDisplay}</span>`;
  $("#header .header__phone").setAttribute(
    "aria-label",
    `Ligar para ${CONTACT.phoneDisplay}`
  );

  const waTargets = [
    "#hero-whatsapp-link",
    "#mobile-whatsapp-link",
    "#cta-final-whatsapp",
    "#wa-float",
    "#contact-whatsapp-link",
  ];
  waTargets.forEach((sel) => {
    const el = $(sel);
    if (!el) return;
    el.href = defaultLink;
  });

  const emailEl = $("#contact-email-link");
  if (emailEl) {
    emailEl.href = `mailto:${CONTACT.email}`;
    emailEl.textContent = CONTACT.email;
  }

  const waLocation = $("#location-whatsapp");
  if (waLocation) {
    waLocation.href = defaultLink;
    waLocation.textContent = CONTACT.phoneDisplay;
  }

  const contactWaLink = $("#contact-whatsapp-link");
  if (contactWaLink) contactWaLink.textContent = CONTACT.phoneDisplay;

  const mapsBtn = $("#location-maps-btn");
  if (mapsBtn) mapsBtn.href = CONTACT.mapsUrl;
}

/* ------------------------------------------------------------
   2. Navegação (desktop + mobile)
   ------------------------------------------------------------ */
function visibleNavLinks() {
  return NAV_LINKS.filter((link) => !link.requiresTestimonials || TESTIMONIALS.length > 0);
}

function renderNav() {
  const desktopList = $("#nav-desktop-list");
  const mobileList = $("#nav-mobile-list");
  const mobileContact = $("#nav-mobile-contact");
  const links = visibleNavLinks();

  desktopList.innerHTML = links.map(
    (link) => `<li><a class="nav-desktop__link" href="${link.href}">${link.label}</a></li>`
  ).join("");

  mobileList.innerHTML = links.map(
    (link) => `<li><a class="nav-mobile__link" href="${link.href}">${link.label}</a></li>`
  ).join("");

  mobileContact.innerHTML = `
    <a href="tel:+${CONTACT.whatsappNumber}">${icon("phone")}${CONTACT.phoneDisplay}</a>
    <a href="mailto:${CONTACT.email}">${icon("mail")}${CONTACT.email}</a>
  `;
}

function setupMobileMenu() {
  const toggle = $("#menu-toggle");
  const drawer = $("#nav-mobile");

  function closeMenu() {
    drawer.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
    document.body.style.overflow = "";
  }
  function openMenu() {
    drawer.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Fechar menu");
    document.body.style.overflow = "hidden";
  }

  toggle.addEventListener("click", () => {
    const isOpen = drawer.classList.contains("is-open");
    isOpen ? closeMenu() : openMenu();
  });

  drawer.addEventListener("click", (e) => {
    if (e.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 960) closeMenu();
  });
}

function setupHeaderScroll() {
  const header = $("#header");
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ------------------------------------------------------------
   3. Serviços
   ------------------------------------------------------------ */
function renderServices() {
  const grid = $("#services-grid");
  grid.innerHTML = SERVICES.map((s) => {
    const link = buildWhatsAppLink(
      `Olá! Encontrei a Hamtaro Serviços Automotivos pelo site e gostaria de solicitar um orçamento para: ${s.title}.`
    );
    return `
      <article class="service-card">
        <div class="service-card__icon">${icon(s.icon)}</div>
        <h3 class="service-card__title">${s.title}</h3>
        <p class="service-card__desc">${s.desc}</p>
        <a class="service-card__cta" href="${link}" target="_blank" rel="noopener">
          Solicitar orçamento ${icon("arrowRight")}
        </a>
      </article>`;
  }).join("");
}

/* ------------------------------------------------------------
   4. Diferenciais
   ------------------------------------------------------------ */
function renderDifferentials() {
  const grid = $("#differentials-grid");
  grid.innerHTML = DIFFERENTIALS.map(
    (d) => `
      <div class="differential-card">
        <div class="differential-card__icon">${icon(d.icon)}</div>
        <h3 class="differential-card__title">${d.title}</h3>
        <p class="differential-card__desc">${d.desc}</p>
      </div>`
  ).join("");
}

/* ------------------------------------------------------------
   5. Como funciona
   ------------------------------------------------------------ */
function renderHowItWorks() {
  const wrap = $("#how-steps");
  wrap.innerHTML = HOW_IT_WORKS.map(
    (step, i) => `
      <div class="how-step">
        <div class="how-step__num">${i + 1}</div>
        <div class="how-step__line"></div>
        <div>
          <h3 class="how-step__title">${step.title}</h3>
          <p class="how-step__desc">${step.desc}</p>
        </div>
      </div>`
  ).join("");
}

/* ------------------------------------------------------------
   6. Galeria + lightbox (com srcset responsivo, WebP/JPEG e
      navegação por setas, teclado e swipe)
   ------------------------------------------------------------ */
function renderGallery() {
  const grid = $("#gallery-grid");
  grid.innerHTML = GALLERY.map((item, i) => {
    if (item.base) {
      const pos = item.pos || "50% 50%";
      return `
        <button class="gallery-item" data-index="${i}" aria-label="Ampliar foto: ${item.label}">
          <picture>
            <source type="image/webp" srcset="${item.base}-480.webp 480w, ${item.base}-960.webp 960w" sizes="(min-width: 640px) 25vw, 50vw" />
            <img src="${item.base}-960.jpg" srcset="${item.base}-480.jpg 480w, ${item.base}-960.jpg 960w" sizes="(min-width: 640px) 25vw, 50vw" alt="${item.label}" loading="lazy" style="object-position:${pos}" />
          </picture>
          <span class="gallery-item__tag">${item.tag}</span>
        </button>`;
    }
    return `
      <div class="gallery-item">
        <span class="gallery-item__tag">${item.tag}</span>
        <div class="gallery-item__placeholder">
          ${icon("camera")}
          <span>${item.label}</span>
        </div>
      </div>`;
  }).join("");

  const withPhoto = GALLERY.filter((item) => item.base);
  if (!withPhoto.length) return;

  const lightbox = $("#lightbox");
  const lightboxImg = $("#lightbox-img");
  let current = 0;

  function openAt(index) {
    current = (index + withPhoto.length) % withPhoto.length;
    const item = withPhoto[current];
    lightboxImg.src = `${item.base}-1600.jpg`;
    lightboxImg.srcset = `${item.base}-960.webp 960w, ${item.base}-1600.webp 1600w`;
    lightboxImg.alt = item.label || "";
    lightbox.classList.add("is-open");
  }
  function closeLightbox() {
    lightbox.classList.remove("is-open");
  }
  function next() {
    openAt(current + 1);
  }
  function prev() {
    openAt(current - 1);
  }

  $$(".gallery-item[data-index]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const galleryIndex = Number(btn.dataset.index);
      const withPhotoIndex = withPhoto.indexOf(GALLERY[galleryIndex]);
      openAt(withPhotoIndex);
    });
  });

  $("#lightbox-close").addEventListener("click", closeLightbox);
  $("#lightbox-next").addEventListener("click", next);
  $("#lightbox-prev").addEventListener("click", prev);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  });

  let touchStartX = null;
  lightbox.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });
  lightbox.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) (dx < 0 ? next() : prev());
    touchStartX = null;
  }, { passive: true });
}

/* ------------------------------------------------------------
   7. Depoimentos
   ------------------------------------------------------------ */
function initials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function renderTestimonials() {
  const section = $("#depoimentos");
  const grid = $("#testimonials-grid");
  const footer = $("#testimonials-footer");

  // Sem depoimentos reais, a seção inteira (e o link no menu) fica oculta
  // em vez de mostrar um estado "em breve".
  if (!TESTIMONIALS.length) {
    section.hidden = true;
    return;
  }
  section.hidden = false;

  grid.innerHTML = TESTIMONIALS.map(
    (t) => `
      <div class="testimonial-card">
        <div class="testimonial-card__stars">${Array.from({ length: t.rating || 5 })
          .map(() => icon("star", "star-fill"))
          .join("")}</div>
        <p class="testimonial-card__quote">“${t.text}”</p>
        <div class="testimonial-card__author">
          <div class="testimonial-card__avatar">${initials(t.name)}</div>
          <div><b>${t.name}</b><span>Cliente Hamtaro</span></div>
        </div>
      </div>`
  ).join("");

  if (CONTACT.googleReviewsUrl) {
    footer.innerHTML = `<a class="btn btn--ghost-dark" href="${CONTACT.googleReviewsUrl}" target="_blank" rel="noopener">Ver todas as avaliações no Google</a>`;
  }
}

/* ------------------------------------------------------------
   8. FAQ
   ------------------------------------------------------------ */
function renderFAQ() {
  const list = $("#faq-list");
  list.innerHTML = FAQ.map(
    (item, i) => `
      <details class="faq-item" ${i === 0 ? "open" : ""}>
        <summary>
          <span>${item.q}</span>
          <span class="faq-item__icon">${icon("arrowRight", "")}</span>
        </summary>
        <div class="faq-item__body">${item.a}${item.editable ? '<span class="badge-editar">confirmar</span>' : ""}</div>
      </details>`
  ).join("");
}

/* ------------------------------------------------------------
   9. Horários (localização + contato)
   ------------------------------------------------------------ */
function renderHours() {
  const rowsHtml = BUSINESS_HOURS.map(
    (h) => `<li><span>${h.day}</span><span>${h.editable ? `<em>${h.time}</em>` : h.time}</span></li>`
  ).join("");
  $("#contact-hours-list").innerHTML = rowsHtml;

  const inline = BUSINESS_HOURS.map((h) => `${h.day}: ${h.time}`).join(" · ");
  $("#location-hours").textContent = inline;
}

/* ------------------------------------------------------------
   10. Mapa
   ------------------------------------------------------------ */
function renderMap() {
  if (!CONTACT.mapsEmbedSrc) return;
  const mapEl = $("#location-map");
  mapEl.innerHTML = `<iframe src="${CONTACT.mapsEmbedSrc}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Localização da Hamtaro Serviços Automotivos no mapa"></iframe>`;
}

/* ------------------------------------------------------------
   11. Formulário de orçamento -> WhatsApp
   ------------------------------------------------------------ */
function setupQuoteForm() {
  const select = $("#f-servico");
  select.innerHTML =
    `<option value="">Selecione um serviço (opcional)</option>` +
    SERVICES.map((s) => `<option value="${s.title}">${s.title}</option>`).join("") +
    `<option value="Outro">Outro / não sei</option>`;

  const form = $("#quote-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = $("#f-nome").value.trim();
    const telefone = $("#f-telefone").value.trim();
    const veiculo = $("#f-veiculo").value.trim();
    const servico = $("#f-servico").value.trim();
    const mensagem = $("#f-mensagem").value.trim();

    const lines = [
      "Olá! Encontrei a Hamtaro Serviços Automotivos pelo site e gostaria de solicitar um orçamento.",
      "",
      nome ? `Nome: ${nome}` : "",
      telefone ? `Telefone: ${telefone}` : "",
      veiculo ? `Veículo: ${veiculo}` : "",
      servico ? `Serviço desejado: ${servico}` : "",
      mensagem ? `Detalhes: ${mensagem}` : "",
    ].filter(Boolean);

    window.open(buildWhatsAppLink(lines.join("\n")), "_blank", "noopener");
  });
}

/* ------------------------------------------------------------
   12. Footer
   ------------------------------------------------------------ */
function renderFooter() {
  $("#footer-year").textContent = new Date().getFullYear();

  $("#footer-nav").innerHTML = visibleNavLinks()
    .map((l) => `<li><a href="${l.href}">${l.label}</a></li>`)
    .join("");

  $("#footer-services").innerHTML = SERVICES.slice(0, 6)
    .map((s) => `<li><a href="#servicos">${s.title}</a></li>`)
    .join("");

  $("#footer-contact").innerHTML = `
    <li>${icon("whatsapp")}<a href="${buildWhatsAppLink()}" target="_blank" rel="noopener">${CONTACT.phoneDisplay}</a></li>
    <li>${icon("mail")}<a href="mailto:${CONTACT.email}">${CONTACT.email}</a></li>
    <li>${icon("pin")}<span>${CONTACT.fullAddress}</span></li>
  `;

  const social = [];
  if (CONTACT.instagramUrl) {
    social.push(
      `<a href="${CONTACT.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram da Hamtaro">${icon("instagram")}</a>`
    );
  }
  if (CONTACT.facebookUrl) {
    social.push(
      `<a href="${CONTACT.facebookUrl}" target="_blank" rel="noopener" aria-label="Facebook da Hamtaro">${icon("facebook")}</a>`
    );
  }
  social.push(
    `<a href="${buildWhatsAppLink()}" target="_blank" rel="noopener" aria-label="WhatsApp da Hamtaro">${icon("whatsapp")}</a>`
  );
  $("#footer-social").innerHTML = social.join("");
}

/* ------------------------------------------------------------
   13. Animações de entrada (scroll reveal)
   ------------------------------------------------------------ */
function setupReveal() {
  const targets = $$(
    ".hero__copy, .hero__visual, .about__visual, .about__copy, .service-card, .differential-card, .testimonial-card, .location__card, .location__map"
  );
  targets.forEach((el) => el.classList.add("reveal"));

  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  targets.forEach((el) => observer.observe(el));
}

/* ------------------------------------------------------------
   Inicialização
   ------------------------------------------------------------ */
function init() {
  setupContactLinks();
  renderNav();
  setupMobileMenu();
  setupHeaderScroll();
  renderServices();
  renderDifferentials();
  renderHowItWorks();
  renderGallery();
  renderTestimonials();
  renderFAQ();
  renderHours();
  renderMap();
  setupQuoteForm();
  renderFooter();
  setupReveal();
}

document.addEventListener("DOMContentLoaded", init);
