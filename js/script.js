// Securely Take Emails through EmailJS

// ── EmailJS init ──
emailjs.init("IlV6_aeBIgTqqwNz6");

// ── Page navigation ──
function showPage(id, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  if (btn) btn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Contact form ──
function sendEmail(e) {
  e.preventDefault();

  const btn = document.getElementById('form-btn');
  const status = document.getElementById('form-status');

  btn.disabled = true;
  btn.textContent = 'Sending...';
  status.textContent = '';
  status.className = 'form-status';

  const templateParams = {
    from_name:  document.getElementById('from_name').value,
    from_email: document.getElementById('from_email').value,
    subject:    document.getElementById('subject').value,
    message:    document.getElementById('message').value,
  };

  emailjs.send("service_cfcsn0v", "template_a2r0qpj", templateParams)
    .then(() => {
      status.textContent = "Message sent! I'll be in touch soon.";
      status.classList.add('form-status--success');
      document.getElementById('contact-form').reset();
      btn.disabled = false;
      btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send message';
    })
    .catch((err) => {
      console.error('EmailJS error:', err);
      status.textContent = 'Something went wrong. Please try again.';
      status.classList.add('form-status--error');
      btn.disabled = false;
      btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send message';
    });
}

function showPage(pageId, btn) {
  // 1. Hide all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.remove('active');
  });

  // 2. Show the requested page
  const selectedPage = document.getElementById('page-' + pageId);
  if (selectedPage) {
    selectedPage.classList.add('active');
  }

  // 3. Update the navigation link styling
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    link.classList.remove('active');
  });

  // 4. Add 'active' class to the button that was clicked
  if (btn) {
    btn.classList.add('active');
  } else {
    // If called from the brand logo, manually set the first link to active
    document.querySelector('.nav-link').classList.add('active');
  }

  // 5. Scroll to top when changing pages
  window.scrollTo(0, 0);
}

// Your existing secure email function can stay below
function openSecureEmail(e) {
  e.preventDefault();
  const user = "alyssa.webb0100";
  const domain = "gmail.com";
  const subject = encodeURIComponent("Reaching out via your portfolio");
  const fullEmail = user + "@" + domain;
  document.getElementById('email-display').innerText = fullEmail;
  window.location.href = `mailto:${fullEmail}?subject=${subject}`;
}