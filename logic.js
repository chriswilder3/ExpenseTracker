document.addEventListener('DOMContentLoaded', function(){

    const profileForm = document.querySelector('.user-form')

    profileForm.addEventListener("submit", function(e){
        e.preventDefault();
        const name = document.querySelector('#name').value
        const salary = document.querySelector('#salary').value
        const currency = document.querySelector('#currency').value
        const expenses = document.querySelector('#fixed-expenses').value
        const savingsGoal = document.querySelector('#savings-goal').value
        const categories = document.querySelector('#categories').value
        const email = document.querySelector('#email').value
        const startDate = document.querySelector('#start-date').value

        console.log(name, salary, currency, expenses, savingsGoal, categories, email, startDate);





    })


})