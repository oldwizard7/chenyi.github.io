(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');

  function closeNavigation() {
    if (!navToggle || !siteNav) return;
    navToggle.setAttribute('aria-expanded', 'false');
    siteNav.classList.remove('is-open');
    document.body.classList.remove('nav-open');
  }

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      const open = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!open));
      siteNav.classList.toggle('is-open', !open);
      document.body.classList.toggle('nav-open', !open);
    });

    siteNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNavigation);
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 860) closeNavigation();
    });
  }

  const tabs = document.querySelectorAll('.publication-tab');
  const publications = document.querySelectorAll('.publication-card');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      const filter = tab.dataset.filter;

      tabs.forEach(function (item) {
        const active = item === tab;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });

      publications.forEach(function (publication) {
        const tags = publication.dataset.tags.split(' ');
        const visible = filter === 'all' || tags.includes(filter);
        publication.classList.toggle('is-hidden', !visible);
      });
    });
  });

  const year = document.getElementById('current-year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
