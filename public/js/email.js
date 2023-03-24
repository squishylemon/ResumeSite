const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.elements.referr.value;
  const email = form.elements.email.value;
  const subject = form.elements.subject.value;
  const message = form.elements.message.value;
  
  const body = `Name: ${name}\r\nEmail: ${email}\r\nSubject: ${subject}\r\nMessage: ${message}`;
  
  window.location.href = `mailto:alex@madpuppet.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
