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
        let paused: boolean = false;
        const items: NodeListOf<HTMLElement> = document.querySelectorAll(slides);


        const showSlides = (i): void => {
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
            items[slideIndex - 1].style.display = 'block';
        }
        showSlides(slideIndex);

        const plusSlides = (i: any): void => {
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
        } catch (e) {

        }
        const activateAnimation = () => {
            if (dir === 'vertical') {
                paused = setInterval(function (): void {
                    plusSlides(1);
                    items[slideIndex - 1].classList.add('sliderInDown');
                }, 5000)
            } else {
                paused = setInterval(function (): void {
                    plusSlides(1);
                    items[slideIndex - 1].classList.remove('slideInRight');
                    items[slideIndex - 1].classList.add('slideInLeft');
                }, 5000)
            }
        }
        items[0].parentNode?.addEventListener('mouseenter', () => {
            clearInterval(paused);
        })
        items[0].parentNode?.addEventListener('mouseleave', () => {
            activateAnimation
        })



    }