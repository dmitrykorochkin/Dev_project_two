export const filter = (): void => {
    const menu: HTMLElement = document.querySelector('.portfolio-menu') as HTMLElement;
    const items: NodeListOf<HTMLLIElement> = menu.querySelectorAll('li');
    const btnAll: HTMLElement = menu.querySelector('.all') as HTMLElement;
    const btnLovers: HTMLElement = menu.querySelector('.lovers') as HTMLElement; 
    const btnChef: HTMLElement = menu.querySelector('.chef') as HTMLElement;
    const btnGirl: HTMLElement = menu.querySelector('.girl') as HTMLElement;
    const btnGuy: HTMLElement = menu.querySelector('.guy') as HTMLElement;
    const btnGrandmother: HTMLElement = menu.querySelector('.grandmother') as HTMLElement;
    const btnGranddad: HTMLElement = document.querySelector('.granddad') as HTMLElement;
    const wrapper: HTMLElement = document.querySelector('.portfolio-wrapper') as HTMLElement;
    const markAll: NodeListOf<HTMLLIElement>  = wrapper.querySelectorAll('.all');
    const markLovers: NodeListOf<HTMLLIElement> = wrapper.querySelectorAll('.portfolio-menu');
    const markChef: NodeListOf<HTMLLIElement> = wrapper.querySelectorAll('.portfolio-menu');
    const markGuy: NodeListOf<HTMLLIElement> = wrapper.querySelectorAll('.portfolio-menu');
    const markGirl: NodeListOf<HTMLLIElement> = wrapper.querySelectorAll('.portfolio-menu');
    const no: HTMLElement = document.querySelector('.portfolio-menu')  as HTMLElement;

    const typeFilter = (markType: any): void => {
        markAll.forEach((mark) => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        })

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeOut');

    if(markType) {
        markType.forEach((mark: HTMLElement) => {
            (mark as HTMLElement).style.display = 'block';
            mark.classList.add('animated', 'fadeIn');
        });
    } else {
        no.style.display = 'block';
        no.classList.add('animated', 'fadeOut');
    };

    btnAll.addEventListener('click', (): void => {
        typeFilter(markAll);
    });
    btnLovers.addEventListener('click', (): void => {
        typeFilter(markLovers);
    });
    btnChef.addEventListener('click', (): void => {
        typeFilter(markChef);
    });
    btnGuy.addEventListener('click', (): void => {
        typeFilter(markGuy);
    });
    btnGirl.addEventListener('click', (): void => {
        typeFilter(markGirl);
    });
    btnGrandmother.addEventListener('click', (): void => {
        typeFilter();
    });
    btnGranddad.addEventListener('click', (): void => {
        typeFilter();
    })

    menu.addEventListener('click', (e: Event): void => {
        const target: any = e.target;
        if(target && target.tagName == 'LI') {
            items.forEach(btn => btn.classList.remove('active'))
            target.classList.add('active');
        }
    })
    }

    
    
}