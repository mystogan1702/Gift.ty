let storedUsername = localStorage.getItem('username');
let storedPassword = localStorage.getItem('password');

const admin_username = 'admin';
const admin_password = 'password12345';

function login() {
    const validusername = document.getElementById('username').value.trim();
    const validpassword = document.getElementById('password').value.trim();
    const message = document.getElementById('message');
    const loginButton = document.getElementById('loginButton');

    console.log('Login username entered:', validusername); // Debugging
    console.log('Login password entered:', validpassword); // Debugging
    console.log('Stored username:', storedUsername); // Debugging
    console.log('Stored password:', storedPassword);


    // Clear previous class and text
    message.className = 'message';
    message.textContent = '';

    if ((validusername === storedUsername && validpassword === storedPassword) || (validusername === admin_username && validpassword === admin_password)) {
        message.textContent = 'Login successful! Redirecting...';
        message.classList.add('success');

        document.getElementById('username').disabled = true;
        document.getElementById('password').disabled = true;
        loginButton.disabled = true;

        setTimeout(() => {
            window.location.href = 'home.html';
        }, 2000);
    } else {
        message.textContent = 'Invalid username or password!';
        message.classList.add('error');
        // Disable inputs and button
        document.getElementById('username').disabled = true;
        document.getElementById('password').disabled = true;
        loginButton.disabled = true;

        // Wait for 5 seconds, then refresh the page
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    }
}

function signUp() {
    const registeredname = document.getElementById('name').value.trim();
    const registeredusername = document.getElementById('username').value.trim();
    const registeredemail = document.getElementById('email').value.trim();
    const registeredpassword = document.getElementById('password').value.trim();
    const registeredrepeatpassword = document.getElementById('repeatpassword').value.trim();
    const signupButton = document.getElementById('signupButton');
    const message = document.getElementById('message');


    message.className = 'message';
    message.textContent = '';

    if (!registeredname || !registeredusername || !registeredemail || !registeredpassword || !registeredrepeatpassword ) {
        message.textContent = 'Please fill out all fields...';
        message.classList.add('error');

        document.getElementById('name').disabled = true;
        document.getElementById('username').disabled = true;
        document.getElementById('email').disabled = true;
        document.getElementById('username').disabled = true;
        document.getElementById('repeatpassword').disabled = true;
        signupButton.disabled = true;

        setTimeout(() => {
            window.location.href = 'register.html';
        }, 2000);
    } else {
        localStorage.setItem('username', registeredusername);
        localStorage.setItem('password', registeredpassword);

        storedUsername = registeredusername;
        storedPassword = registeredpassword;

        document.getElementById('name').disabled = true;
        document.getElementById('username').disabled = true;
        document.getElementById('email').disabled = true;
        document.getElementById('username').disabled = true;
        document.getElementById('repeatpassword').disabled = true;
        signupButton.disabled = true;

        message.textContent = 'Signed Up Successfully Redirecting...'
        message.classList.add('success');
        setTimeout(() => {

            window.location.href = 'index.html';
        }, 2000);
    }
}