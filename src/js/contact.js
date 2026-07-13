import { site } from '../data/content.js';

/** Contact form with EmailJS integration + mailto fallback */

export function initContactForm() {
  // Initialize EmailJS if credentials are configured
  if (site.emailjs?.publicKey) {
    emailjs.init(site.emailjs.publicKey);
  }

  const form = document.querySelector('[data-mailto-form]');
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn?.textContent || 'Send Message';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = form.querySelector('#name')?.value?.trim() || '';
    const email = form.querySelector('#email')?.value?.trim() || '';
    const message = form.querySelector('#message')?.value?.trim() || '';

    // Basic validation
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Try EmailJS first, fallback to mailto
    if (site.emailjs?.serviceId && site.emailjs?.templateId) {
      try {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        const templateParams = {
          from_name: name,
          from_email: email,
          to_email: site.email,
          message: message,
          subject: `Portfolio inquiry from ${name}`,
        };

        await emailjs.send(site.emailjs.serviceId, site.emailjs.templateId, templateParams);

        // Success
        submitBtn.textContent = 'Message sent! ✓';
        form.reset();
        setTimeout(() => {
          submitBtn.textContent = originalBtnText;
          submitBtn.disabled = false;
        }, 3000);
      } catch (error) {
        console.error('EmailJS error:', error);
        // Fallback to mailto on error
        fallbackToMailto(name, email, message);
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
      }
    } else {
      // Use mailto as fallback
      fallbackToMailto(name, email, message);
    }
  });

  // Enable email link to open default email client
  const emailLink = document.querySelector('a[href^="mailto:"]');
  if (emailLink) {
    emailLink.addEventListener('click', (e) => {
      // Let the default mailto handler work
      // This will open Gmail, Outlook, or default email app
    });
  }
}

function fallbackToMailto(name, email, message) {
  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
}
