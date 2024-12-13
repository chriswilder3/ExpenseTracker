document.addEventListener('DOMContentLoaded', function() {
    const txndeleteBtns = document.querySelectorAll('#delete-btn');
    // const txndeleteIndexVals = document.querySelector('#delete-trx-index')

    txndeleteBtns.forEach( (txndeleteBtn, btnIndex) => {

        txndeleteBtn.addEventListener("click", function() {

            console.log( btnIndex);

            const currentProfileName = localStorage.getItem('current-profile')

            let currentProfileInfo = localStorage.getItem(`${currentProfileName}`)

            currentProfileInfo = JSON.parse(currentProfileInfo);

            let transactionArray = currentProfileInfo['profileTransactions'];

            // console.log( transactionArray.length);
            console.log( transactionArray.splice(btnIndex,1));

            console.log(transactionArray);

            // Currently correct transactionArray remains, But

            currentProfileInfo['profileTransactions'] = transactionArray;

            localStorage.setItem(`${currentProfileName}`, JSON.stringify(currentProfileInfo));
            alert(' Transaction Deleted Successfully! ');
            window.location.reload();

            
        });
    });
});
