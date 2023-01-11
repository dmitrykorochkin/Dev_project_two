export const scrolling = (upSelector: string) => {
    const anchors: NodeListOf<Element> = document.querySelectorAll('a[href*="#"]');

        const upElem: HTMLElement = document.querySelector(upSelector) as HTMLElement;

    window.addEventListener('scroll', (): void => {
        if (document.documentElement.scrollTop > 1650) {
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut')
        } else {
            upElem.classList.add('fadeOut')
            upElem.classList.remove('fadeIn');
        }
    })

    for(const anchor of Array.from(anchors)) {
        anchor.addEventListener('click', (e: Event) => {
            e.preventDefault();
            const blockID: string = anchor.getAttribute('href') as string;
            document.querySelector(blockID)?.scrollIntoView({
                behavior: 'smooth',
            })
        })
    }
}



