/* =========================================================
   GALCONT — Assessoria Pública e Privada
   JavaScript puro (sem dependências externas)
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Header: transição ao rolar ---------- */
  var header = document.getElementById("header");
  var SCROLL_THRESHOLD = 40;

  function onScroll() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Menu mobile ---------- */
  var burger = document.getElementById("burger");
  var mobileMenu = document.getElementById("mobile-menu");

  function closeMenu() {
    mobileMenu.classList.remove("is-open");
    header.classList.remove("menu-open");
    document.body.classList.remove("no-scroll");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Abrir menu");
    onScroll(); // recalcula o estado do header conforme a posição real do scroll
  }

  function openMenu() {
    mobileMenu.classList.add("is-open");
    // força o cabeçalho a ficar sólido enquanto o menu está aberto, mesmo
    // no topo da página (transparente) — sem isso o ícone do botão ficava
    // escuro sobre o painel escuro do menu e "sumia" visualmente
    header.classList.add("menu-open");
    document.body.classList.add("no-scroll");
    burger.setAttribute("aria-expanded", "true");
    burger.setAttribute("aria-label", "Fechar menu");
  }

  burger.addEventListener("click", function () {
    var isOpen = mobileMenu.classList.contains("is-open");
    if (isOpen) { closeMenu(); } else { openMenu(); }
  });

  mobileMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeMenu(); }
  });

  /* ---------- Revelação suave ao rolar (fade-up) ---------- */
  var revealItems = document.querySelectorAll(".fade-up");
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealItems.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- FAQ em acordeão ---------- */
  var triggers = document.querySelectorAll(".accordion__trigger");

  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var expanded = trigger.getAttribute("aria-expanded") === "true";
      var panel = document.getElementById(trigger.getAttribute("aria-controls"));

      // fecha os demais itens (comportamento de acordeão único)
      triggers.forEach(function (other) {
        if (other !== trigger) {
          other.setAttribute("aria-expanded", "false");
          var otherPanel = document.getElementById(other.getAttribute("aria-controls"));
          if (otherPanel) { otherPanel.hidden = true; }
        }
      });

      trigger.setAttribute("aria-expanded", String(!expanded));
      panel.hidden = expanded;
    });
  });

  /* ---------- Formulário de contato ---------- */
  var form = document.getElementById("contact-form");
  var statusEl = document.getElementById("form-status");

  var phonePattern = /^\(?\d{2}\)?[\s.-]?\d{4,5}[\s.-]?\d{4}$/;
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setFieldError(field, hasError) {
    var wrapper = field.closest(".form__field");
    if (!wrapper) { return; }
    wrapper.classList.toggle("has-error", hasError);
  }

  function validateField(field) {
    var value = field.value.trim();
    var isValid = true;

    if (field.hasAttribute("required") && value === "") {
      isValid = false;
    } else if (field.type === "email" && value !== "" && !emailPattern.test(value)) {
      isValid = false;
    } else if (field.name === "telefone" && value !== "" && !phonePattern.test(value)) {
      isValid = false;
    }

    setFieldError(field, !isValid);
    return isValid;
  }

  if (form) {
    var fields = form.querySelectorAll("input[required], textarea[required]");

    fields.forEach(function (field) {
      field.addEventListener("blur", function () { validateField(field); });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var allValid = true;
      fields.forEach(function (field) {
        if (!validateField(field)) { allValid = false; }
      });

      if (!allValid) {
        statusEl.textContent = "Verifique os campos destacados antes de enviar.";
        statusEl.classList.remove("is-visible");
        return;
      }

      /*
        Não há backend configurado para o envio deste formulário.
        Por instrução do briefing, o envio não deve ser simulado.
        A estrutura está validada e pronta para receber uma integração
        futura (ex.: endpoint próprio, serviço de e-mail transacional
        ou automação). Até lá, exibimos uma mensagem honesta ao usuário.
      */
      statusEl.textContent =
        "O envio automático ainda está em configuração. Por enquanto, fale com a Galcont pelo telefone (87) 3891-1467.";
      statusEl.classList.add("is-visible");
    });
  }
})();
