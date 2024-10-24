// Função para verificar se o email é válido
function isEmailValid(email) {
    return email.includes('@');
}

// Função para registrar o usuário
async function register() {
    const email = document.getElementById('email').value.trim(); // Remove espaços em branco
    const senha = document.getElementById('senha').value.trim(); // Remove espaços em branco

    if (!email || !senha) {
        alert('Preencha todos os campos.');
        return;
    }

    if (!isEmailValid(email)) {
        alert('O email deve conter "@"');
        return;
    }

    const existingUser = localStorage.getItem(email);

    if (existingUser) {
        alert('Usuário já cadastrado.');
    } else {
        localStorage.setItem(email, senha); // Armazena o email e a senha no localStorage
        alert('Cadastro realizado com sucesso.');
        window.location.href = 'pagina1.html'; // Redireciona para a página 1
    }
}

// Função para logar o usuário
async function login() {
    const email = document.getElementById('email').value.trim(); // Remove espaços em branco
    const senha = document.getElementById('senha').value.trim(); // Remove espaços em branco

    if (!email || !senha) {
        alert('Preencha todos os campos.');
        return;
    }

    const storedPassword = localStorage.getItem(email); // Recupera a senha armazenada para o email

    if (storedPassword === null) {
        alert('Usuário não encontrado.');
        return;
    }

    if (storedPassword === senha) {
        alert('Login bem-sucedido.');
        window.location.href = 'pagina1.html'; // Redireciona para a página 1
    } else {
        alert('Email ou senha incorretos.');
    }
}
