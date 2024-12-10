const observer = new IntersectionObserver(
    (entries,observer ) =>{
        entries.forEach( (entry)=>{
            if(entry){
                if( entry.isIntersecting){
                    entry.target.classList.add('slide-out')
                }
            }
        }
        )
    }
)


document.addEventListener('DOMContentLoaded', ()=>{
    const elements = document.querySelectorAll('.slide-in')
    if(elements){
        elements.forEach(){
            
        }
    }
})