export const accordions = (triggerSelector: string) => {
    const btns: NodeListOf<HTMLElement> = document.querySelectorAll(triggerSelector);

    btns.forEach(btn => {
        btn.addEventListener('click', function (this: HTMLElement) {
            this.classList.toggle('active-style');
            (this.nextElementSibling as HTMLElement).classList.toggle('active-content');

            if (this.classList.contains('active-style')) {
                (this.nextElementSibling as HTMLElement).style.maxHeight = (this.nextElementSibling as HTMLElement).scrollHeight + 80 + 'px';
            } else {
                (this.nextElementSibling as HTMLElement).style.maxHeight = '0px'
            }
        });
    });
};