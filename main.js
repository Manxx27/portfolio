/**
 * ==========================================
 * MAIN JAVASCRIPT LOGIC
 * Modern Minimalist Personal Portfolio
 * ==========================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Theme (Dark / Light)
  initTheme();

  // 2. Render Dynamic Data from data.js
  renderPersonalInfo();
  renderAboutSection();
  renderSkillsSection();
  renderProjects('all');

  // 3. Setup Project Filters
  setupProjectFilters();

  // 4. Setup Scroll Animations & Active Nav
  setupScrollAnimations();
  setupActiveNavHighlight();

  // 5. Setup Mobile Navigation Menu
  setupMobileMenu();

  // 6. Setup Contact Form
  setupContactForm();

  // 7. Setup Project Detail Modal
  setupProjectModal();

  // 8. Refresh Lucide Icons after rendering
  refreshIcons();
});

/**
 * ----------------------------------------------------
 * Theme Toggle (Dark / Light Mode)
 * ----------------------------------------------------
 */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const sunIcon = document.getElementById('sunIcon');
  const moonIcon = document.getElementById('moonIcon');

  // Check saved theme or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');
      const newTheme = isDark ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      if (sunIcon) sunIcon.classList.remove('hidden');
      if (moonIcon) moonIcon.classList.add('hidden');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      if (sunIcon) sunIcon.classList.add('hidden');
      if (moonIcon) moonIcon.classList.remove('hidden');
    }
    refreshIcons();
  }
}

/**
 * ----------------------------------------------------
 * Render Personal & Hero Information
 * ----------------------------------------------------
 */
function renderPersonalInfo() {
  const { personal } = portfolioData;
  if (!personal) return;

  const heroAvatarImg = document.getElementById('heroAvatarImg');
  if (heroAvatarImg && personal.avatar) {
    heroAvatarImg.src = personal.avatar;
  }

  const statusBadge = document.getElementById('heroStatusBadge');
  if (statusBadge && personal.statusBadge) {
    statusBadge.textContent = personal.statusBadge;
  }

  const heroBio = document.getElementById('heroBio');
  if (heroBio && personal.shortBio) {
    heroBio.innerHTML = `สวัสดีครับ ผม <strong class="text-zinc-900 dark:text-white font-semibold">${personal.name}</strong> (${personal.nameEn}) ${personal.shortBio}`;
  }

  const emailLink = document.getElementById('contactEmailLink');
  if (emailLink && personal.email) {
    emailLink.href = `mailto:${personal.email}`;
    emailLink.textContent = personal.email;
  }

  const phoneText = document.getElementById('contactPhoneText');
  if (phoneText && personal.phone) {
    phoneText.textContent = personal.phone;
  }

  const locationText = document.getElementById('contactLocationText');
  if (locationText && personal.location) {
    locationText.textContent = personal.location;
  }
}

/**
 * ----------------------------------------------------
 * Render About Section & Work Experience Timeline
 * ----------------------------------------------------
 */
function renderAboutSection() {
  const { about } = portfolioData;
  if (!about) return;

  // Story paragraphs
  const storyContainer = document.getElementById('aboutStoryContainer');
  if (storyContainer && about.story) {
    storyContainer.innerHTML = about.story
      .map(p => {
        // Convert **bold** markdown to <strong>
        const formatted = p.replace(/\*\*(.*?)\*\*/g, '<strong class="text-zinc-900 dark:text-white font-semibold">$1</strong>');
        return `<p>${formatted}</p>`;
      })
      .join('');
  }

  // Work Experience Timeline
  const timelineContainer = document.getElementById('experienceTimeline');
  if (timelineContainer && about.timeline) {
    timelineContainer.innerHTML = about.timeline
      .map(item => `
        <div class="relative pl-8 group">
          <!-- Timeline Node Point -->
          <div class="absolute left-1.5 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-2 border-indigo-500 group-hover:scale-125 transition-transform"></div>
          
          <!-- Period Badge -->
          <span class="inline-block px-2.5 py-0.5 text-xs font-semibold rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/50 mb-1.5">
            ${item.year}
          </span>

          <!-- Role & Company -->
          <h4 class="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
            ${item.title}
          </h4>
          <div class="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-2">
            ${item.company}
          </div>

          <!-- Description -->
          <p class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
            ${item.description}
          </p>

          <!-- Tech Tags -->
          <div class="flex flex-wrap gap-1.5">
            ${item.tags.map(tag => `
              <span class="px-2 py-0.5 text-[11px] font-medium rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300">
                ${tag}
              </span>
            `).join('')}
          </div>
        </div>
      `)
      .join('');
  }
}

/**
 * ----------------------------------------------------
 * Render Skills Section (Categorized Cards & Meters)
 * ----------------------------------------------------
 */
function renderSkillsSection() {
  const container = document.getElementById('skillsContainer');
  if (!container || !portfolioData.skills) return;

  container.innerHTML = portfolioData.skills
    .map(cat => `
      <div class="reveal glass-card p-6 sm:p-7 rounded-3xl bg-white/60 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm flex flex-col justify-between">
        
        <div>
          <!-- Category Header -->
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/50">
              <i data-lucide="${cat.icon || 'code'}" class="w-5 h-5"></i>
            </div>
            <h3 class="text-lg font-bold text-zinc-900 dark:text-white">
              ${cat.category}
            </h3>
          </div>

          <!-- Skill Items with Progress -->
          <div class="space-y-4">
            ${cat.items.map(skill => `
              <div>
                <div class="flex justify-between items-center text-xs font-medium mb-1.5">
                  <span class="text-zinc-800 dark:text-zinc-200 font-semibold">${skill.name}</span>
                  <span class="text-zinc-500 dark:text-zinc-400">${skill.level}%</span>
                </div>
                <!-- Progress Bar -->
                <div class="w-full h-2 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                  <div class="h-full rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 transition-all duration-1000 ease-out" style="width: ${skill.level}%;"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    `)
    .join('');
}

/**
 * ----------------------------------------------------
 * Render Projects Showcase with Filter
 * ----------------------------------------------------
 */
function renderProjects(filter = 'all') {
  const container = document.getElementById('projectsGrid');
  if (!container || !portfolioData.projects) return;

  const filtered = filter === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === filter);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-zinc-500 dark:text-zinc-400">
        <i data-lucide="folder-search" class="w-12 h-12 mx-auto mb-3 opacity-40"></i>
        <p class="text-base font-medium">ไม่พบผลงานในหมวดหมู่นี้</p>
      </div>
    `;
    refreshIcons();
    return;
  }

  container.innerHTML = filtered
    .map(proj => `
      <div data-project-id="${proj.id}" class="project-card reveal glass-card group rounded-3xl bg-white/70 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/80 overflow-hidden shadow-sm flex flex-col justify-between cursor-pointer hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all">
        
        <div>
          <!-- Project Cover Image with Hover Zoom -->
          <div class="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
            <img 
              src="${proj.image}" 
              alt="${proj.title}" 
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span class="text-xs text-white font-medium inline-flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                <i data-lucide="eye" class="w-3.5 h-3.5 text-indigo-400"></i>
                คลิกเพื่อดูรายละเอียด
              </span>
            </div>
            
            <!-- Category Badge -->
            <span class="absolute top-3.5 left-3.5 px-3 py-1 text-xs font-semibold rounded-full bg-zinc-900/80 dark:bg-black/80 backdrop-blur-md text-white border border-white/10">
              ${proj.categoryLabel}
            </span>
          </div>

          <!-- Project Body -->
          <div class="p-6">
            <h3 class="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              ${proj.title}
            </h3>
            
            <p class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2.5 line-clamp-3 leading-relaxed">
              ${proj.description}
            </p>

            <!-- Tech Pills -->
            <div class="flex flex-wrap gap-1.5 mt-4">
              ${proj.technologies.map(t => `
                <span class="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-zinc-100 dark:bg-zinc-800/70 text-zinc-700 dark:text-zinc-300">
                  ${t}
                </span>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Action Links (Footer) -->
        <div class="px-6 pb-6 pt-2 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800/60 mt-2">
          
          <!-- Source Code Link -->
          <a 
            href="${proj.githubUrl}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="project-action-link inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors p-1"
          >
            <i data-lucide="github" class="w-4 h-4"></i>
            <span>Source Code</span>
          </a>

          <!-- Live Demo Link -->
          <a 
            href="${proj.demoUrl}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="project-action-link inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors p-1"
          >
            <span>Live Demo</span>
            <i data-lucide="external-link" class="w-4 h-4"></i>
          </a>

        </div>

      </div>
    `)
    .join('');

  // Attach click listener to each card for opening modal
  container.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't open modal if user specifically clicked source code or demo links
      if (e.target.closest('.project-action-link')) {
        return;
      }
      const projId = parseInt(card.getAttribute('data-project-id'), 10);
      openProjectModal(projId);
    });
  });

  refreshIcons();
}

/**
 * ----------------------------------------------------
 * Setup Project Category Filter Buttons
 * ----------------------------------------------------
 */
function setupProjectFilters() {
  const filterButtons = document.querySelectorAll('.project-filter-btn');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update button styles
      filterButtons.forEach(b => {
        b.className = 'project-filter-btn px-4 py-2 text-xs sm:text-sm font-medium rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all';
      });

      btn.className = 'project-filter-btn px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 transition-all shadow-sm';

      // Re-render projects
      renderProjects(filter);

      // Trigger scroll animations for new cards
      setTimeout(() => {
        setupScrollAnimations();
      }, 50);
    });
  });
}

/**
 * ----------------------------------------------------
 * Scroll Reveal Animations (Intersection Observer)
 * ----------------------------------------------------
 */
function setupScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once animated, optionally unobserve
          obs.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  revealElements.forEach(el => observer.observe(el));
}

/**
 * ----------------------------------------------------
 * Active Navigation Highlight on Scroll
 * ----------------------------------------------------
 */
function setupActiveNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}

/**
 * ----------------------------------------------------
 * Mobile Drawer Menu
 * ----------------------------------------------------
 */
function setupMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');
  const closeIcon = document.getElementById('closeIcon');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!mobileMenuBtn || !mobileMenu) return;

  mobileMenuBtn.addEventListener('click', () => {
    const isClosed = mobileMenu.classList.contains('hidden');
    if (isClosed) {
      mobileMenu.classList.remove('hidden');
      if (menuIcon) menuIcon.classList.add('hidden');
      if (closeIcon) closeIcon.classList.remove('hidden');
    } else {
      closeMenu();
    }
  });

  // Close when clicking any nav link
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  function closeMenu() {
    mobileMenu.classList.add('hidden');
    if (menuIcon) menuIcon.classList.remove('hidden');
    if (closeIcon) closeIcon.classList.add('hidden');
  }
}

/**
 * ----------------------------------------------------
 * Contact Form Submission & Toast Feedback
 * ----------------------------------------------------
 */
function setupContactForm() {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitFormBtn');
  const submitBtnText = document.getElementById('submitBtnText');
  const submitBtnIcon = document.getElementById('submitBtnIcon');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('nameInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const subject = document.getElementById('subjectInput').value.trim();
    const message = document.getElementById('messageInput').value.trim();

    if (!name || !email || !subject || !message) {
      showToast('กรุณากรอกข้อมูลให้ครบทุกช่องก่อนส่งข้อความ', 'error');
      return;
    }

    // Set Loading State
    if (submitBtn) submitBtn.disabled = true;
    if (submitBtnText) submitBtnText.textContent = 'กำลังส่งข้อความ...';

    // Simulate async API request
    setTimeout(() => {
      // Reset form
      form.reset();

      // Restore button
      if (submitBtn) submitBtn.disabled = false;
      if (submitBtnText) submitBtnText.textContent = 'ส่งข้อความติดต่อ';

      // Show success toast
      showToast(`ขอบคุณครับคุณ ${name}! ได้รับข้อความแล้ว จะติดต่อกลับโดยเร็วที่สุด`, 'success');
    }, 900);
  });
}

/**
 * ----------------------------------------------------
 * Modern Toast Notification
 * ----------------------------------------------------
 */
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  const isSuccess = type === 'success';

  toast.className = `pointer-events-auto p-4 rounded-2xl border shadow-xl backdrop-blur-md flex items-start gap-3 toast-enter ${
    isSuccess
      ? 'bg-zinc-900/95 text-white border-zinc-700/80 dark:bg-zinc-900/95 dark:text-white dark:border-zinc-700'
      : 'bg-rose-950/95 text-rose-100 border-rose-800'
  }`;

  toast.innerHTML = `
    <div class="p-1 rounded-lg ${isSuccess ? 'text-emerald-400 bg-emerald-500/10' : 'text-rose-400 bg-rose-500/10'}">
      <i data-lucide="${isSuccess ? 'check-circle-2' : 'alert-circle'}" class="w-5 h-5"></i>
    </div>
    <div class="flex-1 text-xs sm:text-sm font-medium leading-relaxed">
      ${message}
    </div>
  `;

  container.appendChild(toast);
  refreshIcons();

  // Auto-dismiss after 4 seconds
  setTimeout(() => {
    toast.classList.remove('toast-enter');
    toast.classList.add('toast-exit');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
}

/**
 * ----------------------------------------------------
 * Project Detail Modal Controls
 * ----------------------------------------------------
 */
function setupProjectModal() {
  const modal = document.getElementById('projectModal');
  const closeBtn = document.getElementById('closeModalBtn');

  if (!modal) return;

  // Close on button click
  if (closeBtn) {
    closeBtn.addEventListener('click', closeProjectModal);
  }

  // Close when clicking backdrop
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeProjectModal();
    }
  });
}

function openProjectModal(projectId) {
  const modal = document.getElementById('projectModal');
  const modalImage = document.getElementById('modalProjectImage');
  const modalCategory = document.getElementById('modalProjectCategory');
  const modalTitle = document.getElementById('modalProjectTitle');
  const modalDesc = document.getElementById('modalProjectDesc');
  const modalTechs = document.getElementById('modalProjectTechs');
  const modalGithubLink = document.getElementById('modalGithubLink');
  const modalDemoLink = document.getElementById('modalDemoLink');

  if (!modal || !portfolioData.projects) return;

  const project = portfolioData.projects.find(p => p.id === projectId);
  if (!project) return;

  // Populate data
  if (modalImage) {
    modalImage.src = project.image;
    modalImage.alt = project.title;
  }
  if (modalCategory) modalCategory.textContent = project.categoryLabel;
  if (modalTitle) modalTitle.textContent = project.title;
  if (modalDesc) modalDesc.textContent = project.description;
  
  if (modalTechs) {
    modalTechs.innerHTML = project.technologies.map(t => `
      <span class="px-3 py-1 text-xs font-medium rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
        ${t}
      </span>
    `).join('');
  }

  if (modalGithubLink) modalGithubLink.href = project.githubUrl;
  if (modalDemoLink) modalDemoLink.href = project.demoUrl;

  // Show modal with animation
  modal.classList.remove('hidden');
  requestAnimationFrame(() => {
    modal.classList.remove('opacity-0');
    const card = document.getElementById('projectModalCard');
    if (card) {
      card.classList.remove('scale-95');
      card.classList.add('scale-100');
    }
  });

  document.body.style.overflow = 'hidden';
  refreshIcons();
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  const card = document.getElementById('projectModalCard');
  if (!modal) return;

  modal.classList.add('opacity-0');
  if (card) {
    card.classList.remove('scale-100');
    card.classList.add('scale-95');
  }

  setTimeout(() => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }, 250);
}

/**
 * ----------------------------------------------------
 * Lucide Icons Helper
 * ----------------------------------------------------
 */
function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}
