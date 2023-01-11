// export const scrolling = (upSelector: string) => {
//     const upElem: HTMLElement = document.querySelector(upSelector) as HTMLElement;

//     window.addEventListener('scroll', (): void => {
//         if (document.documentElement.scrollTop > 1650) {
//             upElem.classList.add('animated', 'fadeIn');
//             upElem.classList.remove('fadeOut')
//         } else {
//             upElem.classList.add('fadeOut')
//             upElem.classList.remove('fadeIn');
//         }
//     })

//     const element: HTMLElement = document.documentElement;
//     const body: HTMLElement = document.body;

//     const calcScroll = (): void => {
//         upElem.addEventListener('click', function (this: any, e: Event): void {
//             const scrollTop = Math.round(body.scrollTop || element.scrollTop);

//             if (this.hash !== '') {
//                 e.preventDefault();
//                 let hashElement: HTMLElement = document.querySelector(this.hash) as HTMLElement;
//                 let hashElementTop: number = 0

//                 while (hashElement.offsetParent) {
//                     hashElementTop += hashElement.offsetTop;
//                     (hashElement as Element) = hashElement.offsetParent
//                 }
//                 hashElementTop = Math.round(hashElementTop);
//                 smoothScroll(scrollTop, hashElementTop, this.hash);
//             }
//         });
//     };

//     const smoothScroll = (from: number, to: number, hash: string) => {
//         let timeInterval: number = 1;
//         let prevScrollTop: number;
//         let speed: number;

//         if (to > from) {
//             speed = 30;
//         } else {
//             speed = -30;
//         }

//         const move = setInterval((): void => {
//             const scrollTop = Math.round(body.scrollTop || element.scrollTop);

//             if (prevScrollTop === scrollTop ||
//                 (to > from && scrollTop >= to) ||
//                 (to < from && scrollTop < to)
//             ) {
//                 clearInterval(move)
//                 history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
//             } else {
//                 body.scrollTop += speed;
//                 element.scrollTop += speed;
//                 prevScrollTop = scrollTop
//             }
//         }, timeInterval)
//     }
//     calcScroll();
// };

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



