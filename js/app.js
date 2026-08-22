(function () {
  const sidebar = document.getElementById('sidebar');
  const collapseBtn = document.getElementById('collapseBtn');
  const mobileToggle = document.getElementById('mobileToggle');

  if (localStorage.getItem('sidebar-collapsed') === '1') {
    sidebar?.classList.add('collapsed');
  }

  collapseBtn?.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    localStorage.setItem(
      'sidebar-collapsed',
      sidebar.classList.contains('collapsed') ? '1' : '0'
    );
  });

  mobileToggle?.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 700) sidebar.classList.remove('open');
    });
  });

  // Search filter
  const search = document.getElementById('search');
  const cards = document.querySelectorAll('[data-search]');
  search?.addEventListener('input', () => {
    const q = search.value.toLowerCase().trim();
    cards.forEach((card) => {
      const hay = (card.getAttribute('data-search') || '').toLowerCase();
      card.style.display = !q || hay.includes(q) ? '' : 'none';
    });
  });

  // Copy buttons
  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const text = btn.getAttribute('data-copy') || '';
      const prev = btn.innerHTML;
      try {
        await navigator.clipboard.writeText(text);
        btn.classList.add('copied');
        btn.innerHTML = '<i class="bx bx-check"></i> COPIED';
        setTimeout(() => {
          btn.classList.remove('copied');
          btn.innerHTML = prev;
        }, 1500);
      } catch (_) {}
    });
  });

  // Typewriter: .d4nx0 (from original cyber-notes)
  const typeEl = document.getElementById('typewriter');
  if (typeEl) {
    const text = '_4ut0b0t';
    let index = 0;
    let isDeleting = false;
    let speed = 100;

    function typeWriter() {
      if (!isDeleting) {
        typeEl.textContent = text.substring(0, index + 1);
        index++;
        speed = 200;
      } else {
        typeEl.textContent = text.substring(0, index - 1);
        index--;
        speed = 100;
      }
      if (!isDeleting && index === text.length) {
        speed = 10000;
        isDeleting = true;
      } else if (isDeleting && index === 0) {
        isDeleting = false;
        speed = 500;
      }
      setTimeout(typeWriter, speed);
    }
    typeWriter();
  }
})();

// Briefing command — type only on first visit ever (localStorage)
document.addEventListener('DOMContentLoaded', function () {
  const el = document.getElementById('briefing-type');
  if (!el) return;

  const text = './redteam --load-notes';
  const speed = 55;
  let i = 0;

  el.textContent = ''; // reset in case of cached content

  function tick() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i += 1;
      setTimeout(tick, speed);
    }
  }

  tick();
});