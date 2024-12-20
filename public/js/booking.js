document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        checkin: document.getElementById('checkin').value,
        checkout: document.getElementById('checkout').value,
        roomtype: document.getElementById('roomtype').value
    };

    fetch('http://localhost:3000/booking', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        document.getElementById('bookingForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error saving booking.');
    });
});
