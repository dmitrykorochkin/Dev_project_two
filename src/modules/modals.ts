export const modals = (): void => {

  let btnPressed: boolean = false

  const bindModal = (triggerSelector: string, modalSelector: string, closeSelector: string, destroy = true): void => {
    const triggers: NodeListOf<HTMLElement> = document.querySelectorAll(triggerSelector);
    const modal: HTMLElement = document.querySelector(modalSelector) as HTMLDivElement;
    const close: HTMLElement = document.querySelector(closeSelector) as HTMLDivElement ;
    const windows: NodeListOf<Element> = document.querySelectorAll('[data-modal]');
    const scroll: number = calcScroll();

    triggers.forEach((trigger: Element): void => {
      trigger.addEventListener("click", (e: Event): void => {
        if (e.target) {
          e.preventDefault();
        }
        btnPressed = true;

        if (destroy) {
          trigger.remove()
        }

        windows.forEach(window => {
          (window as HTMLElement).style.display = "none";
          window.classList.add('animated', 'fadeIn');
        });

        (modal as HTMLElement).style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`
      });
    });

    const windowModal = (): void => {
      windows.forEach(window => {
        (window as HTMLElement).style.display = "none"
      })
    }

    const closeModal = (): void => {
      (modal as HTMLElement).style.display = "none";
      document.body.style.overflow = "";
    };

    const hiddenScroll = (): void => {
      document.body.style.marginRight = `0px`
    }

    document.addEventListener("keydown", function (e) {
      const key = e.key;
      if (key === "Escape") {
        closeModal();
      }
    });

    close.addEventListener("click", () => {
      windowModal();
      closeModal();
      hiddenScroll();

    });
    modal.addEventListener("click", (e) => {

      if (e.target === modal) {
        windowModal();
        closeModal();
        hiddenScroll();
      }
    });
  };

  const showModalByTime = (selector: string, time: number): void => {
    setTimeout(function () {

      let displays: string;
      document.querySelectorAll('[data-modal]').forEach(item => {
        if (getComputedStyle(item).display !== 'none') {
          displays = 'block'
        };
        if (!displays) {
          const selectorShowModal: HTMLElement = document.querySelector(selector) as HTMLElement;
          selectorShowModal.style.display = "block";
          document.body.style.overflow = "hidden";
          const scroll: number = calcScroll();
          document.body.style.marginRight = `${scroll}px`

        }
      })
    }, time);
  };

  const calcScroll = (): number => {

    const div: HTMLElement = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    const scrollWidth: number = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;

  }

  const openByScroll = (selector: any): void => {
    window.addEventListener('scroll', () => {
      const scrollHeight: number = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {
        document.querySelector(selector).click();
      }
    })
  }

  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
  openByScroll('.fixed-gift')
  showModalByTime(".popup-consultation", 300000);
};


