 
    const cardLogin = document.getElementById('card-login');
    const cardRegister = document.getElementById('card-register');
    const cardRecovery = document.getElementById('card-recovery');

    const goToRegister = document.getElementById('go-to-register');
    const goToRecovery = document.getElementById('go-to-recovery');
    const goToLoginBtns = document.querySelectorAll('.go-to-login-btn');

    // Transición a Registro
    goToRegister.addEventListener('click', (e) => {
      e.preventDefault();
      cardLogin.classList.add('hidden');
      cardRegister.classList.remove('hidden');
    });

    // Transición a Recuperación
    goToRecovery.addEventListener('click', (e) => {
      e.preventDefault();
      cardLogin.classList.add('hidden');
      cardRecovery.classList.remove('hidden');
    });

    // Botones para volver al Login principal
    goToLoginBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        cardRegister.classList.add('hidden');
        cardRecovery.classList.add('hidden');
        cardLogin.classList.remove('hidden');
      });
    });
