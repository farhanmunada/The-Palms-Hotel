document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newContact = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    console.log('Sending contact data:', newContact);
    fetch('http://localhost:5000/api/contacts', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newContact)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(contact => {
        console.log('Added contact:', contact);
        alert('Contact saved successfully!');
        document.getElementById('contactForm').reset();
    })
    .catch(error => {
        console.error('Error saving contact:', error);
        alert('Error saving contact: ' + error.message);
    });
});
