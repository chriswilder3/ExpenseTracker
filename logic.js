document.addEventListener('DOMContentLoaded', function() {
    const profileForm = document.querySelector('.user-form');

    profileForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.querySelector('#name').value.trim();
        const salary = document.querySelector('#salary').value.trim();
        const currency = document.querySelector('#currency').value.trim();
        const savingsGoal = document.querySelector('#savings-goal').value.trim();
        const email = document.querySelector('#email').value.trim();
        const startDate = document.querySelector('#start-date').value.trim();

        // Log data for debugging
        console.log(name, salary, currency, savingsGoal, email, startDate);

        const existingProfiles = localStorage.getItem('profile-names');
        let profileNames = existingProfiles ? JSON.parse(existingProfiles) : [];

        if (profileNames.includes(name)) {
            // Raise form error
            const errorElement = document.querySelector('.form-error');
            if (errorElement) {
                errorElement.textContent = `Profile name "${name}" already exists. Please choose a different name.`;
                errorElement.style.display = 'block'; // Show error
            }
        } else {
            // Add name to the profile list and save to local storage
            profileNames.push(name);
            localStorage.setItem('profile-names', JSON.stringify(profileNames));

            // Optional: Provide success feedback
            alert('Profile created successfully!');
            profileForm.reset();
        }
    });
});
