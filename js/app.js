// ===== TRAVIAN LEGENDS BEGINNER GUIDE - APP.JS =====
// Language Toggle, Mobile Menu, Back to Top, and Interactive Features

(function() {
  'use strict';

  // ===== LANGUAGE MANAGEMENT =====
  const LanguageManager = {
    currentLang: localStorage.getItem('travian-lang') || 'zh',

    init() {
      this.applyStoredLanguage();
      this.setupLanguageToggleButtons();
      this.updateTextContent();
    },

    applyStoredLanguage() {
      document.documentElement.lang = this.currentLang === 'en' ? 'en' : 'zh-Hant';
    },

    setupLanguageToggleButtons() {
      const buttons = document.querySelectorAll('.lang-toggle');
      buttons.forEach(button => {
        const lang = button.dataset.lang;

        // Set active state
        if (lang === this.currentLang) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }

        // Add click handler
        button.addEventListener('click', (e) => {
          e.preventDefault();
          this.switchLanguage(lang);
        });
      });
    },

    switchLanguage(lang) {
      if (lang !== this.currentLang) {
        this.currentLang = lang;
        localStorage.setItem('travian-lang', lang);
        this.applyStoredLanguage();
        this.updateTextContent();
        this.setupLanguageToggleButtons();
      }
    },

    updateTextContent() {
      // Update all lang-content sections
      const contentSections = document.querySelectorAll('.lang-content');
      contentSections.forEach(section => {
        section.classList.remove('active');
        if (section.dataset.lang === this.currentLang) {
          section.classList.add('active');
        }
      });

      // Update all lang-text elements (attributes)
      const textElements = document.querySelectorAll('.lang-text');
      textElements.forEach(element => {
        const attrName = `data-${this.currentLang}`;
        if (element.hasAttribute(attrName)) {
          element.textContent = element.getAttribute(attrName);
        }
      });

      // Update document title
      const titleText = this.currentLang === 'en'
        ? 'Travian Legends Beginner\'s Guide'
        : 'Travian Legends 新手攻略';
      document.title = titleText;
    }
  };

  // ===== MOBILE MENU MANAGEMENT =====
  const MobileMenuManager = {
    menuButton: null,
    navMenu: null,

    init() {
      this.menuButton = document.getElementById('mobile-menu-btn');
      this.navMenu = document.querySelector('.nav-main');

      if (this.menuButton) {
        this.menuButton.addEventListener('click', () => this.toggleMenu());
      }

      // Close menu when clicking nav links
      const navLinks = document.querySelectorAll('.nav-main a');
      navLinks.forEach(link => {
        link.addEventListener('click', () => this.closeMenu());
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!this.menuButton.contains(e.target) && !this.navMenu.contains(e.target)) {
          this.closeMenu();
        }
      });
    },

    toggleMenu() {
      if (this.navMenu.classList.contains('active')) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    },

    openMenu() {
      this.navMenu.classList.add('active');
      this.menuButton.classList.add('active');
    },

    closeMenu() {
      this.navMenu.classList.remove('active');
      this.menuButton.classList.remove('active');
    }
  };

  // ===== BACK TO TOP BUTTON =====
  const BackToTopManager = {
    button: null,

    init() {
      this.button = document.getElementById('back-to-top');

      if (this.button) {
        window.addEventListener('scroll', () => this.updateVisibility());
        this.button.addEventListener('click', () => this.scrollToTop());
      }
    },

    updateVisibility() {
      if (window.scrollY > 300) {
        this.button.classList.add('show');
      } else {
        this.button.classList.remove('show');
      }
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // ===== TAB SYSTEM =====
  const TabManager = {
    init() {
      const tabButtons = document.querySelectorAll('.tab-button');
      const tabContents = document.querySelectorAll('.tab-content');

      tabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          e.preventDefault();

          const tabName = button.dataset.tab;

          // Remove active from all
          tabButtons.forEach(btn => btn.classList.remove('active'));
          tabContents.forEach(content => content.classList.remove('active'));

          // Add active to clicked
          button.classList.add('active');
          const activeContent = document.querySelector(`.tab-content[data-tab="${tabName}"]`);
          if (activeContent) {
            activeContent.classList.add('active');
          }
        });
      });

      // Activate first tab by default
      if (tabButtons.length > 0) {
        tabButtons[0].click();
      }
    }
  };

  // ===== DROPDOWN MENU MANAGEMENT =====
  const DropdownManager = {
    init() {
      const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');

      dropdownTriggers.forEach(trigger => {
        const menu = trigger.querySelector('.dropdown-menu');

        if (menu) {
          // Close dropdown when clicking outside
          document.addEventListener('click', (e) => {
            if (!trigger.contains(e.target)) {
              menu.style.display = 'none';
            }
          });

          // Prevent closing when clicking inside dropdown
          menu.addEventListener('click', (e) => {
            e.stopPropagation();
          });
        }
      });
    }
  };

  // ===== SMOOTH SCROLL FOR INTERNAL LINKS =====
  const SmoothScrollManager = {
    init() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    }
  };

  // ===== TRIBE CARD ANIMATIONS =====
  const TribeCardManager = {
    init() {
      const tribeCards = document.querySelectorAll('.tribe-card');

      tribeCards.forEach((card, index) => {
        // Add staggered animation on load
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        setTimeout(() => {
          card.style.transition = 'all 0.5s ease-out';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, index * 100);

        // Add hover effect
        card.addEventListener('mouseenter', () => {
          card.style.zIndex = '10';
        });

        card.addEventListener('mouseleave', () => {
          card.style.zIndex = '1';
        });
      });
    }
  };

  // ===== STAT BADGE TOOLTIPS =====
  const TooltipManager = {
    tooltips: {
      atk: { zh: '攻擊力', en: 'Attack' },
      def: { zh: '防禦力', en: 'Defense' },
      spd: { zh: '速度', en: 'Speed' },
      crop: { zh: '糧食消耗', en: 'Crop Consumption' }
    },

    init() {
      const badges = document.querySelectorAll('.stat-badge');

      badges.forEach(badge => {
        const type = badge.className.match(/atk|def|spd|crop/)?.[0];
        if (type && this.tooltips[type]) {
          badge.title = this.tooltips[type][LanguageManager.currentLang];
        }
      });
    }
  };

  // ===== RESOURCE COST FORMATTER =====
  const ResourceFormatter = {
    icons: {
      wood: '🪵',
      clay: '🧱',
      iron: '⛏️',
      crop: '🌾'
    },

    init() {
      const resourceCosts = document.querySelectorAll('.resource-cost');

      resourceCosts.forEach(cost => {
        const resources = cost.querySelectorAll('[class^="resource-"]');
        resources.forEach(resource => {
          const type = resource.className.replace('resource-', '');
          if (this.icons[type]) {
            resource.textContent = this.icons[type];
          }
        });
      });
    }
  };

  // ===== KEYBOARD SHORTCUTS =====
  const KeyboardShortcuts = {
    init() {
      document.addEventListener('keydown', (e) => {
        // Alt + Z for language toggle (zh/en)
        if (e.altKey && e.key === 'z') {
          e.preventDefault();
          const newLang = LanguageManager.currentLang === 'zh' ? 'en' : 'zh';
          const button = document.querySelector(`[data-lang="${newLang}"]`);
          if (button) button.click();
        }

        // Esc to close mobile menu
        if (e.key === 'Escape') {
          MobileMenuManager.closeMenu();
        }

        // Home key to go to top
        if (e.key === 'Home') {
          e.preventDefault();
          BackToTopManager.scrollToTop();
        }
      });
    }
  };

  // ===== PAGE LOAD ANIMATIONS =====
  const PageAnimations = {
    init() {
      // Add animation to hero banner
      const heroBanner = document.querySelector('.hero-banner');
      if (heroBanner) {
        heroBanner.style.opacity = '0';
        heroBanner.style.transform = 'translateY(-20px)';

        setTimeout(() => {
          heroBanner.style.transition = 'all 0.6s ease-out';
          heroBanner.style.opacity = '1';
          heroBanner.style.transform = 'translateY(0)';
        }, 100);
      }

      // Fade in intro section
      const introSection = document.querySelector('.intro-section');
      if (introSection) {
        introSection.style.opacity = '0';

        setTimeout(() => {
          introSection.style.transition = 'opacity 0.8s ease-out';
          introSection.style.opacity = '1';
        }, 300);
      }
    }
  };

  // ===== SECTION INTERSECTION OBSERVER =====
  const SectionObserver = {
    init() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      // Observe all sections
      document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
      });
    }
  };

  // ===== PERFORMANCE OPTIMIZATION =====
  const PerformanceOptimizer = {
    init() {
      // Lazy load images if any
      if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          });
        });

        images.forEach(img => imageObserver.observe(img));
      }
    }
  };

  // ===== INITIALIZATION =====
  function initializeApp() {
    // Check if DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeAll);
    } else {
      initializeAll();
    }
  }

  function initializeAll() {
    console.log('Initializing Travian Legends Guide App...');

    // Initialize all managers in order
    LanguageManager.init();
    MobileMenuManager.init();
    BackToTopManager.init();
    TabManager.init();
    DropdownManager.init();
    SmoothScrollManager.init();
    TribeCardManager.init();
    TooltipManager.init();
    ResourceFormatter.init();
    KeyboardShortcuts.init();
    PageAnimations.init();
    SectionObserver.init();
    PerformanceOptimizer.init();

    console.log('App initialized successfully!');

    // Log current language
    console.log('Current language:', LanguageManager.currentLang);
  }

  // Start initialization
  initializeApp();
})();

// ===== UTILITY FUNCTIONS =====

/**
 * Scroll to element with smooth behavior
 * @param {string} selector - CSS selector of target element
 */
function scrollToElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/**
 * Toggle class on element
 * @param {string} selector - CSS selector
 * @param {string} className - Class name to toggle
 */
function toggleClass(selector, className) {
  const element = document.querySelector(selector);
  if (element) {
    element.classList.toggle(className);
  }
}

/**
 * Get current language
 * @returns {string} Current language code
 */
function getCurrentLanguage() {
  return localStorage.getItem('travian-lang') || 'zh';
}

/**
 * Set language
 * @param {string} lang - Language code ('zh' or 'en')
 */
function setLanguage(lang) {
  const button = document.querySelector(`[data-lang="${lang}"]`);
  if (button) {
    button.click();
  }
}

/**
 * Format resource display
 * @param {Object} resources - Resource object with wood, clay, iron, crop
 * @returns {string} Formatted resource string
 */
function formatResources(resources) {
  const icons = {
    wood: '🪵',
    clay: '🧱',
    iron: '⛏️',
    crop: '🌾'
  };

  let result = '';
  for (const [type, amount] of Object.entries(resources)) {
    if (icons[type]) {
      result += `${icons[type]} ${amount} `;
    }
  }
  return result.trim();
}

/**
 * Get time until next resource collection
 * @param {number} timestamp - Target timestamp in milliseconds
 * @returns {string} Human-readable time string
 */
function getTimeUntil(timestamp) {
  const now = Date.now();
  const diff = timestamp - now;

  if (diff <= 0) return 'Now';

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else if (minutes > 0) {
    return `${minutes}m ${seconds}s`;
  } else {
    return `${seconds}s`;
  }
}

// Export for use in global scope
window.TravianGuide = {
  scrollToElement,
  toggleClass,
  getCurrentLanguage,
  setLanguage,
  formatResources,
  getTimeUntil
};
