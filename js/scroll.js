window.addEventListener('scroll', function() {
    const threshold = window.innerHeight * 0.8;


    if(window.scrollY > threshold) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }
  });

  