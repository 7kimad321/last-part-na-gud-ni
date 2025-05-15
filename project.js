function validateLogin(event) {
    event.preventDefault(); 

    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    const validUsername = 'user123';
    const validPassword = 'pass123';

   
    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        
        window.location.href = '/project2.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

window.addEventListener('load', function() {
    var loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.display = 'none';
    }
});