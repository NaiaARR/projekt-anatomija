
function openLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closeLoginForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    alert("Pokušaj prijave s korisničkim imenom: " + username);
}