import { getResource } from "../services/request";

export const showMoreStyles = (trigger: string, styles: string): void => {
    const cards: NodeListOf<HTMLDivElement> = document.querySelectorAll(styles);
    const button: Element = document.querySelector(trigger) as HTMLButtonElement;

    // cards.forEach(card => {
    //     card.classList.add('animated', 'fadeInUp')
    // })

    // button.addEventListener('click', (): void => {
    //     cards.forEach(card => {
    //         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1',)
    //         card.classList.remove('hidden-lg', 'hidden-sm', 'hidden-xs', 'hidden-md',)
    //     })

    //     button.remove()
    // })

    button.addEventListener('click', () => {
        getResource('http://localhost:3000/styles')
        .then(res => console.log(res));
    })
};

// <div class="hidden-lg hidden-md hidden-sm hidden-xs styles-2">
// <div class=styles-block>
//     <img src=src/img/styles-5.jpg alt>
//     <h4>Пастелью</h4>
//     <a href="#">Подробнее</a>
// </div>
// </div>