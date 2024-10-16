
function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":"  + m + ": "  + s +   session;

    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();

const myModal = new bootstrap.Modal(
    document.getElementById("modalId"),
    options,
);


    document.getElementById('signUpForm').addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent default form submission


    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Password confirmation check
    if (password !== document.getElementById('confirmPassword').value) {
        alert("Passwords do not match!");
    return;
            }

    // Create a user object
    const user = {
        name: name,
    email: email,
    password: password
            };

    try {
                // Send a POST request to the JSON server
                const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
    headers: {
        'Content-Type': 'application/json'
                    },
    body: JSON.stringify(user)
                });

    if (response.ok) {
        alert('Account created successfully!');
    // Redirect to dashboard.html
    window.location.href = 'dashboard.html';
                } else {
        alert('Failed to create account. Please try again.');
                }
            } catch (error) {
        console.error('Error:', error);
    alert('An error occurred. Please try again later.');
            }
        });


