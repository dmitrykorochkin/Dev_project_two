export const modals = (): void => {
    const bindModal = (triggerSelector: string, modalSelector: string, closeSelector: string, closeClickOverlay = true): void => {
      const triggers: NodeListOf<HTMLElement> = document.querySelectorAll(triggerSelector);
      const modal: HTMLElement = document.querySelector(modalSelector) as HTMLDivElement;
      const close: HTMLElement  = document.querySelector(closeSelector) as HTMLDivElement;
      const windows: NodeListOf<Element> = document.querySelectorAll('[data-modal]');
      const scroll: number = calcScroll();
  
      triggers.forEach((trigger: Element): void => {
        trigger.addEventListener("click", (e: Event): void => {
          if (e.target) {
            e.preventDefault();
          }
  
          windows.forEach(window => {
            (window as HTMLElement).style.display = "none"
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
  
        if (e.target === modal && closeClickOverlay) {
          windowModal();
          closeModal();
          hiddenScroll();
        }
      });
    };
  
    const showModalByTime = (selector: string, time: number): void => {
      setTimeout(function () {
        let selectorShowModal = document.querySelector(selector) as HTMLElement;
        selectorShowModal.style.display = "block";
        document.body.style.overflow = "hidden";
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
      div.remove()
  
      return scrollWidth
  
    }
  
    bindModal('.button-design','.popup-design', '.popup-design .popup-close');
    
    // showModalByTime(".popup", 3000);
  };
  
  
