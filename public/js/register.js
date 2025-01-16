// register.js

document.getElementById("registerForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    const response = await fetch("/api/register", { // Updated URL
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, email, password })
    });

    const result = await response.json();

    if (result.success) {
        alert("Registration successful!");
        window.location.href = "../login.html"; // Arahkan ke halaman login setelah registrasi berhasil
    } else {
        alert(result.message); // Tampilkan pesan kesalahan
    }
});
