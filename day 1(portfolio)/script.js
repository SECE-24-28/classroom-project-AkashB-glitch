document.addEventListener('DOMContentLoaded', function(){
  
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();


  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    })
  });

  
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMessage');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = form.name.value.trim();
      msg.textContent = `Thanks ${name || 'there'} — message received! (demo)`;
      form.reset();
    });
  }
});
