document.addEventListener("DOMContentLoaded", () => {
    // 🔐 Login Form Handling
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            const validUsers = [
                { email: "kavya@dreamzacademy.com", password: "Dreamz123" },
                { email: "parent2@dreamzacademy.com", password: "kidsfun456" }
            ];

            const isValid = validUsers.some(user =>
                user.email === email && user.password === password
            );

            if (!email || !password) {
                alert("Please fill in all fields.");
            } else if (!email.includes("@")) {
                alert("Enter a valid email address.");
            } else if (!isValid) {
                alert("Invalid credentials. Please try again.");
            } else {
                alert("Login successful!");
                window.location.href = "admission.html";
            }
        });
    }

    // 📝 Admission Form Handling
    const admissionForm = document.getElementById("admissionForm");
    if (admissionForm) {
        admissionForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const childName = document.getElementById("childName").value.trim();
            const age = document.getElementById("childAge").value;
            const parentName = document.getElementById("parentName").value.trim();
            const contact = document.getElementById("contact").value.trim();
            const email = document.getElementById("parentEmail").value.trim();
            const batch = document.querySelector('input[name="batch"]:checked');

            if (!childName || !age || !parentName || !contact || !email || !batch) {
                alert("Please complete all required fields.");
                return;
            }

            if (!/^\d{10}$/.test(contact)) {
                alert("Enter a valid 10-digit contact number.");
                return;
            }

            // Save temporarily using localStorage
            localStorage.setItem("admissionData", JSON.stringify({
                childName, age, parentName, contact, email, batch: batch.value
            }));

            // Redirect to Thank You page
            window.location.href = "thankyou.html";
        });
    }
});
