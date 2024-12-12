document.addEventListener('DOMContentLoaded',() =>{

    const currentProfileName = localStorage.getItem('current-profile');
    let nameDispay = document.querySelector('.profile-name');

    nameDispay.textContent = `Welcome ${currentProfileName},`;
    
    let currentProfileInfo = localStorage.getItem(`${currentProfileName}`);
    
    // let profileInfoDisplay = document.querySelector('.profile-info')
    // profileInfoDisplay.textContent = `${currentProfileInfo}`

    currentProfileInfo = JSON.parse(currentProfileInfo)

    
    const currency = currentProfileInfo['profileCurrency'] ;

    let profileSalaryDisplay = document.querySelector('.profile-salary');
    let salary = currentProfileInfo['profileSalary'];

    profileSalaryDisplay.textContent = `Total income : ${salary} ${currency}`;

    let profileSavingsGoalDisplay = document.querySelector('.profile-savings-goal');
    profileSavingsGoalDisplay.textContent = `Savings goal : ${currentProfileInfo['profileSavingsGoal']} ${currency}`;

    let profileEmailDisplay = document.querySelector('.profile-email');
    profileEmailDisplay.textContent = `Email : ${currentProfileInfo['profileEmail']}`;

    let profileStartDateDisplay = document.querySelector('.profile-start-date');
    profileStartDateDisplay.textContent = `Start Date : ${currentProfileInfo['profileStartDate']}`;

    let profileExpensesDisplay = document.querySelector('.profile-expenses');
    let totalExpenses = 0;

    if('profileExpenses' in currentProfileInfo){
        totalExpenses = currentProfileInfo['profileExpenes'];
        profileExpensesDisplay.textContent = `Total expenses : ${totalExpenses} `;
    }
    else{
        profileExpensesDisplay.innerHTML = 
            `Total expenses : 0 <br/> <span class="text-base text-red-500"> Add more transactions! </span>`;
    }

    let netIncome = salary-totalExpenses;

    let profileNetIncomeDisplay = document.querySelector('.profile-net-income');
    profileNetIncomeDisplay.textContent = ` Your net income : ${netIncome} ${currency}`;



    
    

    
    
    
})           

