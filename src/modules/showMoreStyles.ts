import { getResource } from "../services/request";

export const showMoreStyles = (trigger: string, styles: string): void => {
    const cards: NodeListOf<HTMLDivElement> = document.querySelectorAll(styles);
    const button: Element = document.querySelector(trigger) as HTMLButtonElement;

    button.addEventListener('click', () => {
        getResource('http://localhost:3000/styles')
            .then(res => console.log(res));
    })

    const createCards = (response): void => {
        response.forEach(item => {
            let card = document.createElement('div')
            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1')

            card.innerHTML = `
                <div class=styles-block>
                    <img src=${item.src} alt>
                    <h4>${item.title}</h4>
                    <a href="${item.link}">Подробнее</a>
                </div>
            `
        })
    }
};

// <div class="hidden-lg hidden-md hidden-sm hidden-xs styles-2">
// <div class=styles-block>
//     <img src=src/img/styles-5.jpg alt>
//     <h4>Пастелью</h4>
//     <a href="#">Подробнее</a>
// </div>
// </div>