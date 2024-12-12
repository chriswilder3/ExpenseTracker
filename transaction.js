document.addEventListener('DOMContentLoaded',() =>{

    const currentProfileName = localStorage.getItem('current-profile');
    
    let currentProfileInfo = localStorage.getItem(`${currentProfileName}`);
    currentProfileInfo = JSON.parse(currentProfileInfo);

    let salary = currentProfileInfo['profileSalary'];

    document.querySelector('.transaction-form')
        .addEventListener('submit', function(e){
            e.preventDefault();

            const transactionDate = document.querySelector('#transaction-date').value.trim();
            const description = document.querySelector('#description').value.trim();
            const category = document.querySelector('#category').value;
            const amount = parseFloat(document.querySelector('#amount').value.trim());
            const transactionType = document.querySelector('#transaction-type').value;

            console.log(transactionDate, description, category, amount, transactionType);

            

        }
    
    )




    
    

    
    
    
})           

