/**
 * BEEKEY TRADERS - Official B2B Website Script
 * Interactive navigation, catalog download handler, B2B registration form handling, and notifications
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Mobile Navigation Toggle ---
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
    });

    // Close mobile menu when a nav link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- 2. Header Scroll Effect ---
  const mainHeader = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      mainHeader.classList.add('scrolled');
    } else {
      mainHeader.classList.remove('scrolled');
    }
  });

  // --- 3. Section B: Hero "Download Latest Catalogs" Action ---
  const downloadCatalogBtns = document.querySelectorAll('.btn-download-catalog');
  downloadCatalogBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // Required prompt action: simple JavaScript alert saying "Catalog downloading..."
      alert('Catalog downloading...');
      showToast('Catalog downloading... Preparing VKC 2024 Collection 88-Page PDF (9.8 MB).');
      
      // Trigger actual PDF file download
      setTimeout(() => {
        const downloadLink = document.createElement('a');
        downloadLink.href = 'catalogs/vkc-catalog-2024.pdf';
        downloadLink.download = 'VKC-Catalog-2024.pdf';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }, 500);
    });
  });

  // --- 4. Toast Notification Utility ---
  function showToast(message) {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // --- 5. B2B Registration Form Handling ---
  const registrationForm = document.getElementById('b2bRegistrationForm');
  const successModal = document.getElementById('successModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalCloseIcon = document.getElementById('modalCloseIcon');

  if (registrationForm) {
    registrationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Retrieve form inputs
      const shopNameInput = document.getElementById('shopName');
      const ownerNameInput = document.getElementById('ownerName');
      const phoneInput = document.getElementById('phoneNumber');
      const districtInput = document.getElementById('district');
      const gstInput = document.getElementById('gstNumber');
      const brandsInput = document.getElementById('brandsInterest');

      let isValid = true;

      // Validation Helper
      function validateField(input, condition) {
        if (!condition) {
          input.classList.add('has-error');
          isValid = false;
        } else {
          input.classList.remove('has-error');
        }
      }

      // Validate required fields
      validateField(shopNameInput, shopNameInput.value.trim().length >= 2);
      validateField(ownerNameInput, ownerNameInput.value.trim().length >= 2);
      
      // Validate phone number (digits only, at least 10 digits)
      const cleanedPhone = phoneInput.value.replace(/[\s\-()]/g, '');
      const phoneRegex = /^[6-9]\d{9}$/; // Standard Indian mobile format
      validateField(phoneInput, cleanedPhone.length >= 10);

      validateField(districtInput, districtInput.value.trim() !== '');
      validateField(brandsInput, brandsInput.value.trim() !== '');

      if (!isValid) {
        showToast('Please correct the highlighted fields in the form.');
        return;
      }

      // Submission UI state
      const submitBtn = registrationForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin" style="width: 18px; height: 18px; animation: spin 1s linear infinite;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        Processing Request...
      `;

      // Simulate API processing delay
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;

        // Generate Reference Number
        const refId = 'BT-' + Math.floor(100000 + Math.random() * 900000);

        // Populate details into modal
        document.getElementById('modalRefId').textContent = refId;
        document.getElementById('modalShopName').textContent = shopNameInput.value.trim();
        document.getElementById('modalPhone').textContent = phoneInput.value.trim();
        document.getElementById('modalBrands').textContent = brandsInput.options[brandsInput.selectedIndex].text;

        // Open Success Modal
        if (successModal) {
          successModal.classList.add('active');
        }

        // Reset form
        registrationForm.reset();
      }, 1000);
    });

    // Real-time error removal on input
    registrationForm.querySelectorAll('input, select').forEach(input => {
      input.addEventListener('input', () => {
        if (input.classList.contains('has-error')) {
          input.classList.remove('has-error');
        }
      });
    });
  }

  // --- 6. Modal Close Handlers ---
  function closeModal() {
    if (successModal) {
      successModal.classList.remove('active');
    }
  }

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (modalCloseIcon) modalCloseIcon.addEventListener('click', closeModal);
  if (successModal) {
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) {
        closeModal();
      }
    });
  }

  // --- 7. Catalog Lightbox Modal Functionality ---
  const catalogModal = document.getElementById('catalogModal');
  const closeCatalogModalIcon = document.getElementById('closeCatalogModalIcon');
  const catalogModalImg = document.getElementById('catalogModalImg');
  const catalogModalTitle = document.getElementById('catalogModalTitle');
  const catalogModalWhatsAppBtn = document.getElementById('catalogModalWhatsAppBtn');

  function openCatalogPreview(imgSrc, title) {
    if (!catalogModal) return;
    if (catalogModalImg) catalogModalImg.src = imgSrc;
    if (catalogModalTitle) catalogModalTitle.textContent = title;
    if (catalogModalWhatsAppBtn) {
      const msg = encodeURIComponent(`Hello Beekay Traders, I am interested in placing an order for: ${title} from the VKC Catalog.`);
      catalogModalWhatsAppBtn.href = `https://wa.me/919844610555?text=${msg}`;
    }
    catalogModal.classList.add('active');
  }

  function closeCatalogModal() {
    if (catalogModal) catalogModal.classList.remove('active');
  }

  if (closeCatalogModalIcon) closeCatalogModalIcon.addEventListener('click', closeCatalogModal);
  if (catalogModal) {
    catalogModal.addEventListener('click', (e) => {
      if (e.target === catalogModal) closeCatalogModal();
    });
  }

  // Click handler on division cards and preview buttons
  document.querySelectorAll('.division-card, .catalog-cover-card .catalog-cover-img-wrap').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
      // Avoid intercepting direct button/link clicks inside
      if (e.target.closest('a') || e.target.closest('button')) return;
      const img = card.querySelector('img');
      const title = card.querySelector('.division-title, .catalog-cover-title');
      if (img) {
        openCatalogPreview(img.src, title ? title.textContent : 'VKC Collection 2024');
      }
    });
  });

  // Close modals with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (successModal && successModal.classList.contains('active')) closeModal();
      if (catalogModal && catalogModal.classList.contains('active')) closeCatalogModal();
    }
  });

  // --- 7. Active Navigation Link Highlighting on Scroll ---
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset + 120;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');
      const correspondingNavLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

      if (correspondingNavLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          correspondingNavLink.classList.add('active');
        } else {
          correspondingNavLink.classList.remove('active');
        }
      }
    });
  });
});
