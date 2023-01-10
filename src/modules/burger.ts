export const burger = (menuSelector: string, burgerSelector: string): void => {
    const menuElem: HTMLElement = document.querySelector(menuSelector) as HTMLElement;
    const burgerElem: HTMLElement = document.querySelector(burgerSelector) as HTMLElement;

    menuElem.style.display = 'none';
    burgerElem.addEventListener('click', () => {
        if(menuElem.style.display === 'none' && window.screen.availWidth < 993) {
            (menuElem as HTMLElement).style.display === 'block'
        } else {
            menuElem.style.display = 'none'
        }
    });

    window.addEventListener('resize', (): void => {
        if(window.screen.availWidth > 992) {
            menuElem.style.display = 'none';
        }
    })


}