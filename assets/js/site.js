const siteConfig = {
  companyName: "Lubricant Solutions",
  phones: [
    { display: "+91 98726 41787", href: "tel:+919872641787", wa: "919872641787" },
    { display: "+91 97796 59787", href: "tel:+919779659787", wa: "919779659787" }
  ],
  emails: [
    "Sunilaggarwal@lubricantsolutionsindia.com",
    "Office@lubricantsolutionsindia.com"
  ],
  whatsappNumber: "919872641787",
  city: "Ludhiana, Punjab",
  address: "B-XXIII-2210/1, Plot No. 395, Industrial Area-A, Ludhiana"
};

const categoryItems = [
  { href: "/category/hydraulic-power-transmission.html", label: "Hydraulic & Power Transmission" },
  { href: "/category/metalworking-forming.html", label: "Metalworking & Forming" },
  { href: "/category/cooling-thermal-management.html", label: "Cooling & Thermal Management" },
  { href: "/category/textile-machinery.html", label: "Textile Machinery" },
  { href: "/category/rust-protection.html", label: "Rust Protection" },
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
            <span class="topbar-static-item">60+ YEARS OF LEGACY</span>
            <span class="topbar-divider">|</span>
            <span class="topbar-static-item">3 GENERATIONS OF TRUST</span>
            <span class="topbar-divider">|</span>
            <span class="topbar-static-item">TECHNICAL-FIRST SUPPORT</span>
          </div>
          <div class="topbar-right">
            <div class="topbar-info-item">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href="${siteConfig.phones[0].href}">${siteConfig.phones[0].display}</a>
            </div>
            <div class="topbar-info-item">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href="mailto:${siteConfig.emails[1].toLowerCase()}">${siteConfig.emails[1].toLowerCase()}</a>
            </div>
            <div class="topbar-info-item">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>${siteConfig.city}</span>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar" id="navbar">
        <div class="container navbar-container">
          <!-- 1. Left Brand Logo (Reference Match) -->
          <a class="brand" href="/index.html" aria-label="Lubricant Solutions Home">
            <img class="brand-logo-img" src="/assets/images/logo.png" alt="Lubricant Solutions Logo">
          </a>

          <!-- 2. Center Navigation Links -->
          <div class="nav-links">
            <a href="/index.html" class="${currentPath === "/index.html" ? "active" : ""}">Home</a>
            
            <div class="nav-dropdown">
              <button class="nav-dropdown-toggle ${currentPath.startsWith("/industries/") ? "active" : ""}" type="button" aria-expanded="false">
                Industries
                <span aria-hidden="true">&#9662;</span>
              </button>
              <div class="nav-dropdown-menu">
                <a href="/industries/textile-industry-lubricants.html">Textile Manufacturing</a>
                <a href="/industries/steel-metal-industry-lubricants.html">Steel Plants</a>
                <a href="/industries/auto-components-industry-lubricants.html">Automotive Industry</a>
                <a href="/industries/plastic-injection-molding-lubricants.html">Injection Molding</a>
                <a href="/industries/smes-manufacturing-plants-lubricants.html">General Manufacturing</a>
              </div>
            </div>

            <div class="nav-dropdown">
              <button class="nav-dropdown-toggle ${currentPath.startsWith("/category/") ? "active" : ""}" type="button" aria-expanded="false">
                Solutions
                <span aria-hidden="true">&#9662;</span>
              </button>
              <div class="nav-dropdown-menu">
                ${categoryItems.map((item) => `<a href="${item.href}" class="${normalizePath(item.href) === currentPath ? "active" : ""}">${item.label}</a>`).join("")}
              </div>
            </div>

            <a href="/about.html" class="${currentPath === "/about.html" ? "active" : ""}">About Us</a>

            <div class="nav-dropdown">
              <button class="nav-dropdown-toggle ${currentPath === "/awards.html" || currentPath === "/finder.html" || currentPath.startsWith("/blog/") ? "active" : ""}" type="button" aria-expanded="false">
                Resources
                <span aria-hidden="true">&#9662;</span>
              </button>
              <div class="nav-dropdown-menu">
                <a href="/awards.html" class="${currentPath === "/awards.html" ? "active" : ""}">Awards & Recognition</a>
                <a href="/blog/index.html" class="${currentPath.startsWith("/blog/") ? "active" : ""}">Knowledge Hub</a>
                <a href="/finder.html" class="${currentPath === "/finder.html" ? "active" : ""}">Lubricant Finder</a>
              </div>
            </div>

            <a href="/contact.html" class="${currentPath === "/contact.html" ? "active" : ""}">Contact</a>
          </div>

          <!-- 3. Right Action Group (Reference Match) -->
          <div class="nav-right-actions">
            <a class="nav-phone-link" href="${siteConfig.phones[0].href}">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>${siteConfig.phones[0].display}</span>
            </a>

            <a class="btn nav-pill-btn" href="/finder.html">LUBRICANT FINDER</a>
            <a class="btn nav-cta-btn" href="/contact.html">GET CONSULTATION</a>

            <button class="menu-toggle" id="menu-toggle" aria-label="Toggle navigation">☰</button>
          </div>
        </div>
      </nav>
    `;
  }

  if (footer) {
    footer.innerHTML = `
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-column">
              <h3 class="footer-column-header">Products <span class="footer-accordion-icon">&#9656;</span></h3>
              <div class="footer-links">
                <a href="/category/hydraulic-power-transmission.html">Hydraulic & Power Transmission</a>
                <a href="/category/metalworking-forming.html">Metalworking & Forming</a>
                <a href="/category/cooling-thermal-management.html">Cooling & Thermal Management</a>
                <a href="/category/textile-machinery.html">Textile Machinery</a>
                <a href="/category/rust-protection.html">Rust Protection</a>
                <a href="/category/speciality-marine-oils.html">Speciality & Marine Oils</a>
                <a href="/category/greases.html">Greases</a>
              </div>
            </div>
            <div class="footer-column">
              <h3 class="footer-column-header">Industries <span class="footer-accordion-icon">&#9656;</span></h3>
              <div class="footer-links">
                <a href="/industries/textile-industry-lubricants.html">Textile Manufacturing</a>
                <a href="/industries/steel-metal-industry-lubricants.html">Steel Plants</a>
                <a href="/industries/auto-components-industry-lubricants.html">Automotive Industry</a>
                <a href="/industries/plastic-injection-molding-lubricants.html">Injection Molding</a>
                <a href="/industries/smes-manufacturing-plants-lubricants.html">General Manufacturing</a>
              </div>
            </div>
            <div class="footer-column">
              <h3 class="footer-column-header">Services <span class="footer-accordion-icon">&#9656;</span></h3>
              <div class="footer-links">
                <a href="/services/condition-monitoring.html">Condition Monitoring</a>
                <a href="/services/coolant-management.html">Coolant Management</a>
                <a href="/services/filtration-services.html">Filtration Services</a>
                <a href="/services/sample-testing.html">Sample Testing</a>
                <a href="/services/technical-support.html">Technical Support</a>
              </div>
            </div>
            <div class="footer-column">
              <h3 class="footer-column-header">Company <span class="footer-accordion-icon">&#9656;</span></h3>
              <div class="footer-links">
                <a href="/about.html">About Us</a>
                <a href="/awards.html">Awards & Recognition</a>
                <a href="/blog/index.html">Knowledge Hub</a>
                <a href="/finder.html">Lubricant Finder</a>
                <a href="/contact.html">Contact Us</a>
              </div>
            </div>
            <div class="footer-column">
              <h3 class="footer-column-header">Contact <span class="footer-accordion-icon">&#9656;</span></h3>
              <div class="footer-links">
                ${siteConfig.phones.map(p => `<a href="${p.href}">${p.display}</a>`).join("")}
                ${siteConfig.emails.map(e => `<a href="mailto:${e}">${e}</a>`).join("")}
                <span><strong>Office Address:</strong><br>${siteConfig.address}</span>
                <span><strong>Hours:</strong> Mon - Sat: 9:00 AM - 6:00 PM</span>
                <a href="${buildWhatsAppLink("Hello, I need lubrication support for my plant.")}" target="_blank" rel="noopener" style="color:var(--accent); font-weight:700;">WhatsApp Business Chat</a>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <div>
              © 2026 ${siteConfig.companyName}. All rights reserved. Legacy Lubrication Partners since 1963.
              <br><small style="opacity: 0.6; margin-top: 4px; display: block;">Created by Mahima Joshi, Team Social Tusk</small>
            </div>
            <div class="footer-socials">
              <a href="${buildWhatsAppLink("Hello, I would like to get a quote.")}" target="_blank" rel="noopener">WhatsApp</a>
              <span>|</span>
              <a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a>
            </div>
          </div>
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
    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("open");
      const isOpen = navbar.classList.contains("open");
      menuToggle.innerHTML = isOpen ? "✕" : "☰";
    });
  }

  // Mobile Accordion Dropdowns
  const dropdownToggles = document.querySelectorAll(".nav-dropdown-toggle");
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener("click", (e) => {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        const parent = toggle.closest(".nav-dropdown");
        
        // Collapse other dropdowns
        document.querySelectorAll(".nav-dropdown").forEach(dropdown => {
          if (dropdown !== parent) {
            dropdown.classList.remove("expanded");
            const btn = dropdown.querySelector(".nav-dropdown-toggle");
            if (btn) btn.setAttribute("aria-expanded", "false");
          }
        });

        parent.classList.toggle("expanded");
        const isExpanded = parent.classList.contains("expanded");
        toggle.setAttribute("aria-expanded", isExpanded ? "true" : "false");
      }
    });
  });
}

function setupContactForms() {
  document.querySelectorAll("[data-contact-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const message = `*New Consultation Request* 🛠️

Hello Lubricant Solutions, I would like to request a technical consultation. Here are my details:

👤 *Name:* ${data.get("name") || ""}
📞 *Phone:* ${data.get("phone") || ""}
⚙️ *Requirement:* ${data.get("requirement") || ""}

---
🌐 *Source:* ${data.get("source") || "website inquiry"}`;
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

function setupBrandSlider() {
  const track = document.querySelector(".brand-slider-track");
  const dots = document.querySelectorAll(".slider-dot");
  const prevBtn = document.querySelector(".prev-arrow");
  const nextBtn = document.querySelector(".next-arrow");
  if (!track) return;

  const slides = Array.from(track.querySelectorAll(".brand-slide"));
  if (!slides.length) return;

  let currentIndex = 0;
  let autoplayTimer = null;
  const autoplayDelay = 5000; // 5 seconds per slide

  const getSlideWidth = () => track.clientWidth;

  const updateActiveState = (index) => {
    currentIndex = index;
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === currentIndex);
    });
  };

  const scrollToSlide = (index) => {
    const targetScrollLeft = index * getSlideWidth();
    track.scrollTo({ left: targetScrollLeft, behavior: "smooth" });
    updateActiveState(index);
  };

  const nextSlide = () => {
    const nextIdx = (currentIndex + 1) % slides.length;
    scrollToSlide(nextIdx);
  };

  const prevSlide = () => {
    const prevIdx = (currentIndex - 1 + slides.length) % slides.length;
    scrollToSlide(prevIdx);
  };

  if (prevBtn) prevBtn.addEventListener("click", () => {
    prevSlide();
    startAutoplay();
  });

  if (nextBtn) nextBtn.addEventListener("click", () => {
    nextSlide();
    startAutoplay();
  });

  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      scrollToSlide(idx);
      startAutoplay();
    });
  });

  // Track manual scrolling to update dots on scroll-snap
  let scrollTimeout;
  track.addEventListener("scroll", () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const index = Math.round(track.scrollLeft / getSlideWidth());
      if (index !== currentIndex && index >= 0 && index < slides.length) {
        updateActiveState(index);
      }
    }, 100);
  });

  const startAutoplay = () => {
    clearInterval(autoplayTimer);
    autoplayTimer = setInterval(nextSlide, autoplayDelay);
  };

  const stopAutoplay = () => {
    clearInterval(autoplayTimer);
  };

  // Pause autoplay on mouse enter/focus
  const container = document.querySelector(".brand-slider-container");
  if (container) {
    container.addEventListener("mouseenter", stopAutoplay);
    container.addEventListener("mouseleave", startAutoplay);
    container.addEventListener("focusin", stopAutoplay);
    container.addEventListener("focusout", startAutoplay);
  }

  startAutoplay();
}

function setupLogoInteraction() {
  const brand = document.querySelector(".brand");
  if (!brand) return;
  const logo = brand.querySelector(".brand-logo-img");
  if (!logo) return;

  brand.addEventListener("mousemove", (e) => {
    const rect = brand.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Magnetic pull limits
    const maxTilt = 15; // degrees
    const tiltX = -(y / (rect.height / 2)) * maxTilt;
    const tiltY = (x / (rect.width / 2)) * maxTilt;
    
    // Apply transform
    logo.style.transform = `perspective(300px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.06, 1.06, 1.06)`;
    logo.style.boxShadow = `0 15px 30px rgba(212, 175, 55, 0.25), 0 0 15px rgba(212, 175, 55, 0.2)`;
    logo.style.borderColor = "var(--accent)";
  });

  brand.addEventListener("mouseleave", () => {
    logo.style.transform = "perspective(300px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    logo.style.boxShadow = "none";
    logo.style.borderColor = "transparent";
  });
}

function setupFooterAccordions() {
  const footerHeaders = document.querySelectorAll(".footer-column-header");
  footerHeaders.forEach(header => {
    header.addEventListener("click", () => {
      if (window.innerWidth <= 640) {
        const parent = header.closest(".footer-column");
        if (!parent) return;
        const isOpen = parent.classList.contains("open");
        
        // Close other footer sections
        document.querySelectorAll(".footer-column").forEach(col => {
          if (col !== parent) {
            col.classList.remove("open");
          }
        });
        
        parent.classList.toggle("open");
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderShell();
  setupContactForms();
  setupCarousels();
  setupBrandSlider();
  setupLogoInteraction();
  setupFooterAccordions();
});
