document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const phoneNumberElement = document.getElementById('phone_number');
    const checkInElement = document.getElementById('checkIn');
    const checkOutElement = document.getElementById('checkOut');
    const roomTypeElement = document.getElementById('roomType');

    if (!nameElement || !emailElement || !phoneNumberElement || !checkInElement || !checkOutElement || !roomTypeElement) {
        console.error('One or more form elements not found');
        return;
    }

    const newBooking = {
        name: nameElement.value,
        email: emailElement.value,
        phone: phoneNumberElement.value,
        checkin: checkInElement.value,
        checkout: checkOutElement.value,
        roomtype: roomTypeElement.value
    };

    fetch('http://localhost:5000/api/booking', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBooking)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(booking => {
        alert('Booking saved successfully!');
        document.getElementById('bookingForm').reset();
    })
    .catch(error => {
        console.error('Error saving booking:', error);
        alert('Error saving booking: ' + error.message);
    });
});
