    document.addEventListener('DOMContentLoaded',() =>{

        const existingProfiles = localStorage.getItem('profile-names');
        let profileNames = existingProfiles ? JSON.parse(existingProfiles) : [];
        console.log(profileNames);
        
        let profileList = document.querySelector('.profile-list');

        // console.log(profileList.innerHTML);
        
        profileNames.forEach( (name) => {
            
            let itemElem = document.createElement("div");
            // itemElem.classList.add('bg-slate-100 rounded p-2  hover:bg-slate-200 ')
            itemElem.innerHTML = 
                    ` <a class="bg-slate-100 rounded p-2  hover:bg-slate-200"> 
                        name : ${name} 
                    </a>`

            profileList.appendChild(itemElem);

        });

        // Optional: Provide success feedback
        if(profileNames === []){
            
            profileList.textContent = 'No profiles exist'
        }
        
})           

