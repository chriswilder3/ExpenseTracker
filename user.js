document.addEventListener('DOMContentLoaded',() =>{

    const currentProfileName = localStorage.getItem('current-profile');
    let nameDispay = document.querySelector('.profile-name');

    nameDispay.textContent = `Welcome ${currentProfileName},`;
    
    let currentProfileInfo = localStorage.getItem(`${currentProfileName}`);
    
    // let profileInfoDisplay = document.querySelector('.profile-info')
    // profileInfoDisplay.textContent = `${currentProfileInfo}`

    currentProfileInfo = JSON.parse(currentProfileInfo)

    let profileSalaryDisplay = document.querySelector('.profile-salary');
    profileSalaryDisplay.textContent = `Salary: ${currentProfileInfo['profileSalary']}`;

    let profileCurrencyDisplay = document.querySelector('.profile-currency');
    profileCurrencyDisplay.textContent = `Currency: ${currentProfileInfo['profileCurrency']}`;

    let profileSavingsGoalDisplay = document.querySelector('.profile-savings-goal');
    profileSavingsGoalDisplay.textContent = `Savings Goal: ${currentProfileInfo['profileSavingsGoal']}`;

    let profileEmailDisplay = document.querySelector('.profile-email');
    profileEmailDisplay.textContent = `Email: ${currentProfileInfo['profileEmail']}`;

    let profileStartDateDisplay = document.querySelector('.profile-start-date');
    profileStartDateDisplay.textContent = `Start Date: ${currentProfileInfo['profileStartDate']}`;

    

    
    
    
})           

