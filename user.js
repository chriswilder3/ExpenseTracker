document.addEventListener('DOMContentLoaded',() =>{

    const currentProfileName = localStorage.getItem('current-profile');
    let nameDispay = document.querySelector('.profile-name');

    nameDispay.textContent = `Welcome ${currentProfileName},`;
    
    const currentProfileInfo = localStorage.getItem(`${currentProfileName}`);
    let profileInfoDisplay = document.querySelector('.profile-info')
    profileInfoDisplay.textContent = `${currentProfileInfo}`
    

    
    
    
})           

