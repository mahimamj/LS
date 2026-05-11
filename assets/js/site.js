const siteConfig = {
  companyName: "Lubricant Solutions",
  phoneDisplay: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  whatsappNumber: "919876543210",
  email: "info@lubricantsolutions.in",
  city: "Ludhiana, Punjab",
  address: "B-XXIII-2210/1, Plot No. 395, Industrial Area-A, Ludhiana"
};

const categoryItems = [
  { href: "/category/machine-equipment-oils.html", label: "Machine & Equipment Oils" },
  { href: "/category/hydraulic-power-transmission.html", label: "Hydraulic & Power Transmission" },
  { href: "/category/metalworking-forming.html", label: "Metalworking & Forming" },
  { href: "/category/cooling-thermal-management.html", label: "Cooling & Thermal Management" },
  { href: "/category/textile-machinery-lubricants.html", label: "Textile Machinery Lubricants" },
  { href: "/category/protection-preservation.html", label: "Protection & Preservation" },
  { href: "/category/speciality-marine-oils.html", label: "Speciality & Marine Oils" },
  { href: "/category/greases.html", label: "Greases" }
];

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/index.html";
  return pathname.endsWith("/") ? `${pathname}index.html` : pathname;
}

function buildWhatsAppLink(message) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function renderShell() {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  const currentPath = normalizePath(window.location.pathname);

  if (header) {
    header.innerHTML = `
      <div class="topbar">
        <div class="container">
          <div class="topbar-left">
            <span class="topbar-chip">60+ years of lubricant legacy</span>
            <span class="topbar-chip">3 generations</span>
            <span class="topbar-chip">Technical-first support</span>
          </div>
          <div class="topbar-right">
            <div class="topbar-links">
              <a href="${siteConfig.phoneHref}">${siteConfig.phoneDisplay}</a>
              <a href="mailto:${siteConfig.email}">${siteConfig.email}</a>
            </div>
            <div class="topbar-address">${siteConfig.address}</div>
          </div>
        </div>
      </div>
      <nav class="navbar" id="navbar">
        <div class="container">
          <a class="brand" href="/index.html" aria-label="Lubricant Solutions Home">
            <span class="brand-mark">LS</span>
            <span>${siteConfig.companyName}<small>Industrial Lubrication Partner Since 2019</small></span>
          </a>
          <div class="nav-links">
            <a href="/index.html" class="${currentPath === "/index.html" ? "active" : ""}">Home</a>
            <div class="nav-dropdown">
              <button class="nav-dropdown-toggle ${currentPath.startsWith("/category/") ? "active" : ""}" type="button" aria-expanded="false">
                Category
                <span aria-hidden="true">&#9662;</span>
              </button>
              <div class="nav-dropdown-menu">
                ${categoryItems.map((item) => `<a href="${item.href}" class="${normalizePath(item.href) === currentPath ? "active" : ""}">${item.label}</a>`).join("")}
              </div>
            </div>
            <a href="/contact.html" class="${currentPath === "/contact.html" ? "active" : ""}">Contact us</a>
          </div>
          <div class="nav-actions">
            <a class="btn btn-ghost" href="${siteConfig.phoneHref}">Call Now</a>
            <a class="btn btn-secondary" href="/contact.html">Free Consultation</a>
          </div>
          <button class="menu-toggle" id="menu-toggle" aria-label="Toggle navigation">☰</button>
        </div>
      </nav>
    `;
  }

  if (footer) {
    footer.innerHTML = `
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <div>
              <h3>${siteConfig.companyName}</h3>
              <p>We are not just lubricant suppliers, we are lubrication partners helping factories reduce downtime, protect assets, and improve machine reliability.</p>
              <p>Backed by a 60+ year family legacy in lubricants since 1963.</p>
            </div>
            <div>
              <h4>Explore</h4>
              <div class="footer-links">
                <a href="/finder.html">Lubricant Finder</a>
                <a href="/products/gear-oils.html">Product Categories</a>
                <a href="/industries/steel-metal-industry-lubricants.html">Industries</a>
                <a href="/awards.html">Awards & Events</a>
                <a href="/services/technical-support.html">Technical Services</a>
              </div>
            </div>
            <div>
              <h4>Resources</h4>
              <div class="footer-links">
                <a href="/blog/index.html">Knowledge Hub</a>
                <a href="/blog/how-to-choose-the-right-lubricant.html">Choosing Lubricants</a>
                <a href="/blog/synthetic-vs-mineral-oil-guide.html">Synthetic vs Mineral</a>
                <a href="/contact.html">Contact Us</a>
              </div>
            </div>
            <div>
              <h4>Contact</h4>
              <div class="footer-links">
                <a href="${siteConfig.phoneHref}">${siteConfig.phoneDisplay}</a>
                <a href="mailto:${siteConfig.email}">${siteConfig.email}</a>
                <span>${siteConfig.address}</span>
                <a href="${buildWhatsAppLink("Hello, I need lubrication support for my plant.")}" target="_blank" rel="noopener">WhatsApp Support</a>
              </div>
            </div>
          </div>
          <div class="footer-bottom">© 2026 ${siteConfig.companyName}. Multi-brand industrial lubrication solutions and technical support.</div>
        </div>
      </footer>
      <div class="whatsapp-float">
        <a href="${buildWhatsAppLink("Hello, I want a free lubrication consultation.")}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
          <span>WhatsApp</span><span>Free Consultation</span>
        </a>
      </div>
    `;
  }

  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");
  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => navbar.classList.toggle("open"));
  }
}

function setupContactForms() {
  document.querySelectorAll("[data-contact-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const message = `Hello Lubricant Solutions, I need a lubrication consultation.%0AName: ${data.get("name") || ""}%0APhone: ${data.get("phone") || ""}%0ARequirement: ${data.get("requirement") || ""}%0ASource: ${data.get("source") || "website inquiry"}`;
      window.open(buildWhatsAppLink(message), "_blank", "noopener");
    });
  });
}

function setupCarousels() {
  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const track = carousel.querySelector("[data-carousel-track]");
    const prev = carousel.querySelector("[data-carousel-prev]");
    const next = carousel.querySelector("[data-carousel-next]");
    if (!track || !prev || !next) return;
    const slides = Array.from(track.querySelectorAll(".award-photo"));
    if (!slides.length) return;
    const autoplayDelay = Number(carousel.dataset.carouselAutoplay || 0);
    let autoplayTimer = null;

    const dots = document.createElement("div");
    dots.className = "carousel-dots";
    dots.setAttribute("aria-label", "Gallery slide navigation");
    const dotButtons = slides.map((_, index) => {
      const dot = document.createElement("button");
      dot.className = "carousel-dot";
      dot.type = "button";
      dot.setAttribute("aria-label", `Show photo ${index + 1}`);
      dot.addEventListener("click", () => {
        track.scrollTo({ left: index * getStep(), behavior: "smooth" });
      });
      dots.appendChild(dot);
      return dot;
    });
    carousel.appendChild(dots);

    const getStep = () => {
      const firstCard = track.querySelector(".award-photo");
      if (!firstCard) return track.clientWidth * 0.9;
      const gap = parseFloat(window.getComputedStyle(track).gap || "16");
      return firstCard.getBoundingClientRect().width + gap;
    };

    const updateButtons = () => {
      const maxScroll = track.scrollWidth - track.clientWidth - 4;
      const activeIndex = Math.round(track.scrollLeft / getStep());
      prev.disabled = track.scrollLeft <= 4;
      next.disabled = track.scrollLeft >= maxScroll;
      dotButtons.forEach((dot, index) => {
        dot.classList.toggle("active", index === activeIndex);
      });
    };

    const goToSlide = (index) => {
      const wrappedIndex = (index + slides.length) % slides.length;
      track.scrollTo({ left: wrappedIndex * getStep(), behavior: "smooth" });
    };

    const getActiveIndex = () => Math.round(track.scrollLeft / getStep());

    const restartAutoplay = () => {
      if (!autoplayDelay) return;
      window.clearInterval(autoplayTimer);
      autoplayTimer = window.setInterval(() => {
        goToSlide(getActiveIndex() + 1);
      }, autoplayDelay);
    };

    prev.addEventListener("click", () => {
      goToSlide(getActiveIndex() - 1);
      restartAutoplay();
    });

    next.addEventListener("click", () => {
      goToSlide(getActiveIndex() + 1);
      restartAutoplay();
    });

    track.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    if (autoplayDelay) {
      carousel.addEventListener("mouseenter", () => window.clearInterval(autoplayTimer));
      carousel.addEventListener("mouseleave", restartAutoplay);
      carousel.addEventListener("focusin", () => window.clearInterval(autoplayTimer));
      carousel.addEventListener("focusout", restartAutoplay);
      restartAutoplay();
    }
    updateButtons();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderShell();
  setupContactForms();
  setupCarousels();
});
