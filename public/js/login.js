// login.js

document.getElementById("loginForm").addEventListener("submit", async function (event) { // Updated to use correct form id
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const result = await response.json();
        console.log("Server response:", result);

        if (result.success) {
            window.location.href = "../index.html";
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error("Error during login request:", error);
        alert("An error occurred during login. Please try again.");
    }
});
