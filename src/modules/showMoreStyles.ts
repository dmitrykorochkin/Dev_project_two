export const showMoreStyles = (trigger: string, styles: string): void => {
    const cards: NodeListOf<HTMLDivElement> = document.querySelectorAll(styles);
    const button: Element = document.querySelector(trigger) as HTMLButtonElement;

    cards.forEach(card => {
        card.classList.add('animated', 'fadeInUp')
    })

    button.addEventListener('click', (): void => {
        cards.forEach(card => {
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1',)
            card.classList.remove('hidden-lg', 'hidden-sm', 'hidden-xs', 'hidden-md',)
        })

        button.remove()
    })
};