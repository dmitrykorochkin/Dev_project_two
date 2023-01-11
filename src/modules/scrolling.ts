export const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut')
        } else {
            upElem.classList.add('fadeOut')
            upElem.classList.remove('fadeIn');
        }
    })

    const element = document.documentElement;
    const body = document.body;

    const calcScroll = (): void => {
        upElem.addEventListener('click', function (e: Event): void {
            const scrollTop = Math.round(body.scrollTop || element.scrollTop);

            if (this.hash !== '') {
                e.preventDefault();
                const hashElement = document.querySelector(this.hash);
                const hashElementTop = 0

                while (hashElement.offsetParent) {
                    hashElementTop += hashElement.offsetTop;
                    hashElement = hashElement.offsetParent
                }
                hashElementTop = Math.round(hashElementTop);
                smoothScroll(scrollTop, hashElementTop, this.hash);


            }
        });
    };

    const smoothScroll = (from, to, hash) => {
        let timeInterval: number = 1;
        let prevScrollTop: number;
        let speed: number;

        if (to > from) {
            speed = 30;
        } else {
            speed = -30;
        }

        const move = setInterval(() => {
            const scrollTop = Math.round(body.scrollTop || element.scrollTop);

            if (prevScrollTop === scrollTop ||
                (to > from && scrollTop >= to) ||
                (to < from && scrollTop < to)
            ) {
                clearInterval(move)
                history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
            } else {
                body.scrollTop += speed;
                element.scrollTop += speed;
                prevScrollTop = scrollTop
            }
        }, timeInterval())
    }
    calcScroll();
};
