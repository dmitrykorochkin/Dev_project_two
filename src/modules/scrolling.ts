export const scrolling = () => {
    window.addEventListener('scroll', () => {
         if(document.documentElement.scrollTop > 1650) {
            console.log(1)
         }
    })
}