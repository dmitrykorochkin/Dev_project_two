import { getResource } from "../services/request";

export const showMoreStyles = (trigger: string, wrapper: NodeListOf<Element>): void => {
    
    const button: Element = document.querySelector(trigger) as HTMLButtonElement;

    button.addEventListener('click', function(this:HTMLInputElement):void {
        getResource('/src/db.json')
            .then(res => createCards(res.style))

        this.remove();

    });

    const createCards = (response: any): void => {
        response.forEach(({src, title, link}):void => {
            let card: HTMLDivElement = document.createElement('div')
            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1')

            card.innerHTML = `
                <div class=styles-block>
                    <img src=${src} alt>
                    <h4>${title}</h4>
                    <a href="${link}">Подробнее</a>
                </div>
            `;
            document.querySelector(wrapper).append(card);
        })
        
    }
};