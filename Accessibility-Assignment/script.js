let contactForm = document.getElementById("contactForm");

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let valid = true;

    const nameRegex = /^[a-zA-ZÀ-ÿ\s]{2,140}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;

    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (!nameRegex.test(name.value.trim())) {
        name.classList.add('error');
        nameError.textContent = 'Por favor, preencha o nome corretamente.';
        valid = false;
    } else {
        name.classList.remove('error');
        nameError.textContent = '';
    }

    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    if (!emailRegex.test(email.value.trim())) {
        email.classList.add('error');
        emailError.textContent = 'Por favor, informe um e-mail válido.';
        valid = false;
    } else {
        email.classList.remove('error');
        emailError.textContent = '';
    }

    const phone = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
    if (!phoneRegex.test(phone.value.trim())) {
        phone.classList.add('error');
        phoneError.textContent = 'Por favor, informe um telefone válido (ex: (00) 12345-6789).';
        valid = false;
    } else {
        phone.classList.remove('error');
        phoneError.textContent = '';
    }

    const msg = document.getElementById('msg');
    const msgError = document.getElementById('msgError');
    if (msg.value.trim().length < 5) {
        msg.classList.add('error');
        msgError.textContent = 'A mensagem deve ter no mínimo 5 caracteres.';
        valid = false;
    } else {
        msg.classList.remove('error');
        msgError.textContent = '';
    }

    if(valid) {
        let contactData = {
            fullName: name.value.trim(),
            email: email.value.trim(),
            phone: phone.value.trim(),
            message: msg.value.trim(),
        };
        localStorage.setItem('contactData', JSON.stringify(contactData));

        const modal = document.getElementById('successModal');
        const span = document.getElementsByClassName('close')[0];

        modal.style.display = 'block';

        span.onclick = function() {
            modal.style.display = 'none';
        };

        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };

        contactForm.reset();
    }
    
})