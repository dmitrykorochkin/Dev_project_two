export const sliders =
    ({
        slides,
        dir,
        prev,
        next
    }:
    {
        slides: string,
        dir: string,
        prev?: any,
        next?: any

    }): void => {

        let slideIndex: number = 1;
        let paused: number;
        const items: NodeListOf<HTMLElement> = document.querySelectorAll(slides);


        const showSlides = (i: number): void => {
            if (i > items.length) {
                slideIndex = 1;
            }
            if (i < 1) {
                slideIndex = items.length
            }
            items.forEach(item => {
                item.classList.add('animated');
                item.style.display = 'none';
            })
            const lastElement = items[slideIndex - 1] as HTMLElement
            if (lastElement) {
                lastElement.style.display = 'block';
            }

        }
        showSlides(slideIndex);

        const plusSlides = (i: number): void => {
            showSlides(slideIndex += i);
        }

        try {
            const prevBtn: Element = document.querySelector(prev) as HTMLDivElement;
            const nextBtn: Element = document.querySelector(next) as HTMLDivElement;

            prevBtn.addEventListener('click', () => {
                plusSlides(-1);
                items[slideIndex - 1].classList.remove('slideInLeft');
                items[slideIndex - 1].classList.add('slideInRight');
            })
            nextBtn.addEventListener('click', () => {
                plusSlides(1);
                items[slideIndex - 1].classList.remove('slideInRight');
                items[slideIndex - 1].classList.add('slideInLeft');
            })
        } catch (e) {}

        const activateAnimation = () => {
            if (dir === 'vertical') {
                paused = <any>setInterval(function (): void {
                    plusSlides(1);
                    items[slideIndex - 1].classList.add('slideInDown');
                }, 5000)
            } else {
                paused = <any>setInterval(function (): void {
                    plusSlides(1);
                    items[slideIndex - 1].classList.remove('slideInRight');
                    items[slideIndex - 1].classList.add('slideInLeft');
                }, 5000)
            }
        }
        const parentNode = items[0]?.parentNode
        if (parentNode) {
            parentNode.addEventListener('mouseenter', () => {
                clearInterval(paused);
            })
            parentNode.addEventListener('mouseleave', () => {
                activateAnimation();
            })

        }

    }