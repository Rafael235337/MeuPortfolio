const signInButton = document.getElementById('signIn');
const signUpButton = document.getElementById('signUp');
const container = document.querySelector('.container');

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

document.getElementById('signInForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;

    const { storedEmail, storedPassword } = getStoredCredentials();
    
    // Validação de login
    if (email === storedEmail && password === storedPassword) {
        // Se o login for bem-sucedido, redirecione diretamente para a página de fast food
        window.location.href = '../site.html';
    } else {
        alert('Email ou senha incorretos!');
    }
});

document.getElementById('signUpForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('signUpName').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;

    // Armazenar as credenciais do usuário
    storeCredentials(email, password);

    alert(`Conta criada com sucesso!\nNome: ${name}\nEmail: ${email}`);
});

// Função para obter credenciais armazenadas
function getStoredCredentials() {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    return { storedEmail, storedPassword };
}

// Função para armazenar credenciais
function storeCredentials(email, password) {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
}
