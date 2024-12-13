document.addEventListener('DOMContentLoaded', function() {
    const txndeleteBtns = document.querySelectorAll('#delete-btn');
    const txndeleteIndexVals = document.querySelector('#delete-trx-index')

    txndeleteBtns.forEach( (txndeleteBtn, btnIndex) => {

        txndeleteBtn.addEventListener("click", function() {

            const trxIndex = document.querySelector('#delete-trx-index').value    
            console.log(trxIndex , btnIndex);

            const currentProfileName = localStorage.getItem('current-profile')

            let currentProfileInfo = localStorage.getItem(`${currentProfileName}`)

            currentProfileInfo = JSON.parse(currentProfileInfo);

            let transactionArray = currentProfileInfo['profileTransactions'];

            console.log( transactionArray.length);
            console.log( transactionArray.splice(btnIndex,1));




            
        });
    });
});
