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
                    ` <input type='submit' value='${name}' class="item-btn bg-slate-100 rounded p-2  hover:bg-slate-200"> 
                        name : ${name} 
                    </input>`

            profileList.appendChild(itemElem);

        });

        // Optional: Provide success feedback
        if(profileNames === []){
            
            profileList.textContent = 'No profiles exist'
        }

        const itemBtns = document.querySelectorAll('.item-btn')

        itemBtns.forEach( (btn,index) =>
                btn.addEventListener('click', () =>{
                    const itemName = btn.value;
                    console.log(itemName);
                    localStorage.setItem('current-profile',`${itemName}`)
                    window.open('./user.html')
            })
        )
        
        
})           
