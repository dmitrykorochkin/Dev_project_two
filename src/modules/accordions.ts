export const accordion = (triggerSelector: string) => {
    const btns: NodeListOf<HTMLElement> = document.querySelectorAll(triggerSelector);

    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            this.classList.toggle('active-style');
            this.nextElementSibling.classlist.toggle('active-content');

            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
            } else {
                this.nextElementSibling.style.maxHeight = '0px'
            }
        });
    });
};